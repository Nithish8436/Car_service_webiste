import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'why-us', 'book', 'reviews', 'contact'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element's top is near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }

      // Special case for hitting the very bottom of the page (ensure contact is highlighted)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection(''); // top of page
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section) => {
    return activeSection === section 
      ? 'text-primary hover:opacity-100 transition-precison border-b-2 border-primary pb-1'
      : 'text-on-surface/60 hover:text-primary transition-precison pb-1';
  };

  const getBottomLinkClass = (section) => {
    const isActive = activeSection === section || (section === '' && activeSection === '');
    if (isActive) {
      return "flex flex-col items-center justify-center text-on-primary bg-primary p-4 h-full flex-1 transition-all";
    }
    return "flex flex-col items-center justify-center text-on-surface opacity-60 hover:bg-primary/90 hover:text-on-primary hover:opacity-100 p-4 h-full transition-all flex-1";
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-background/95 backdrop-blur-md fixed top-0 w-full z-[100] flex justify-between items-center px-8 py-5 border-b border-outline/10">
        <a href="#" className="flex items-center gap-4 group">
          {/* Emblem Badge */}
          <div className="w-14 h-14 bg-primary flex items-center justify-center shrink-0 group-hover:bg-on-surface transition-precison">
            <span className="font-headline font-black text-on-primary text-xl leading-none tracking-tight">SA</span>
          </div>
          {/* Divider + Name */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="w-px h-10 bg-outline/30"></div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-on-surface uppercase text-lg tracking-[0.1em] leading-none">Siva Auto</span>
              <span className="font-headline font-black text-primary uppercase text-lg tracking-[0.1em] leading-none mt-1">Garage</span>
            </div>
          </div>
        </a>
        <div className="hidden md:flex items-center space-x-10 font-headline uppercase tracking-widest text-base font-bold">
          <a className={getLinkClass('services')} href="#services">Services</a>
          <a className={getLinkClass('why-us')} href="#why-us">Why Us</a>
          <a className={getLinkClass('book')} href="#book">Book Now</a>
          <a className={getLinkClass('reviews')} href="#reviews">Field Reports</a>
          <a className={getLinkClass('contact')} href="#contact">Contact</a>
        </div>
        <a href="tel:+919942033635" className="bg-on-surface text-surface px-6 py-2.5 font-bold uppercase tracking-widest text-sm active-press border border-on-surface hover:bg-primary hover:border-primary hover:text-on-primary transition-precison">
          Call Now
        </a>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-between items-stretch h-20 bg-background border-t border-outline/10 z-[100]">
        <a className={getBottomLinkClass('')} href="#">
          <span className="material-symbols-outlined mb-1 text-2xl">garage</span>
          <span className="font-headline text-[10px] font-bold uppercase tracking-widest">GARAGE</span>
        </a>
        <a className={getBottomLinkClass('services')} href="#services">
          <span className="material-symbols-outlined mb-1 text-2xl">handyman</span>
          <span className="font-headline text-[10px] font-bold uppercase tracking-widest">DIAGNOSTICS</span>
        </a>
        <a className={getBottomLinkClass('book')} href="#book">
          <span className="material-symbols-outlined mb-1 text-2xl">menu_book</span>
          <span className="font-headline text-[10px] font-bold uppercase tracking-widest">LOGBOOK</span>
        </a>
        <a className={getBottomLinkClass('why-us')} href="#why-us">
          <span className="material-symbols-outlined mb-1 text-2xl">settings_input_component</span>
          <span className="font-headline text-[10px] font-bold uppercase tracking-widest">SPECS</span>
        </a>
      </nav>
    </>
  );
}
