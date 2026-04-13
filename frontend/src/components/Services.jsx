export default function Services() {
  return (
    <section className="py-32 bg-on-surface text-surface px-8 overflow-hidden scroll-mt-24" id="services">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm block mb-4">Our Services</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">What We Offer</h2>
          </div>
          <div className="text-right hidden lg:block">
            <p className="text-surface/40 text-sm font-bold uppercase tracking-widest mb-2">Professional Care</p>
            <div className="h-[1px] w-48 bg-primary inline-block"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-4 gap-px bg-surface/10 border border-surface/10">
          {/* Service Card 1 */}
          <article className="md:col-span-6 lg:col-span-1 p-12 bg-on-surface hover:bg-zinc-900 transition-precison group relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl mb-12 text-primary group-hover:scale-110 transition-precison inline-block">settings_input_component</span>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Engine Repair Madurai</h3>
              <p className="opacity-50 text-base leading-relaxed mb-12">Complete diagnostics and repair for all diesel and petrol engines by expert mechanics.</p>
              <span className="text-sm uppercase font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-precison block mt-auto">Service: 01</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </article>
          {/* Service Card 2 */}
          <article className="md:col-span-6 lg:col-span-1 p-12 bg-on-surface hover:bg-zinc-900 transition-precison group relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl mb-12 text-primary group-hover:scale-110 transition-precison inline-block">oil_barrel</span>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Oil & Filters</h3>
              <p className="opacity-50 text-base leading-relaxed mb-12">Premium synthetic oil changes and high-quality filter replacements for engine longevity.</p>
              <span className="text-sm uppercase font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-precison block mt-auto">Service: 02</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </article>
          {/* Service Card 3 */}
          <article className="md:col-span-6 lg:col-span-1 p-12 bg-on-surface hover:bg-zinc-900 transition-precison group relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl mb-12 text-primary group-hover:scale-110 transition-precison inline-block">minor_crash</span>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Brakes & Shocks</h3>
              <p className="opacity-50 text-base leading-relaxed mb-12">Brake pad replacement and suspension tuning for a smooth and safe ride in Madurai traffic.</p>
              <span className="text-sm uppercase font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-precison block mt-auto">Service: 03</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </article>
          {/* Service Card 4 */}
          <article className="md:col-span-6 lg:col-span-1 p-12 bg-on-surface hover:bg-zinc-900 transition-precison group relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-3xl mb-12 text-primary group-hover:scale-110 transition-precison inline-block">battery_charging_full</span>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wider">Battery & Electrical</h3>
              <p className="opacity-50 text-base leading-relaxed mb-12">Battery health checks, wiring repairs, and electrical component fixes for modern cars.</p>
              <span className="text-sm uppercase font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-precison block mt-auto">Service: 04</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </article>
          {/* Expanded Service Row */}
          <div className="md:col-span-12 p-8 md:p-12 bg-on-surface border-t border-surface/10 hover:bg-zinc-900 transition-precison group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-primary mt-1">emergency_home</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">24/7 Roadside Assistance</h3>
                  <p className="opacity-50 text-base max-w-xl leading-relaxed">Fast and reliable towing and roadside repairs for car breakdowns. Our rescue team can reach you anywhere in the city within 30 minutes.</p>
                </div>
              </div>
              <a href="tel:+919942033635" className="bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest text-sm active-press text-center w-full md:w-auto hover:bg-surface hover:text-on-surface transition-precison mt-8 md:mt-0">
                Call for Towing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
