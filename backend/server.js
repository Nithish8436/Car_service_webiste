const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Booking = require('./models/Booking');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Security: HTTP Headers ────────────────────────────────────────────────
app.use(helmet());

// ─── Security: CORS — only allow requests from your own frontend ───────────
const allowedOrigins = [
  'http://localhost:5173', // Vite dev server
  'http://localhost:3000',
  process.env.FRONTEND_URL  // Production URL (set in .env when deploying)
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl) or from allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// ─── Security: Limit payload size to 10KB ─────────────────────────────────
app.use(express.json({ limit: '10kb' }));

// ─── Security: Rate Limiting — max 10 booking requests per 15 min per IP ──
const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again after 15 minutes.' }
});

// ─── Email Configuration (Nodemailer) ──────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ─── Database Connection ───────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/machinist_precision')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ─── Input Validation Rules ────────────────────────────────────────────────
const bookingValidationRules = [
  body('customerIdentifier')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name is too long')
    .escape(),
  body('commLink')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .isMobilePhone('any').withMessage('Enter a valid phone number')
    .isLength({ max: 20 }),
  body('machineSpecs')
    .trim()
    .notEmpty().withMessage('Vehicle model is required')
    .isLength({ max: 200 }).withMessage('Vehicle info is too long')
    .escape(),
  body('serviceClass')
    .trim()
    .isIn(['General Checkup', 'Oil Change', 'Brakes & Suspension', 'Full Servicing'])
    .withMessage('Invalid service type selected'),
  body('executionDate')
    .notEmpty().withMessage('Date is required')
    .isISO8601().withMessage('Invalid date format'),
  body('needsPickup')
    .optional()
    .isBoolean().withMessage('Invalid pickup selection'),
  body('pickupAddress')
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage('Address is too long')
    .escape(),
  body('problemDescription')
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage('Description is too long')
    .escape()
];

// ─── Routes ────────────────────────────────────────────────────────────────
app.post('/api/bookings', bookingLimiter, bookingValidationRules, async (req, res) => {
  // Check validation result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map(e => e.msg) });
  }

  try {
    const { 
      customerIdentifier, 
      commLink, 
      machineSpecs, 
      serviceClass, 
      executionDate, 
      problemDescription,
      needsPickup,
      pickupAddress
    } = req.body;

    const newBooking = new Booking({
      customerIdentifier,
      commLink,
      machineSpecs,
      serviceClass,
      executionDate,
      problemDescription,
      needsPickup,
      pickupAddress
    });

    await newBooking.save();

    // 📩 Send Email Alert to Garage Owner
    const mailOptions = {
      from: `"Siva Garage Alerts" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `🆕 ${needsPickup ? '🚚 PICKUP:' : 'Booking:'} ${customerIdentifier}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #9c3f00; border-bottom: 2px solid #9c3f00; padding-bottom: 10px;">
            ${needsPickup ? '🚚 Pickup & Service Request' : 'New Service Booking'}
          </h2>
          
          <div style="margin-bottom: 20px;">
            <p><strong>Customer:</strong> ${customerIdentifier}</p>
            <p><strong>Contact:</strong> <a href="tel:${commLink}">${commLink}</a></p>
            <p><strong>Vehicle:</strong> ${machineSpecs}</p>
            <p><strong>Service Type:</strong> ${serviceClass}</p>
            <p><strong>Date:</strong> ${new Date(executionDate).toLocaleDateString()}</p>
          </div>

          ${needsPickup ? `
          <div style="background: #fff8f1; border: 1px solid #9c3f00; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 0; font-weight: bold; color: #9c3f00;">🚚 PICKUP ADDRESS:</p>
            <p style="margin: 10px 0 0 0; font-size: 16px;">${pickupAddress}</p>
          </div>
          ` : ''}

          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p style="margin: 0; font-weight: bold; color: #555;">Problem Description:</p>
            <p style="margin: 10px 0 0 0;">${problemDescription || 'No description provided.'}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999;">This is an automated alert from Siva Auto Garage website.</p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending failed:', error);
      } else {
        console.log('Alert email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Booking submitted successfully.' });
  } catch (error) {
    // Log full error internally but never expose it to the client
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

// ─── Global Error Handler ──────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong. Please try again.' });
});

// ─── Start Server ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Siva Auto Garage server running on port ${PORT}`);
});
