'use client';
import { useState, useCallback } from 'react';
import { Zap, Building2, Users, Calculator, Crown, MessageSquare } from 'lucide-react';

export default function PricingSection() {
  const [merchants, setMerchants] = useState<number>(5);
  
  // Cálculo del precio Premium
  const calculatePremiumPrice = useCallback((numMerchants: number): number => {
    const validMerchants = Math.max(1, Math.min(100, numMerchants || 1));
    if (validMerchants <= 5) return 25;
    return 25 + (validMerchants - 5) * 5;
  }, []);

  // Handlers para los botones
  const handleDecrement = useCallback(() => {
    setMerchants(prev => Math.max(1, prev - 1));
  }, []);

  const handleIncrement = useCallback(() => {
    setMerchants(prev => Math.min(100, prev + 1));
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Si está vacío, no hacer nada aún
    if (value === '') {
      setMerchants(1);
      return;
    }
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      setMerchants(Math.max(1, Math.min(100, parsed)));
    }
  }, []);

  const premiumTotal = calculatePremiumPrice(merchants);

  return (
    <section id="planes" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#082E72] mb-3 sm:mb-4">
            Planes de pago
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio
          </p>
        </div>

        {/* Cards Grid - 3 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Card Growth */}
          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#00D2FF]" strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#082E72]">Growth</h3>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow">
              Únicamente el App, y nos comienzas a pagar después del primer mes.
            </p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-[#082E72]">$9.99</span>
                <span className="text-gray-500 text-sm">/mes</span>
              </div>
            </div>
            
            <a
              href="#for-stores"
              className="w-full bg-[#00D2FF] text-[#082E72] py-3 sm:py-4 rounded-xl font-bold text-base hover:bg-[#00B8E6] transition-all shadow-md text-center flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Empezar
            </a>
          </div>

          {/* Card Premium */}
          <div className="bg-gradient-to-br from-[#082E72] to-[#0A3A8F] p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-900/50 hover:shadow-xl transition-all flex flex-col relative overflow-hidden">
            {/* Badge Popular */}
            <div className="absolute top-4 right-4 bg-[#00D2FF] text-[#082E72] text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#00D2FF]" strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Premium</h3>
            </div>
            
            <p className="text-blue-100 text-sm sm:text-base mb-4">
              App + Admin Console
            </p>
            
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-white">$25</span>
                <span className="text-blue-200 text-sm">/mes</span>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm mt-1">hasta 5 merchants</p>
            </div>
            
            {/* Regla adicional */}
            <div className="bg-white/10 rounded-xl p-3 sm:p-4 mb-4">
              <div className="flex items-center gap-2 text-blue-100 text-sm mb-2">
                <Users className="w-4 h-4" />
                <span>+$5 por cada merchant adicional</span>
              </div>
              <p className="text-blue-200 text-xs">
                Ej. Si tienes 7 merchants = $35
              </p>
            </div>
            
            {/* Calculadora de merchants */}
            <div className="bg-white/10 rounded-xl p-3 sm:p-4 mb-6 flex-grow">
              <label htmlFor="merchants-input" className="flex items-center gap-2 text-blue-100 text-sm mb-3">
                <Calculator className="w-4 h-4" />
                <span>Calcula tu precio</span>
              </label>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 text-white font-bold hover:bg-white/30 transition-colors flex items-center justify-center select-none"
                  aria-label="Reducir merchants"
                >
                  −
                </button>
                <input
                  id="merchants-input"
                  type="number"
                  min="1"
                  max="100"
                  value={merchants}
                  onChange={handleInputChange}
                  className="w-14 sm:w-16 h-9 sm:h-10 rounded-lg bg-white/20 text-white text-center font-bold text-lg border-none focus:outline-none focus:ring-2 focus:ring-[#00D2FF] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  aria-label="Número de merchants"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 text-white font-bold hover:bg-white/30 transition-colors flex items-center justify-center select-none"
                  aria-label="Aumentar merchants"
                >
                  +
                </button>
                <span className="text-blue-100 text-xs sm:text-sm">merchants</span>
              </div>
              
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Total estimado:</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#00D2FF]">${premiumTotal}</span>
                </div>
              </div>
              
              <p className="text-blue-300 text-xs mt-2">
                Estimación referencial. El cobro final se confirma al activar el plan.
              </p>
            </div>
            
            <a
              href="#for-stores"
              className="w-full bg-[#00D2FF] text-[#082E72] py-3 sm:py-4 rounded-xl font-bold text-base hover:bg-[#00B8E6] transition-all shadow-md text-center flex items-center justify-center gap-2 mt-auto"
            >
              <MessageSquare className="w-5 h-5" />
              Hablar con ventas
            </a>
          </div>

          {/* Card Enterprise */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700/50 hover:shadow-xl transition-all flex flex-col relative overflow-hidden md:col-span-2 lg:col-span-1">
            {/* Badge Enterprise */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              ENTERPRISE
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-400" strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Enterprise</h3>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Custom Build
            </p>
            
            <div className="mb-6 flex-grow">
              <p className="text-gray-400 text-sm mb-4">
                Solución personalizada para grandes operaciones:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  Integraciones a medida y escalabilidad real
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  Soporte dedicado
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  Onboarding completo + capacitación continua
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <p className="text-2xl sm:text-3xl font-bold text-white">Precio a medida</p>
              <p className="text-gray-400 text-sm mt-1">Según tus necesidades</p>
            </div>
            
            <a
              href="#for-stores"
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 py-3 sm:py-4 rounded-xl font-bold text-base hover:from-amber-500 hover:to-amber-600 transition-all shadow-md text-center flex items-center justify-center gap-2 mt-auto"
            >
              <Crown className="w-5 h-5" />
              Solicitar propuesta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
