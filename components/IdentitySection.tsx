'use client';
import { useState } from 'react';
import { TrendingUp, Store, MapPin, Rocket } from 'lucide-react';

export default function IdentitySection() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const cards = [
    {
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-400',
      front: {
        title: 'Negocios en crecimiento',
        text: 'Para quienes ya están vendiendo más, moviendo más y resolviendo más, pero necesitan orden para seguir creciendo sin perder el control.',
      },
      back: {
        title: 'Crecer sí, pero con control',
        text: 'Cuando el negocio empieza a moverse más, también crecen los errores, los vacíos y el desorden. YAPPA te ayuda a ordenar ventas, gastos e inventario para que crecer no signifique improvisar.',
        cta: 'Quiero crecer con orden',
      },
    },
    {
      icon: Store,
      gradient: 'from-emerald-500 to-teal-400',
      front: {
        title: 'Comercios locales',
        text: 'Para negocios que sostienen el día a día de su comunidad y buscan una herramienta simple para manejar ventas, gastos, inventario y caja.',
      },
      back: {
        title: 'Tu negocio merece herramientas claras',
        text: 'Tu operación no debería depender de apuntes sueltos o memoria. YAPPA te da una forma simple de ver mejor tu negocio, ahorrar tiempo y tomar decisiones más claras todos los días.',
        cta: 'Quiero más control diario',
      },
    },
    {
      icon: MapPin,
      gradient: 'from-amber-500 to-orange-400',
      front: {
        title: 'Negocios ecuatorianos',
        text: 'Para negocios del país que necesitan soluciones cercanas, fáciles de usar y pensadas para su realidad, no sistemas complicados hechos para otros mercados.',
      },
      back: {
        title: 'Una solución pensada para tu realidad',
        text: 'YAPPA no busca complicarte con sistemas pesados. Está pensado para negocios ecuatorianos que necesitan algo simple, útil y aterrizado a cómo realmente operan.',
        cta: 'Quiero algo hecho para mí',
      },
    },
    {
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-400',
      front: {
        title: 'Emprendimientos',
        text: 'Para quienes están construyendo algo propio y quieren dejar atrás la improvisación para empezar a tomar decisiones con más claridad.',
      },
      back: {
        title: 'Emprender también es ordenar',
        text: 'Tener una buena idea no basta si el negocio no se entiende por dentro. YAPPA te ayuda a convertir el esfuerzo diario en control, claridad y mejores decisiones para crecer mejor.',
        cta: 'Quiero emprender con claridad',
      },
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#082E72]/5 rounded-full blur-3xl"></div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(8deg);
        }

        .flip-card.flipped:hover .flip-card-inner {
          transform: rotateY(172deg);
        }

        @media (hover: none) {
          .flip-card:hover .flip-card-inner {
            transform: rotateY(0deg);
          }
          .flip-card.flipped:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
        }

        .tap-hint {
          animation: pulse-hint 2s ease-in-out infinite;
        }

        @keyframes pulse-hint {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

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
            const isFlipped = flippedCards[index] || false;
            
            return (
              <div
                key={index}
                className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleCard(index)}
                onKeyDown={(e) => e.key === 'Enter' && toggleCard(index)}
                tabIndex={0}
                role="button"
                aria-label={`${card.front.title}. Toca para ver más información.`}
                style={{ height: '380px' }}
              >
                <div className="flip-card-inner">
                  {/* FRONT SIDE */}
                  <div className="flip-card-front bg-white shadow-lg border border-gray-100 p-6 sm:p-7 flex flex-col">
                    {/* Icon */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#082E72] mb-3">
                      {card.front.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                      {card.front.text}
                    </p>

                    {/* Tap hint */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2">
                      <span className="tap-hint text-xs sm:text-sm text-[#00D2FF] font-medium">
                        Toca para descubrir más
                      </span>
                      <svg className="w-4 h-4 text-[#00D2FF] tap-hint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient}`}></div>
                  </div>

                  {/* BACK SIDE */}
                  <div className={`flip-card-back bg-gradient-to-br ${card.gradient} p-6 sm:p-7 flex flex-col text-white`}>
                    {/* Back icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    {/* Back content */}
                    <h3 className="text-lg sm:text-xl font-bold mb-3">
                      {card.back.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed opacity-95 flex-grow">
                      {card.back.text}
                    </p>

                    {/* Mini CTA */}
                    <a
                      href="#for-stores"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 inline-flex items-center justify-center gap-2 bg-white text-[#082E72] px-5 py-3 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      <span>{card.back.cta}</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>

                    {/* Tap to return hint */}
                    <p className="text-xs text-white/70 text-center mt-3">
                      Toca para volver
                    </p>
                  </div>
                </div>
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
