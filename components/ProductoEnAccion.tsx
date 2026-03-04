'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

// 5 screenshots de Google Play en alta resolución
const SCREENS = [
  {
    id: 1,
    title: 'Cierre del día',
    description: 'Ventas, gastos y ganancia estimada, bien clarito.',
    image: 'https://play-lh.googleusercontent.com/wqZDpcJ2Li076oy7EeI25hCgDVfRmkMnEAzqnVVNc-S6WVprijZZeWWFeBtFeJ3tE9rwuRG-TjHihkpb2HLUYAQ=w2560-h1440-rw',
  },
  {
    id: 2,
    title: 'Registrar una venta',
    description: 'Anota en segundos, sin complicarte.',
    image: 'https://play-lh.googleusercontent.com/iOKkn3gCIOxhIOV0RvwnLsJk3pIiNY0NpYVfF-rb4aXiSDtoLbdtHXETc0YAUuW5zD4tJvvFu5O2nhzyrM7u=w2560-h1440-rw',
  },
  {
    id: 3,
    title: 'Inventario',
    description: 'Qué entra, qué sale y qué falta.',
    image: 'https://play-lh.googleusercontent.com/OFg2HBslDvHlBBdCGnaHW16bMr97NwCywc5_CQnzwLH9kyJx-APg4qUoA4xoEi_BWVuSHW3P5dAlXsljlC57YA=w2560-h1440-rw',
  },
  {
    id: 4,
    title: 'Gastos',
    description: 'Sabe cuánto realmente te queda.',
    image: 'https://play-lh.googleusercontent.com/7jtBIykF7TUzS_RHNpRCxAwUV_BjMckdyC9UBDAIHWOPHN_JJQQJlkRDY6WIo7ETNr6xmEjuzNVmqrjFMmwpCg=w2560-h1440-rw',
  },
  {
    id: 5,
    title: 'Reportes',
    description: 'Gráficos simples para decidir mejor.',
    image: 'https://play-lh.googleusercontent.com/-fS5h4X6aPFkGFU3UpNtwD21CjFv9P5VoDNoWK9U3KkI8E4h_WLKR--a43DDaqNEaHVbJTsq4j9jGIn7Bvd5=w2560-h1440-rw',
  },
];

export default function ProductoEnAccion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Detectar preferencia de movimiento reducido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // IntersectionObserver para desktop - detectar paso activo al hacer scroll
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const observers: IntersectionObserver[] = [];
    
    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Scroll snap para móvil
  const handleCarouselScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < SCREENS.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex]);

  // Click en paso (desktop)
  const handleStepClick = (index: number) => {
    setActiveIndex(index);
  };

  // Click en dot (móvil)
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  // Navegación por teclado
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleStepClick(index);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = Math.min(index + 1, SCREENS.length - 1);
      setActiveIndex(nextIndex);
      stepRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = Math.max(index - 1, 0);
      setActiveIndex(prevIndex);
      stepRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <section
      id="producto-en-accion"
      ref={sectionRef}
      className="yappa-producto-en-accion"
      aria-label="Así se ve YAPPA por dentro"
    >
      <style jsx>{`
        .yappa-producto-en-accion {
          position: relative;
          padding: 3rem 1rem;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .yappa-producto-en-accion {
            padding: 4rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .yappa-producto-en-accion {
            padding: 6rem 3rem;
          }
        }

        .yappa-producto-en-accion .section-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .yappa-producto-en-accion .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        @media (min-width: 1024px) {
          .yappa-producto-en-accion .section-header {
            margin-bottom: 3rem;
          }
        }

        .yappa-producto-en-accion .section-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #082E72;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        @media (min-width: 640px) {
          .yappa-producto-en-accion .section-title {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .yappa-producto-en-accion .section-title {
            font-size: 3rem;
          }
        }

        .yappa-producto-en-accion .section-subtitle {
          font-size: 1rem;
          color: #64748b;
          max-width: 500px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .yappa-producto-en-accion .section-subtitle {
            font-size: 1.125rem;
          }
        }

        /* Mobile Layout */
        .yappa-producto-en-accion .mobile-layout {
          display: block;
        }

        @media (min-width: 1024px) {
          .yappa-producto-en-accion .mobile-layout {
            display: none;
          }
        }

        .yappa-producto-en-accion .phone-frame-mobile {
          position: relative;
          width: 280px;
          max-width: 90%;
          margin: 0 auto 1.5rem;
          aspect-ratio: 9/19;
          background: #1a1a1a;
          border-radius: 2.5rem;
          padding: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }

        .yappa-producto-en-accion .phone-screen-mobile {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 2rem;
          overflow: hidden;
          position: relative;
        }

        .yappa-producto-en-accion .phone-notch {
          position: absolute;
          top: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 5rem;
          height: 1.5rem;
          background: #1a1a1a;
          border-radius: 1rem;
          z-index: 10;
        }

        .yappa-producto-en-accion .screen-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .yappa-producto-en-accion .screen-image {
            transition: none;
          }
        }

        .yappa-producto-en-accion .carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          gap: 1rem;
          padding: 0 1rem;
        }

        .yappa-producto-en-accion .carousel::-webkit-scrollbar {
          display: none;
        }

        .yappa-producto-en-accion .carousel-item {
          flex: 0 0 100%;
          scroll-snap-align: center;
          background: white;
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .yappa-producto-en-accion .carousel-item-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #082E72;
          margin-bottom: 0.5rem;
        }

        .yappa-producto-en-accion .carousel-item-desc {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.5;
        }

        .yappa-producto-en-accion .dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .yappa-producto-en-accion .dot {
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        .yappa-producto-en-accion .dot.active {
          background: #00D2FF;
          transform: scale(1.2);
        }

        .yappa-producto-en-accion .dot:hover {
          background: #00D2FF;
        }

        @media (prefers-reduced-motion: reduce) {
          .yappa-producto-en-accion .dot {
            transition: none;
          }
        }

        /* Desktop Layout */
        .yappa-producto-en-accion .desktop-layout {
          display: none;
        }

        @media (min-width: 1024px) {
          .yappa-producto-en-accion .desktop-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }
        }

        .yappa-producto-en-accion .steps-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .yappa-producto-en-accion .step-button {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: white;
          border: 2px solid transparent;
          border-radius: 1rem;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .yappa-producto-en-accion .step-button:hover {
          border-color: #00D2FF;
          box-shadow: 0 4px 12px rgba(0, 210, 255, 0.15);
        }

        .yappa-producto-en-accion .step-button.active {
          border-color: #00D2FF;
          background: linear-gradient(135deg, #f0fdff 0%, #ffffff 100%);
          box-shadow: 0 4px 12px rgba(0, 210, 255, 0.2);
        }

        .yappa-producto-en-accion .step-button:focus {
          outline: 2px solid #00D2FF;
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .yappa-producto-en-accion .step-button {
            transition: none;
          }
        }

        .yappa-producto-en-accion .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: #f1f5f9;
          border-radius: 50%;
          font-weight: 700;
          color: #64748b;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .yappa-producto-en-accion .step-button.active .step-number {
          background: #00D2FF;
          color: #082E72;
        }

        @media (prefers-reduced-motion: reduce) {
          .yappa-producto-en-accion .step-number {
            transition: none;
          }
        }

        .yappa-producto-en-accion .step-content {
          flex: 1;
        }

        .yappa-producto-en-accion .step-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #082E72;
          margin-bottom: 0.25rem;
        }

        .yappa-producto-en-accion .step-desc {
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.5;
        }

        .yappa-producto-en-accion .phone-column {
          position: sticky;
          top: 6rem;
        }

        .yappa-producto-en-accion .phone-frame-desktop {
          position: relative;
          width: 320px;
          margin: 0 auto;
          aspect-ratio: 9/19;
          background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%);
          border-radius: 3rem;
          padding: 0.625rem;
          box-shadow: 
            0 50px 100px -20px rgba(0, 0, 0, 0.3),
            0 30px 60px -30px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset,
            0 0 60px rgba(0, 210, 255, 0.1);
        }

        .yappa-producto-en-accion .phone-screen-desktop {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 2.5rem;
          overflow: hidden;
          position: relative;
        }

        .yappa-producto-en-accion .screen-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .yappa-producto-en-accion .screen-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .yappa-producto-en-accion .screen-slide.active {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .yappa-producto-en-accion .screen-slide {
            transition: none;
          }
        }

        .yappa-producto-en-accion .progress-indicator {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .yappa-producto-en-accion .progress-indicator span {
          color: #00D2FF;
          font-weight: 700;
        }

        /* CTAs */
        .yappa-producto-en-accion .cta-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-top: 2.5rem;
        }

        @media (min-width: 640px) {
          .yappa-producto-en-accion .cta-container {
            flex-direction: row;
            justify-content: center;
            margin-top: 3rem;
          }
        }

        .yappa-producto-en-accion .cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #00D2FF;
          color: #082E72;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(0, 210, 255, 0.4);
          min-height: 3.25rem;
        }

        .yappa-producto-en-accion .cta-primary:hover {
          background: #00B8E6;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 210, 255, 0.5);
        }

        @media (prefers-reduced-motion: reduce) {
          .yappa-producto-en-accion .cta-primary {
            transition: none;
          }
          .yappa-producto-en-accion .cta-primary:hover {
            transform: none;
          }
        }

        .yappa-producto-en-accion .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #082E72;
          font-weight: 600;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .yappa-producto-en-accion .cta-secondary:hover {
          color: #00D2FF;
        }

        .yappa-producto-en-accion .cta-secondary svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      `}</style>

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Así se ve YAPPA por dentro</h2>
          <p className="section-subtitle">Navega la app y entiende tu negocio en minutos.</p>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-layout">
          {/* Phone Frame */}
          <div className="phone-frame-mobile">
            <div className="phone-screen-mobile">
              <div className="phone-notch" />
              <img
                src={SCREENS[activeIndex].image}
                alt={`Pantalla de ${SCREENS[activeIndex].title}`}
                className="screen-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="carousel"
            onScroll={handleCarouselScroll}
            role="tablist"
            aria-label="Pantallas de la app"
          >
            {SCREENS.map((screen, index) => (
              <div
                key={screen.id}
                className="carousel-item"
                role="tabpanel"
                aria-labelledby={`dot-${index}`}
              >
                <h3 className="carousel-item-title">{screen.title}</h3>
                <p className="carousel-item-desc">{screen.description}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="dots" role="tablist" aria-label="Navegación de pantallas">
            {SCREENS.map((_, index) => (
              <button
                key={index}
                id={`dot-${index}`}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Ir a pantalla ${index + 1}: ${SCREENS[index].title}`}
                aria-selected={index === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="desktop-layout">
          {/* Steps Column */}
          <div className="steps-column" role="tablist" aria-label="Funcionalidades de YAPPA">
            {SCREENS.map((screen, index) => (
              <button
                key={screen.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`step-button ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls={`screen-${index}`}
                tabIndex={index === activeIndex ? 0 : -1}
              >
                <span className="step-number">{index + 1}</span>
                <div className="step-content">
                  <h3 className="step-title">{screen.title}</h3>
                  <p className="step-desc">{screen.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Phone Column */}
          <div className="phone-column">
            <div className="phone-frame-desktop">
              <div className="phone-screen-desktop">
                <div className="phone-notch" />
                <div className="screen-container">
                  {SCREENS.map((screen, index) => (
                    <div
                      key={screen.id}
                      id={`screen-${index}`}
                      className={`screen-slide ${index === activeIndex ? 'active' : ''}`}
                      role="tabpanel"
                      aria-labelledby={`step-${index}`}
                      hidden={index !== activeIndex}
                    >
                      <img
                        src={screen.image}
                        alt={`Pantalla de ${screen.title}`}
                        className="screen-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="progress-indicator">
              <span>{activeIndex + 1}</span> / {SCREENS.length}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="cta-container">
          <a
            href="https://gallant-quietude-production-6391.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Probar YAPPA gratis
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.yappa.app"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Descargar en Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
