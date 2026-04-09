const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerIdentifier: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
  },
  commLink: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true,
  },
  machineSpecs: {
    type: String,
    required: true,
    maxlength: 200,
    trim: true,
  },
  serviceClass: {
    type: String,
    enum: ['General Checkup', 'Oil Change', 'Brakes & Suspension', 'Full Servicing'],
    default: 'General Checkup',
  },
  needsPickup: {
    type: Boolean,
    default: false,
  },
  pickupAddress: {
    type: String,
    trim: true,
  },
  executionDate: {
    type: Date,
    required: true,
  },
  problemDescription: {
    type: String,
    required: false,
    maxlength: 1000,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
