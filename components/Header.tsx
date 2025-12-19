'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Brand - Clickeable a Home */}
          <a
            href="#top"
            className="text-2xl md:text-3xl font-black text-[#00D2FF] hover:text-[#00B8E6] transition-colors"
            aria-label="YAPPA - Ir al inicio"
          >
            YAPPA
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#porque-yappa"
              className="text-[#082E72] hover:text-[#00D2FF] font-medium transition-colors text-sm"
            >
              Por qué YAPPA
            </a>
            <a
              href="#funcionalidades"
              className="text-[#082E72] hover:text-[#00D2FF] font-medium transition-colors text-sm"
            >
              Funcionalidades
            </a>
            <a
              href="#como-funciona"
              className="text-[#082E72] hover:text-[#00D2FF] font-medium transition-colors text-sm"
            >
              Cómo funciona
            </a>
            <a
              href="#for-stores"
              className="bg-[#00D2FF] text-[#082E72] px-5 py-2.5 rounded-xl font-bold hover:bg-[#00B8E6] transition-all shadow-md text-sm"
            >
              Prueba hoy
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#082E72] p-2 hover:text-[#00D2FF] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <a
                href="#porque-yappa"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#082E72] hover:text-[#00D2FF] font-medium transition-colors py-2 text-sm"
              >
                Por qué YAPPA
              </a>
              <a
                href="#funcionalidades"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#082E72] hover:text-[#00D2FF] font-medium transition-colors py-2 text-sm"
              >
                Funcionalidades
              </a>
              <a
                href="#como-funciona"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#082E72] hover:text-[#00D2FF] font-medium transition-colors py-2 text-sm"
              >
                Cómo funciona
              </a>
              <a
                href="#for-stores"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#00D2FF] text-[#082E72] px-5 py-3 rounded-xl font-bold hover:bg-[#00B8E6] transition-all shadow-md text-center mt-2"
              >
                Prueba hoy tu negocio
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
