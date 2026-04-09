import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import AboutBanner from './components/AboutBanner';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-on-surface pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <AboutBanner />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
