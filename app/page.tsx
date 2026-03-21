import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductoEnAccion from '@/components/ProductoEnAccion';
import IdentitySection from '@/components/IdentitySection';
import Benefits from '@/components/Benefits';
import Funcionalidades from '@/components/Funcionalidades';
import AboutUs from '@/components/AboutUs';
import Testimonios from '@/components/Testimonios';
import PricingSection from '@/components/PricingSection';
import ForStores from '@/components/ForStores';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pb-20 lg:pb-0">
        <Hero />
        <ProductoEnAccion />
        <IdentitySection />
        <Benefits />
        <Funcionalidades />
        <AboutUs />
        <Testimonios />
        <PricingSection />
        <ForStores />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      {/* Sticky CTA solo visible en mobile */}
      <StickyCTA />
    </>
  );
}
