export default function Testimonials() {
  return (
    <section className="py-40 px-8 bg-surface-container-low scroll-mt-24" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm block mb-4">Customer Reviews</span>
          <h2 className="text-5xl font-black uppercase tracking-tight">What People Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-surface p-12 border border-outline/10 relative group hover:border-primary/30 transition-precison">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-precison"></div>
            <div className="flex gap-1 mb-8 text-primary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-base font-medium mb-10 leading-relaxed opacity-80">
              "Honest service. Generally, mechanics charge extra for spare parts, but here the pricing was very fair. Did a full service for my Swift and I can feel the difference in mileage."
            </p>
            <div className="pt-8 border-t border-outline/5">
              <h5 className="font-black uppercase text-sm tracking-wider">Senthil Kumar</h5>
              <span className="text-xs uppercase font-bold text-primary opacity-70">Maruti Suzuki Swift</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-surface p-12 border border-outline/10 relative group hover:border-primary/30 transition-precison">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-precison"></div>
            <div className="flex gap-1 mb-8 text-primary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-base font-medium mb-10 leading-relaxed opacity-80">
              "My WagonR had a strange engine noise for months. Two other shops couldn't fix it properly. Siva Garage identified a small belt issue and fixed it cheaply. Very trustworthy people."
            </p>
            <div className="pt-8 border-t border-outline/5">
              <h5 className="font-black uppercase text-sm tracking-wider">M. Ramesh</h5>
              <span className="text-xs uppercase font-bold text-primary opacity-70">Suzuki WagonR</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-surface p-12 border border-outline/10 relative group hover:border-primary/30 transition-precison">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-precison"></div>
            <div className="flex gap-1 mb-8 text-primary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-base font-medium mb-10 leading-relaxed opacity-80">
              "Great pick-up and delivery service. I am busy with work, so they took my Tiago from my office and delivered it back after water wash and oil change. Best for middle-class car owners."
            </p>
            <div className="pt-8 border-t border-outline/5">
              <h5 className="font-black uppercase text-sm tracking-wider">Anitha Rajan</h5>
              <span className="text-xs uppercase font-bold text-primary opacity-70">Tata Tiago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
