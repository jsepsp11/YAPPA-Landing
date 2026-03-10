'use client';
import { useState, useEffect } from 'react';

const SCREENS = [
  {
    id: 1,
    title: 'Inicio',
    image: 'https://play-lh.googleusercontent.com/wqZDpcJ2Li076oy7EeI25hCgDVfRmkMnEAzqnVVNc-S6WVprijZZeWWFeBtFeJ3tE9rwuRG-TjHihkpb2HLUYAQ=w2560-h1440-rw',
  },
  {
    id: 2,
    title: 'Ventas',
    image: 'https://play-lh.googleusercontent.com/iOKkn3gCIOxhIOV0RvwnLsJk3pIiNY0NpYVfF-rb4aXiSDtoLbdtHXETc0YAUuW5zD4tJvvFu5O2nhzyrM7u=w2560-h1440-rw',
  },
  {
    id: 3,
    title: 'Inventario',
    image: 'https://play-lh.googleusercontent.com/OFg2HBslDvHlBBdCGnaHW16bMr97NwCywc5_CQnzwLH9kyJx-APg4qUoA4xoEi_BWVuSHW3P5dAlXsljlC57YA=w2560-h1440-rw',
  },
  {
    id: 4,
    title: 'Gastos',
    image: 'https://play-lh.googleusercontent.com/7jtBIykF7TUzS_RHNpRCxAwUV_BjMckdyC9UBDAIHWOPHN_JJQQJlkRDY6WIo7ETNr6xmEjuzNVmqrjFMmwpCg=w2560-h1440-rw',
  },
  {
    id: 5,
    title: 'Reportes',
    image: 'https://play-lh.googleusercontent.com/-fS5h4X6aPFkGFU3UpNtwD21CjFv9P5VoDNoWK9U3KkI8E4h_WLKR--a43DDaqNEaHVbJTsq4j9jGIn7Bvd5=w2560-h1440-rw',
  },
];

export default function ProductoEnAccion() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SCREENS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="producto-en-accion"
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
          display: flex;
          flex-direction: column;
          align-items: center;
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

        .yappa-producto-en-accion .phone-wrapper {
          position: relative;
          width: 100%;
          max-width: 320px;
        }

        @media (min-width: 640px) {
          .yappa-producto-en-accion .phone-wrapper {
            max-width: 360px;
          }
        }

        @media (min-width: 1024px) {
          .yappa-producto-en-accion .phone-wrapper {
            max-width: 380px;
          }
        }

        .yappa-producto-en-accion .phone-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 9/19.5;
          background: linear-gradient(145deg, #1a1a1a 0%, #000000 100%);
          border-radius: 3rem;
          padding: 0.5rem;
          box-shadow: 
            0 50px 100px -20px rgba(0, 0, 0, 0.25),
            0 30px 60px -30px rgba(0, 0, 0, 0.3),
            inset 0 0 0 2px rgba(255, 255, 255, 0.1),
            0 0 80px rgba(0, 210, 255, 0.15);
        }

        .yappa-producto-en-accion .phone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 2.5rem;
          overflow: hidden;
          position: relative;
        }

        .yappa-producto-en-accion .phone-notch {
          position: absolute;
          top: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 7rem;
          height: 1.75rem;
          background: #000;
          border-radius: 1rem;
          z-index: 20;
        }

        .yappa-producto-en-accion .screen-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease;
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
          transition: opacity 0.5s ease;
        }

        .yappa-producto-en-accion .screen-slide.active {
          opacity: 1;
        }

        .yappa-producto-en-accion .badge {
          position: absolute;
          top: -0.75rem;
          right: -0.5rem;
          background: linear-gradient(135deg, #00D2FF 0%, #00B8E6 100%);
          color: #082E72;
          font-size: 0.625rem;
          font-weight: 700;
          padding: 0.375rem 0.75rem;
          border-radius: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 12px rgba(0, 210, 255, 0.4);
          z-index: 25;
        }

        .yappa-producto-en-accion .screen-label {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          z-index: 15;
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
          transform: scale(1.3);
        }

        .yappa-producto-en-accion .dot:hover {
          background: #00D2FF;
        }

        .yappa-producto-en-accion .download-section {
          margin-top: 2.5rem;
          text-align: center;
        }

        @media (min-width: 640px) {
          .yappa-producto-en-accion .download-section {
            margin-top: 3rem;
          }
        }

        .yappa-producto-en-accion .download-text {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        .yappa-producto-en-accion .store-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        @media (min-width: 640px) {
          .yappa-producto-en-accion .store-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
          }
        }

        .yappa-producto-en-accion .store-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #000;
          color: #fff;
          padding: 0.875rem 1.5rem;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.2s ease;
          min-width: 180px;
        }

        .yappa-producto-en-accion .store-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .yappa-producto-en-accion .store-button svg {
          width: 1.75rem;
          height: 1.75rem;
          flex-shrink: 0;
        }

        .yappa-producto-en-accion .store-button-text {
          text-align: left;
        }

        .yappa-producto-en-accion .store-button-label {
          font-size: 0.625rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .yappa-producto-en-accion .store-button-name {
          font-size: 1rem;
          font-weight: 700;
        }
      `}</style>

      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Así se ve YAPPA por dentro</h2>
          <p className="section-subtitle">Conoce la app que transforma tu negocio.</p>
        </div>

        {/* Phone with Screenshots */}
        <div className="phone-wrapper">
          <div className="badge">📱 Vista previa</div>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-notch" />
              <div className="screen-container">
                {SCREENS.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`screen-slide ${index === activeIndex ? 'active' : ''}`}
                  >
                    <img
                      src={screen.image}
                      alt={`Pantalla ${screen.title}`}
                      className="screen-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="screen-label">{SCREENS[activeIndex].title}</div>
            </div>
          </div>
          
          {/* Dots navigation */}
          <div className="dots">
            {SCREENS.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver pantalla ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="download-section">
          <p className="download-text">¿Te gustó? Descarga la app ahora</p>
          <div className="store-buttons">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com/ec/app/yappa/id6757207017"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
              aria-label="Descargar en App Store"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="store-button-text">
                <div className="store-button-label">Disponible en</div>
                <div className="store-button-name">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.yappa.app"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
              aria-label="Descargar en Google Play"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="store-button-text">
                <div className="store-button-label">Disponible en</div>
                <div className="store-button-name">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
