export default function Footer() {
  return (
    <footer className="bg-on-surface text-surface py-20 px-12 border-t border-surface/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 bg-primary flex items-center justify-center text-on-primary text-sm font-black">SA</span>
            <span className="font-headline font-black text-xl uppercase tracking-tighter">SIVA AUTO GARAGE</span>
          </div>
          <p className="text-surface/40 text-sm font-bold uppercase tracking-[0.2em] max-w-xs leading-loose">
            Expert Car Repair and Maintenance in Goripalayam, Madurai. Restoring industrial mechanical integrity since 2009.
          </p>
          <div className="flex flex-col gap-2 text-surface/60 text-xs font-bold uppercase tracking-widest mt-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              <span>Goripalayam, Madurai - 625002</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">call</span>
              <a href="tel:+919942033635" className="hover:text-primary transition-precison">+91 99420 33635</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-16 font-label text-sm font-bold uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-4">
            <span className="text-primary">Services</span>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#services">Engine Repair</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#services">Oil & Filters</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#book">Book Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary">Company</span>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#about">About Us</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#about">Partners</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#testimonials">Reviews</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary">Support</span>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#contact">Contact</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="tel:+919942033635">Roadside Help</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary">Social</span>
            <div className="flex gap-4">
              <a href="" className="w-8 h-8 border border-surface/20 flex items-center justify-center hover:border-primary transition-precison cursor-pointer">
                <span className="material-symbols-outlined text-xs">facebook</span>
              </a>
              <a href="" className="w-8 h-8 border border-surface/20 flex items-center justify-center hover:border-primary transition-precison cursor-pointer">
                <span className="material-symbols-outlined text-xs">share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-surface/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] opacity-30">
        <span>© 2026 SIVA AUTO GARAGE</span>
        <span className="text-primary">STAY GROUNDED.</span>
      </div>
    </footer>
  );
}
