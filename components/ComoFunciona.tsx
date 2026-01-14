'use client';
import { BookOpen, Zap, Target } from 'lucide-react';

export default function ComoFunciona() {
  const pasos = [
    {
      paso: '01',
      titulo: 'Deja el cuaderno',
      descripcion: 'Todo tu negocio digitalizado en una app fácil de usar.',
      icon: BookOpen,
    },
    {
      paso: '02',
      titulo: 'Deja la ineficiencia',
      descripcion: 'Datos claros en segundos, no horas de búsqueda.',
      icon: Zap,
    },
    {
      paso: '03',
      titulo: 'Gana el control',
      descripcion: 'Decisiones inteligentes basadas en información real.',
      icon: Target,
    },
  ];

  return (
    <section id="como-funciona" className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00D2FF]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#082E72]/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block text-[#00D2FF] text-sm font-semibold tracking-wider uppercase mb-3">
            Proceso simple
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#082E72] mb-4 sm:mb-5 px-2">
            ¿Cómo funciona YAPPA?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium px-4 max-w-2xl mx-auto">
            Deja el cuaderno, pero no el control.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {pasos.map((paso, index) => {
              const IconComponent = paso.icon;
              return (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ 
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  {/* Card */}
                  <div className="relative bg-white p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#E6EEF7] shadow-[0_4px_20px_rgba(8,46,114,0.06)] hover:shadow-[0_8px_30px_rgba(8,46,114,0.12)] hover:-translate-y-1 hover:border-[#00D2FF]/30 transition-all duration-300 ease-out h-full">
                    
                    {/* Step Badge */}
                    <div className="absolute -top-3 left-6 sm:left-7">
                      <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#082E72] to-[#0A3A8F] text-white text-xs font-bold tracking-wider px-3 py-1.5 rounded-full shadow-md">
                        PASO {paso.paso}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div className="flex justify-center mb-5 sm:mb-6 mt-2">
                      <div className="relative">
                        {/* Outer ring */}
                        <div className="absolute inset-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-gradient-to-br from-[#00D2FF]/20 to-[#082E72]/10 scale-125 group-hover:scale-[1.35] transition-transform duration-300"></div>
                        {/* Icon circle */}
                        <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-gradient-to-br from-[#00D2FF] to-[#082E72] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-[#082E72] mb-2 sm:mb-3 group-hover:text-[#00D2FF] transition-colors duration-300">
                        {paso.titulo}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Connector line (desktop only) */}
                  {index < pasos.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 transform -translate-y-1/2 z-20">
                      <div className="flex items-center gap-1">
                        <div className="w-4 lg:w-6 h-0.5 bg-gradient-to-r from-[#00D2FF] to-[#00D2FF]/50"></div>
                        <div className="w-2 h-2 rounded-full bg-[#00D2FF]"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center px-4">
            <a
              href="#for-stores"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-[#00D2FF] to-[#00B8E6] text-[#082E72] px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:from-[#00B8E6] hover:to-[#00A5D4] transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 shadow-lg min-h-[56px]"
            >
              Prueba hoy tu negocio en YAPPA
            </a>
            <p className="text-sm text-gray-500 mt-4 font-medium">
              Primer mes gratis · Sin compromiso · Cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
