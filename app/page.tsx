import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Funcionalidades from '@/components/Funcionalidades';
import ComoFunciona from '@/components/ComoFunciona';
import AboutUs from '@/components/AboutUs';
import Testimonios from '@/components/Testimonios';
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
        <Benefits />
        <Funcionalidades />
        <ComoFunciona />
        <AboutUs />
        <Testimonios />
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
