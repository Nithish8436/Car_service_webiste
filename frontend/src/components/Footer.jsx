export default function Footer() {
  return (
    <footer className="bg-on-surface text-surface py-20 px-12 border-t border-surface/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 bg-primary flex items-center justify-center text-on-primary text-sm font-black">SA</span>
            <span className="font-headline font-black text-xl uppercase tracking-tighter">SIVA AUTO GARAGE</span>
          </div>
          <p className="text-surface/40 text-sm font-bold uppercase tracking-[0.2em] max-w-xs">
            Restoring industrial mechanical integrity since 2009. Engineered for longevity.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-16 font-label text-sm font-bold uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-4">
            <span className="text-primary">Navigation</span>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#services">Capabilities</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#why-us">Standard</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#book">Scheduling</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary">Legal</span>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#">Privacy</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#">Compliance</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#">Liability</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary">Fleet</span>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#">Onboarding</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#">Bulk Pricing</a>
            <a className="opacity-50 hover:opacity-100 hover:text-primary transition-precison" href="#">SLA Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary">System</span>
            <div className="flex gap-4">
              <div className="w-8 h-8 border border-surface/20 flex items-center justify-center hover:border-primary transition-precison cursor-pointer">
                <span className="material-symbols-outlined text-xs">precision_manufacturing</span>
              </div>
              <div className="w-8 h-8 border border-surface/20 flex items-center justify-center hover:border-primary transition-precison cursor-pointer">
                <span className="material-symbols-outlined text-xs">construction</span>
              </div>
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
