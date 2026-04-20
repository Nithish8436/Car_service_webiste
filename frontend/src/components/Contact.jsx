import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Contact() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize Leaflet map using local npm package
    if (!mapRef.current) {
      // Goripalayam, Tamil Nadu coordinates from exact Google Maps link
      const map = L.map('dispatch-map', { zoomControl: false, attributionControl: false }).setView([9.9283511, 78.12861], 16);
      
      // Using standard OpenStreetMap theme for optimal clarity
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Add a custom marker/circle matching the brand primary color
      L.circle([9.9283511, 78.12861], {
        color: '#9c3f00',
        fillColor: '#9c3f00',
        fillOpacity: 0.15,
        radius: 100
      }).addTo(map);

      // Add a proper pin marker at the exact location
      const pinIcon = L.divIcon({
        html: `<span class="material-symbols-outlined text-primary text-5xl" style="font-variation-settings: 'FILL' 1; text-shadow: 0px 4px 6px rgba(0,0,0,0.5);">location_on</span>`,
        className: 'bg-transparent border-0',
        iconSize: [48, 48],
        iconAnchor: [24, 48],
      });
      L.marker([9.9283511, 78.12861], { icon: pinIcon }).addTo(map);

      mapRef.current = map;
    }

    return () => {
      // Cleanup on unmount preventing dual maps
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleResetView = () => {
    if (mapRef.current) {
      mapRef.current.setView([9.9283511, 78.12861], 16);
    }
  };

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  return (
    <section className="pb-32 px-8 scroll-mt-24" id="contact">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline/10">
        <div className="lg:col-span-5 p-16 bg-surface flex flex-col justify-between">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.3em] text-primary block mb-6">Our Location</span>
            <h2 className="text-5xl font-black uppercase tracking-tight mb-16">Get in Touch</h2>
            <div className="space-y-12">
              <div className="group cursor-default">
                <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-40 block mb-4 group-hover:text-primary transition-colors">Address</span>
                <p className="text-xl font-medium leading-relaxed">Goripalayam<br />Madurai, Tamil Nadu 625002</p>
              </div>
              <div className="group cursor-default">
                <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-40 block mb-4 group-hover:text-primary transition-colors">Working Hours</span>
                <p className="text-lg font-medium leading-relaxed">Mon - Sat: 09:00 AM — 08:00 PM<br /><span className="text-primary">Sun: Holiday / Emergency Only</span></p>
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-40 block mb-4">Phone Number</span>
                <a href="tel:+919942033635" className="text-3xl font-black mb-8 hover:text-primary transition-precison cursor-pointer block">+91 99420 33635</a>
                <a href="https://wa.me/919942033635" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-on-surface text-surface px-8 py-4 text-sm font-black uppercase tracking-widest active-press hover:bg-primary hover:text-on-primary transition-precison">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 bg-on-surface h-[650px] relative overflow-hidden">
          <div id="dispatch-map" className="w-full h-full z-0"></div>
          
          {/* Custom Map Controls Layer — Positioned in Bottom Right */}
          <div className="absolute bottom-6 right-6 flex flex-col items-center gap-2 z-20">
            {/* Center on Garage Button */}
            <button 
              onClick={handleResetView}
              className="w-12 h-12 bg-white text-zinc-900 rounded-lg shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all active-press border border-zinc-200"
              title="Center on Garage"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_searching</span>
            </button>

            {/* Zoom Controls */}
            <div className="flex flex-col bg-white rounded-lg shadow-xl border border-zinc-200 overflow-hidden">
              <button 
                onClick={handleZoomIn}
                className="w-12 h-12 flex items-center justify-center text-zinc-900 hover:bg-primary hover:text-white border-b border-zinc-100 transition-all font-bold text-xl"
              >+</button>
              <button 
                onClick={handleZoomOut}
                className="w-12 h-12 flex items-center justify-center text-zinc-900 hover:bg-primary hover:text-white transition-all font-bold text-xl"
              >-</button>
            </div>
          </div>

          {/* Scanner Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/10 opacity-20 pointer-events-none z-10 transition-all duration-1000"></div>
        </div>
      </div>
    </section>
  );
}
