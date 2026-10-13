import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import FeaturesBento from './components/FeaturesBento';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <FeaturesBento />
        <Stats />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
