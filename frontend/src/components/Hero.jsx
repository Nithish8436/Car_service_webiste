export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 xl:col-span-7">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Expert <br />
            <span className="text-primary">Car Repair</span> <br />
            & Services in Madurai
          </h1>
          <p className="text-xl md:text-2xl text-on-surface/60 font-light mb-12 max-w-xl leading-relaxed">
            Professional auto care and repair in Goripalayam, Madurai. Quality service you can trust for all car makes and models.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#book" className="bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest text-base active-press hover:bg-surface hover:text-on-surface transition-precison">
              Book a Service
            </a>
            <div className="flex items-center gap-4 px-6 py-5 border border-outline/20">
              <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
              <span className="text-sm uppercase font-bold tracking-[0.2em] opacity-60">Trusted Madurai Garage</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-5 relative group">
          <div className="relative overflow-hidden aspect-[4/5] bg-on-surface">
            <img 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-precison duration-1000" 
              alt="Experienced mechanic working on a car engine at Siva Auto Garage Madurai" 
              src="/images/hero-bg.jpg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-surface">
              <span className="text-5xl font-black opacity-10">01</span>
            </div>
          </div>
          {/* Asymmetric Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-r-2 border-t-2 border-primary/30"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-2 border-b-2 border-primary/30"></div>
        </div>
      </div>
    </section>
  );
}
