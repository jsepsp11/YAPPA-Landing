'use client';
import { Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* Scroll anchor para el header */}
      <div id="top" className="absolute top-0"></div>
      
      {/* Primera Vista - Splash */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-[#082E72] via-[#0A3A8F] to-[#00D2FF] min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative z-10 text-center px-4 sm:px-6">
          {/* Brand Lockup: Icono + YAPPA */}
          <div className="mb-6 sm:mb-8 flex flex-col items-center">
            {/* Icono con animación drop-in */}
            <div className="animate-drop-in mb-3 sm:mb-4">
              <Image
                src="/yappa_icon.png"
                alt="YAPPA"
                width={88}
                height={88}
                priority
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] drop-shadow-lg"
              />
            </div>
            
            {/* Wordmark YAPPA */}
            <div className="animate-fade-in">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-[#00D2FF] tracking-tight leading-none drop-shadow-2xl">
                YAPPA
              </h1>
            </div>
          </div>

          {/* Slogan */}
          <div className="animate-slide-up">
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed">
              Todo tu negocio, <span className="text-[#00D2FF]">bien clarito.</span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs sm:text-sm font-medium">Descubre más</span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Hero Completo - Mobile First */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#082E72] via-[#0A3A8F] to-[#00D2FF] py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="text-center mb-4 sm:mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-[#00D2FF] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/20">
                Para negocios y comercios en Ecuador
              </span>
            </div>

            {/* H1 - Mobile optimizado */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-3 sm:mb-6 leading-tight px-2">
              Digitaliza y crece tu negocio.
            </h2>

            {/* Subtítulo - Reducido para mobile */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 text-center mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
              Lleva tu negocio en el celular: inventario, ventas y gastos en un solo lugar.
            </p>

            {/* Value Bullets - Compactos - OCULTOS EN MOBILE */}
            <div className="hidden sm:block max-w-2xl mx-auto mb-6 sm:mb-8 space-y-3 px-2">
              {[
                'Sabes cuánto vendes cada día',
                'No te quedas sin productos',
                'Decisiones con datos reales',
              ].map((bullet, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
                  <Check className="text-[#00D2FF] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <p className="text-white text-sm sm:text-base md:text-lg">{bullet}</p>
                </div>
              ))}
            </div>

            {/* CTA PRINCIPAL UNIFICADO */}
            <div className="flex justify-center mb-6 sm:mb-8 px-4">
              <a
                href="#for-stores"
                className="w-full sm:w-auto bg-[#00D2FF] text-[#082E72] px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-2xl text-center min-h-[56px] flex items-center justify-center"
              >
                Prueba hoy tu negocio en YAPPA
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-center text-blue-200 text-xs sm:text-sm mb-6 sm:mb-8 px-4">
              Primer mes gratis. Cancela cuando quieras.
            </p>

            {/* Mini-badges - OCULTOS EN MOBILE */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-blue-200 text-xs sm:text-sm px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00D2FF]">500+</div>
                <div>Negocios</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00D2FF]">Ecuador</div>
                <div>Hecho aquí</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00D2FF]">WhatsApp</div>
                <div>Soporte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>
    </>
  );
}
