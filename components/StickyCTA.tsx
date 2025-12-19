'use client';
import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de hacer scroll 400px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg lg:hidden">
      <a
        href="#for-stores"
        className="flex items-center justify-center gap-2 w-full bg-[#00D2FF] text-[#082E72] py-4 rounded-xl font-bold text-base hover:bg-[#00B8E6] transition-all shadow-md min-h-[52px]"
      >
        <Zap className="w-5 h-5" />
        Prueba hoy tu negocio en YAPPA
      </a>
    </div>
  );
}
