import { BookOpen, Zap, Target } from 'lucide-react';

export default function ComoFunciona() {
  const pasos = [
    {
      titulo: 'Deja el cuaderno',
      descripcion: 'Todo tu negocio digitalizado en una app.',
      icon: BookOpen,
    },
    {
      titulo: 'Deja la ineficiencia',
      descripcion: 'Datos claros en segundos, no horas.',
      icon: Zap,
    },
    {
      titulo: 'Gana el control',
      descripcion: 'Decisiones inteligentes para crecer.',
      icon: Target,
    },
  ];

  return (
    <section id="como-funciona" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#082E72] mb-3 sm:mb-4 px-2">
            ¿Cómo funciona YAPPA?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium px-4">
            Deja el cuaderno, pero no el control.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile: Stack vertical */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {pasos.map((paso, index) => {
              const IconComponent = paso.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100/50 hover:shadow-lg transition-all">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#00D2FF] to-[#082E72] flex items-center justify-center shadow-xl">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#082E72] mb-2 sm:mb-3">{paso.titulo}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{paso.descripcion}</p>
                  </div>
                  {/* Arrow only on desktop between cards */}
                  {index < pasos.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-4 text-[#00D2FF] text-3xl">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <a
              href="#for-stores"
              className="inline-block w-full sm:w-auto bg-[#00D2FF] text-[#082E72] px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-2xl min-h-[56px]"
            >
              Prueba hoy tu negocio en YAPPA
            </a>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
              Primer mes gratis. Sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
