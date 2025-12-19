import { CheckCircle, TrendingUp, Bell, Store } from 'lucide-react';

export default function Benefits() {
  const beneficios = [
    {
      icon: CheckCircle,
      titulo: 'Control total',
      descripcion: 'Inventario, ventas y gastos en un solo lugar.',
    },
    {
      icon: TrendingUp,
      titulo: 'Más ganancia',
      descripcion: 'Descubre qué productos te dejan más margen.',
    },
    {
      icon: Bell,
      titulo: 'Sin quedarte sin stock',
      descripcion: 'Alertas cuando un producto está por acabarse.',
    },
    {
      icon: Store,
      titulo: 'Hecho para ti',
      descripcion: 'Diseñado para el comerciante ecuatoriano.',
    },
  ];

  return (
    <section id="porque-yappa" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header - Mobile optimizado */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#082E72] mb-3 sm:mb-4">
            ¿Por qué YAPPA?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Todo tu negocio en una app sencilla. Control total desde tu celular.
          </p>
        </div>

        {/* Cards Grid - Mobile first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-2xl hover:shadow-lg transition-all border border-blue-100/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00D2FF]/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D2FF]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#082E72] mb-1">{beneficio.titulo}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{beneficio.descripcion}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
