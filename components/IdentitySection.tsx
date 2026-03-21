'use client';
import { TrendingUp, Store, MapPin, Rocket } from 'lucide-react';

export default function IdentitySection() {
  const cards = [
    {
      icon: TrendingUp,
      title: 'Negocios en crecimiento',
      description: 'Para quienes ya están vendiendo más, moviendo más y resolviendo más, pero necesitan orden para seguir creciendo sin perder el control.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Store,
      title: 'Comercios locales',
      description: 'Para negocios que sostienen el día a día de su comunidad y buscan una herramienta simple para manejar ventas, gastos, inventario y caja.',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      icon: MapPin,
      title: 'Negocios ecuatorianos',
      description: 'Para negocios del país que necesitan soluciones cercanas, fáciles de usar y pensadas para su realidad, no sistemas complicados hechos para otros mercados.',
      gradient: 'from-amber-500 to-orange-400',
    },
    {
      icon: Rocket,
      title: 'Emprendimientos',
      description: 'Para quienes están construyendo algo propio y quieren dejar atrás la improvisación para empezar a tomar decisiones con más claridad.',
      gradient: 'from-purple-500 to-pink-400',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#082E72]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082E72] mb-4 sm:mb-6 leading-tight">
            Hecho para negocios que quieren crecer mejor
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            YAPPA acompaña a negocios ecuatorianos que hoy operan entre Excel, cuadernos, WhatsApp o memoria, y necesitan una forma más simple de tomar control, ordenar su operación y crecer con claridad.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
                style={{
                  transform: 'translateY(0)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="relative text-lg sm:text-xl font-bold text-[#082E72] mb-3 group-hover:text-[#00D2FF] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="relative text-sm sm:text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Closing section */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Closing text */}
          <div className="bg-gradient-to-r from-[#082E72]/5 via-[#00D2FF]/5 to-[#082E72]/5 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10">
            <p className="text-base sm:text-lg md:text-xl text-[#082E72] font-medium leading-relaxed">
              No importa si hoy manejas tu negocio con Excel, papel o intuición. 
              <span className="text-[#00D2FF] font-bold"> YAPPA te ayuda a dar el siguiente paso</span> con más orden, más control y más claridad.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#producto-en-accion"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00D2FF] to-[#00B8E6] text-[#082E72] px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:from-[#00B8E6] hover:to-[#00A5D4] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00D2FF]/25"
          >
            <span>Descubre si YAPPA es para ti</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
