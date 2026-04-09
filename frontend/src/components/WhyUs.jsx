export default function WhyUs() {
  return (
    <section className="py-32 px-8 overflow-hidden bg-background scroll-mt-24" id="why-us">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/2 relative">
          <div className="bg-on-surface p-1 relative overflow-hidden group">
            <div className="absolute top-4 right-4 z-20 text-primary font-black text-6xl opacity-20">DATA_SET</div>
            <img 
              className="w-full h-full object-cover grayscale contrast-125 opacity-40 mix-blend-lighten transition-transform duration-1000 group-hover:scale-110" 
              alt="precise mechanical workshop" 
              src="/images/why-us-bg.jpg" 
            />
            <div className="absolute inset-0 p-16 grid grid-cols-2 gap-px bg-on-surface/50">
              <div className="p-8 border border-primary/20 flex flex-col justify-center">
                <div className="text-primary text-5xl font-black mb-2 font-headline">25<span className="text-xl">+</span></div>
                <div className="text-surface/40 text-sm font-bold uppercase tracking-[0.2em]">Years Experience</div>
              </div>
              <div className="p-8 border border-primary/20 flex flex-col justify-center">
                <div className="text-primary text-5xl font-black mb-2 font-headline">9.8<span className="text-xl">K</span></div>
                <div className="text-surface/40 text-sm font-bold uppercase tracking-[0.2em]">Happy Customers</div>
              </div>
              <div className="p-8 border border-primary/20 flex flex-col justify-center">
                <div className="text-primary text-5xl font-black mb-2 font-headline">100<span className="text-xl">%</span></div>
                <div className="text-surface/40 text-sm font-bold uppercase tracking-[0.2em]">Genuine Spares</div>
              </div>
              <div className="p-8 border border-primary/20 flex flex-col justify-center">
                <div className="text-primary text-5xl font-black mb-2 font-headline">24<span className="text-xl">H</span></div>
                <div className="text-surface/40 text-sm font-bold uppercase tracking-[0.2em]">Fast Delivery</div>
              </div>
            </div>
          </div>
          {/* Measurement Markings */}
          <div className="absolute -left-10 top-0 h-full flex flex-col justify-between py-12">
            <div className="h-px w-6 bg-on-surface/20"></div>
            <div className="h-px w-6 bg-on-surface/20"></div>
            <div className="h-px w-6 bg-on-surface/20"></div>
            <div className="h-px w-6 bg-on-surface/20"></div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm block mb-6">Why Choose Us</span>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-16 leading-tight">Trusted Quality & <span className="text-primary">Honest</span> Pricing</h2>
          <div className="space-y-12">
            <div className="flex gap-8 group">
              <div className="bg-surface-container-highest w-14 h-14 flex items-center justify-center shrink-0 group-hover:bg-primary transition-precison">
                <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary">handyman</span>
              </div>
              <div>
                <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">Expert Mechanics</h4>
                <p className="opacity-60 text-sm leading-relaxed max-w-md">Our team consists of highly trained technicians with decades of experience repairing both domestic and imported vehicles.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="bg-surface-container-highest w-14 h-14 flex items-center justify-center shrink-0 group-hover:bg-primary transition-precison">
                <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary">speed</span>
              </div>
              <div>
                <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">Quick Turnaround</h4>
                <p className="opacity-60 text-sm leading-relaxed max-w-md">We value your time. Most common repairs and services are fully completed and delivered on the very same day.</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <div className="bg-surface-container-highest w-14 h-14 flex items-center justify-center shrink-0 group-hover:bg-primary transition-precison">
                <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary">workspace_premium</span>
              </div>
              <div>
                <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">Transparent Pricing</h4>
                <p className="opacity-60 text-sm leading-relaxed max-w-md">No hidden fees or surprise charges. We walk you through every repair cost upfront before starting any work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
