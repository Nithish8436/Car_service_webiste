export default function AboutBanner() {
  const values = [
    {
      icon: 'location_on',
      title: 'Serving Madurai & Nearby Areas',
      desc: 'Based in Goripalayam, we serve all areas in and around Madurai. Any car problem nearby? Just call — we arrange help fast.'
    },
    {
      icon: 'handshake',
      title: 'Breakdown Support',
      desc: 'Stuck on the road? We have trusted partner mechanics who can reach you anywhere near Madurai and get you moving.'
    },
    {
      icon: 'build_circle',
      title: 'Accessories & Modifications',
      desc: 'Need custom work, accessories, or modifications? Our reliable partner network gets it done at the best price.'
    },
    {
      icon: 'currency_rupee',
      title: 'Honest, Affordable Pricing',
      desc: 'No hidden charges. We walk you through costs before any work starts — always fair, always transparent.'
    }
  ];

  const partnerServices = [
    { icon: 'local_car_wash', label: 'Car Wash' },
    { icon: 'tire_repair', label: 'Tyre Change' },
    { icon: 'check_circle', label: 'Tyre Health Check' },
    { icon: 'fact_check', label: 'Quality Inspection' },
    { icon: 'local_shipping', label: 'Pickup & Delivery' },
    { icon: 'car_repair', label: 'General Servicing' },
  ];

  return (
    <>
      {/* ── Section 1: About / Values ─────────────────────── */}
      <section className="py-28 px-8 bg-surface-container-low scroll-mt-24" id="about">
        <div className="max-w-[1400px] mx-auto">

          {/* Header — left title / right subtitle split */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs block mb-4">More Than a Garage</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                Your Trusted Car<br />
                <span className="text-primary">Partner in Madurai</span>
              </h2>
            </div>
            <p className="text-on-surface/50 max-w-md text-base leading-relaxed lg:text-right">
              We don't just fix cars — we take complete care of you. From roadside help to accessories and custom work, our partner network has you covered.
            </p>
          </div>

          {/* 4 Value Cards — large gap, light bg, subtle border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div key={i} className="bg-surface p-8 border border-outline/10 group hover:border-primary transition-all duration-500 relative overflow-hidden">
                <span className="absolute bottom-2 right-4 text-[80px] font-black opacity-[0.04] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-all duration-500">
                  <span
                    className="material-symbols-outlined text-primary group-hover:text-on-primary text-xl transition-all duration-500"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-bold uppercase tracking-wide text-sm mb-3 leading-snug">{item.title}</h3>
                <p className="text-on-surface/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-8 bg-on-surface px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-surface font-black text-xl md:text-2xl uppercase tracking-tight">Have a car problem near Madurai?</p>
              <p className="text-surface/40 text-sm mt-1">Call us — we will sort it out, whatever it takes.</p>
            </div>
            <a
              href="tel:+919942033635"
              className="bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest text-sm whitespace-nowrap active-press hover:bg-surface hover:text-on-surface transition-precison w-full md:w-auto text-center"
            >
              Call Us Now
            </a>
          </div>

        </div>
      </section>

      {/* ── Section 2: Partner Services ───────────────────── */}
      <section className="py-20 px-8 bg-surface">
        <div className="max-w-[1400px] mx-auto">

          {/* Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs block mb-3">Through Our Partners</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">We Also Arrange These Services</h2>
            </div>
            <p className="text-on-surface/50 text-sm max-w-sm leading-relaxed md:text-right">
              We pick up your car, get the work done at a trusted partner shop, and deliver it back to you.
            </p>
          </div>

          {/* Service chips — generous gap, clean icon + label */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerServices.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 py-8 px-4 bg-surface-container-low border border-outline/10 hover:border-primary hover:bg-primary/5 transition-all duration-300 group cursor-default"
              >
                <span
                  className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {s.icon}
                </span>
                <span className="font-bold uppercase tracking-wider text-xs text-center leading-tight">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
