import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    customerIdentifier: '',
    commLink: '',
    machineSpecs: '',
    serviceClass: 'General Checkup',
    executionDate: '',
    problemDescription: '',
    needsPickup: false,
    pickupAddress: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Basic validation for pickup address if opted in
    if (formData.needsPickup && !formData.pickupAddress.trim()) {
      setError('Please provide a pickup address');
      setLoading(false);
      return;
    }

    try {
      let apiBaseUrl = import.meta.env.VITE_API_URL || '';
      // Fail-safe: Ensure URL starts with http to prevent relative path mapping
      if (apiBaseUrl && !apiBaseUrl.startsWith('http')) {
        apiBaseUrl = `https://${apiBaseUrl}`;
      }
      const response = await fetch(`${apiBaseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          customerIdentifier: '', 
          commLink: '', 
          machineSpecs: '', 
          serviceClass: 'General Checkup', 
          executionDate: '', 
          problemDescription: '',
          needsPickup: false,
          pickupAddress: ''
        });
      } else {
        const errorMessage = data.errors ? data.errors.join(', ') : (data.error || 'Submission failed');
        setError(errorMessage);
      }
    } catch (err) {
      setError('Connection error. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <section className="py-32 px-8 bg-on-surface text-surface relative overflow-hidden scroll-mt-24" id="book">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Book <br />A Service</h2>
            <p className="text-surface/60 mb-16 text-lg font-light leading-relaxed">Tell us about your vehicle and what you need. Our team will get back to you and confirm your appointment within 60 minutes.</p>
          </div>
          <div className="lg:col-span-7 bg-surface p-12 text-on-surface border-l-[12px] border-primary">
            {success && (
              <div className="mb-8 p-4 bg-primary/20 border border-primary text-primary text-xs uppercase font-bold tracking-widest text-center">
                Booking Received Successfully
              </div>
            )}
            {error && (
              <div className="mb-8 p-4 bg-red-100 border border-red-500 text-red-700 text-xs uppercase font-bold tracking-widest text-center">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="text-sm font-black uppercase tracking-[0.2em] text-primary block mb-1">Full Name</label>
                <input 
                  required
                  name="customerIdentifier"
                  value={formData.customerIdentifier}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-on-surface/10 focus:ring-0 px-0 py-3 text-sm placeholder:text-on-surface/50 outline-none" 
                  placeholder="FULL NAME" 
                  type="text" 
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>
              <div className="relative group">
                <label className="text-sm font-black uppercase tracking-[0.2em] text-primary block mb-1">Phone Number</label>
                <input 
                  required
                  name="commLink"
                  value={formData.commLink}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-on-surface/10 focus:ring-0 px-0 py-3 text-sm placeholder:text-on-surface/50 outline-none" 
                  placeholder="PHONE NUMBER" 
                  type="tel" 
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>
              <div className="relative group">
                <label className="text-sm font-black uppercase tracking-[0.2em] text-primary block mb-1">Vehicle Model</label>
                <input 
                  required
                  name="machineSpecs"
                  value={formData.machineSpecs}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-on-surface/10 focus:ring-0 px-0 py-3 text-sm placeholder:text-on-surface/50 outline-none" 
                  placeholder="MAKE / MODEL" 
                  type="text" 
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>
              <div className="relative group">
                <label className="text-sm font-black uppercase tracking-[0.2em] text-primary block mb-1">Type of Service</label>
                <select 
                  name="serviceClass"
                  value={formData.serviceClass}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-on-surface/10 focus:ring-0 px-0 py-3 uppercase text-sm font-bold appearance-none outline-none cursor-pointer"
                >
                  <option value="General Checkup">General Checkup</option>
                  <option value="Oil Change">Oil Change</option>
                  <option value="Brakes & Suspension">Brakes & Suspension</option>
                  <option value="Full Servicing">Full Servicing</option>
                </select>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>
              <div className="md:col-span-2 relative group">
                <label className="text-sm font-black uppercase tracking-[0.2em] text-primary block mb-1">Preferred Date</label>
                <input 
                  required
                  name="executionDate"
                  value={formData.executionDate}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-on-surface/10 focus:ring-0 px-0 py-3 text-sm outline-none" 
                  type="date" 
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>

              {/* Pickup Toggle */}
              <div className="md:col-span-2 py-4">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox"
                      name="needsPickup"
                      checked={formData.needsPickup}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-12 h-6 rounded-full transition-all duration-300 ${formData.needsPickup ? 'bg-primary' : 'bg-on-surface/10'}`}></div>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-surface rounded-full transition-all duration-300 ${formData.needsPickup ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                  <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${formData.needsPickup ? 'text-primary' : 'text-on-surface/40'}`}>
                    Include Pickup & Delivery Service?
                  </span>
                </label>
              </div>

              {/* Conditional Address Field */}
              {formData.needsPickup && (
                <div className="md:col-span-2 relative group animate-in fade-in slide-in-from-top-4 duration-500">
                  <label className="text-sm font-black uppercase tracking-[0.2em] text-primary block mb-1">Pickup Address</label>
                  <textarea 
                    required={formData.needsPickup}
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                    rows="2"
                    className="w-full bg-transparent border-0 border-b border-on-surface/10 focus:ring-0 px-0 py-3 text-sm placeholder:text-on-surface/50 outline-none resize-none" 
                    placeholder="ENTER FULL ADDRESS FOR PICKUP..."
                  ></textarea>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
                  <p className="text-[10px] uppercase font-bold opacity-30 mt-2">Available within Madurai city limits</p>
                </div>
              )}

              <div className="md:col-span-2 relative group">
                <label className="text-sm font-black uppercase tracking-[0.2em] text-primary block mb-1">Describe the Issue</label>
                <textarea 
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent border-0 border-b border-on-surface/10 focus:ring-0 px-0 py-3 text-sm placeholder:text-on-surface/50 outline-none resize-none" 
                  placeholder="PLEASE DESCRIBE THE ISSUE IN DETAIL..."
                ></textarea>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>
              <div className="md:col-span-2 mt-6">
                <button 
                  disabled={loading}
                  className="w-full bg-primary text-on-primary py-6 font-black uppercase tracking-[0.3em] text-xs active-press hover:bg-on-surface hover:text-surface transition-precison disabled:opacity-50" 
                  type="submit"
                >
                  {loading ? 'Processing...' : 'Book Appointment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
