'use client';
import { useState, useCallback } from 'react';
import { Zap, Building2, Users, Calculator, MessageSquare } from 'lucide-react';

export default function PricingSection() {
  const [merchants, setMerchants] = useState<number>(5);
  const [billingPeriodStandard, setBillingPeriodStandard] = useState<'monthly' | 'annual'>('monthly');
  const [billingPeriodPremium, setBillingPeriodPremium] = useState<'monthly' | 'annual'>('monthly');
  
  // Cálculo del precio Premium
  const calculatePremiumPrice = useCallback((numMerchants: number, isAnnual: boolean): number => {
    const validMerchants = Math.max(1, Math.min(100, numMerchants || 1));
    const basePrice = isAnnual ? 11.99 : 14.99;
    if (validMerchants <= 5) return basePrice;
    return basePrice + (validMerchants - 5) * 5;
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
    if (value === '') {
      setMerchants(1);
      return;
    }
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      setMerchants(Math.max(1, Math.min(100, parsed)));
    }
  }, []);

  const premiumTotal = calculatePremiumPrice(merchants, billingPeriodPremium === 'annual');

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

        {/* Cards Grid - 2 columnas centradas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card Standard */}
          <div className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm p-6 sm:p-7 rounded-2xl shadow-lg border border-blue-200/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[520px] relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D2FF]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            {/* HEADER */}
            <div className="relative z-10 mb-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00D2FF]/20 to-[#00D2FF]/10 flex items-center justify-center shadow-sm">
                    <Zap className="w-5 h-5 text-[#00D2FF]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#082E72]">Standard</h3>
                </div>
                <span className="bg-[#00D2FF]/10 text-[#082E72] text-xs font-semibold px-3 py-1 rounded-full border border-[#00D2FF]/20">
                  Ideal para empezar
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Solo el App para gestionar tu negocio.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingPeriodStandard('monthly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingPeriodStandard === 'monthly'
                      ? 'bg-white text-[#082E72] shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Mensual
                </button>
                <button
                  onClick={() => setBillingPeriodStandard('annual')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingPeriodStandard === 'annual'
                      ? 'bg-white text-[#082E72] shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Anual
                </button>
              </div>
            </div>

            {/* BODY - Benefits */}
            <div className="flex-grow mb-5">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#00D2FF]/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]"></div>
                  </div>
                  <span>Solo App</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#00D2FF]/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]"></div>
                  </div>
                  <span className="font-semibold text-[#00D2FF]">🎁 Primer mes gratis</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#00D2FF]/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]"></div>
                  </div>
                  <span>Cancela cuando quieras</span>
                </li>
              </ul>
            </div>
            
            {/* FOOTER - Pricing & CTA */}
            <div className="border-t border-blue-100 pt-5 mt-auto">
              <div className="text-center mb-4">
                {billingPeriodStandard === 'monthly' ? (
                  <>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-[#082E72]">$9.99</span>
                      <span className="text-gray-500 text-base font-medium">/mes</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Empieza gratis, paga desde el mes 2
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-[#082E72]">$83</span>
                      <span className="text-gray-500 text-base font-medium">/año</span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      Solo $6.99/mes · Ahorras 30%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      + primer mes gratis
                    </p>
                  </>
                )}
              </div>
              
              <a
                href="#for-stores"
                className="w-full bg-[#00D2FF] text-[#082E72] py-3.5 rounded-xl font-bold text-base hover:bg-[#00B8E6] transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Zap className="w-5 h-5" />
                Empezar gratis
              </a>
            </div>
          </div>

          {/* Card Premium */}
          <div className="bg-gradient-to-br from-[#082E72] to-[#0A3A8F] p-6 sm:p-7 rounded-2xl shadow-lg border border-blue-900/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[520px] relative overflow-hidden">
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
              App + App versión web + Admin Console
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingPeriodPremium('monthly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingPeriodPremium === 'monthly'
                      ? 'bg-white/20 text-white'
                      : 'text-blue-200 hover:text-white'
                  }`}
                >
                  Mensual
                </button>
                <button
                  onClick={() => setBillingPeriodPremium('annual')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingPeriodPremium === 'annual'
                      ? 'bg-white/20 text-white'
                      : 'text-blue-200 hover:text-white'
                  }`}
                >
                  Anual
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              {billingPeriodPremium === 'monthly' ? (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-white">$14.99</span>
                    <span className="text-blue-200 text-sm">/mes</span>
                  </div>
                  <p className="text-blue-200 text-xs sm:text-sm mt-1">hasta 5 comercios</p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-white">$144</span>
                    <span className="text-blue-200 text-sm">/año</span>
                  </div>
                  <p className="text-green-400 text-sm font-semibold mt-1">
                    Solo $11.99/mes · Ahorras 20%
                  </p>
                  <p className="text-blue-200 text-xs mt-1">hasta 5 comercios</p>
                </>
              )}
            </div>
            
            {/* Regla adicional */}
            <div className="bg-white/10 rounded-xl p-3 sm:p-4 mb-4">
              <div className="flex items-center gap-2 text-blue-100 text-sm mb-2">
                <Users className="w-4 h-4" />
                <span>+$5 por cada comercio adicional</span>
              </div>
              <p className="text-blue-200 text-xs">
                Ej. Si tienes 7 comercios = ${billingPeriodPremium === 'monthly' ? '24.99' : '21.99'}/mes
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
                  aria-label="Reducir comercios"
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
                  aria-label="Número de comercios"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 text-white font-bold hover:bg-white/30 transition-colors flex items-center justify-center select-none"
                  aria-label="Aumentar comercios"
                >
                  +
                </button>
                <span className="text-blue-100 text-xs sm:text-sm">comercios</span>
              </div>
              
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Total estimado:</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#00D2FF]">${premiumTotal.toFixed(2)}/mes</span>
                </div>
              </div>
            </div>
            
            <a
              href="#for-stores"
              className="w-full bg-[#00D2FF] text-[#082E72] py-3 sm:py-4 rounded-xl font-bold text-base hover:bg-[#00B8E6] transition-all shadow-md text-center flex items-center justify-center gap-2 mt-auto"
            >
              <MessageSquare className="w-5 h-5" />
              Hablar con ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
