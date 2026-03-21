'use client';
import { useState } from 'react';
import { Package, DollarSign, BarChart3, TrendingUp, Calendar, MessageCircle, ChevronDown, Sparkles, Brain, Lightbulb, Compass, Rocket, Heart } from 'lucide-react';

export default function Funcionalidades() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isAICardExpanded, setIsAICardExpanded] = useState(false);

  const funcionalidades = [
    {
      icon: Package,
      title: 'Inventario en tiempo real',
      description: 'Registra tus productos, cantidades y precios. Ve qué entra y qué sale sin cuadernos ni hojas sueltas.',
    },
    {
      icon: DollarSign,
      title: 'Registro de ventas diario',
      description: 'Anota ventas rápidas desde tu celular y mira cuánto facturaste en el día, la semana o el mes.',
    },
    {
      icon: BarChart3,
      title: 'Control de gastos',
      description: 'Registra compras a proveedores, gastos del local y otros pagos. Así sabes cuánto realmente te queda.',
    },
    {
      icon: TrendingUp,
      title: 'Reportes claros y sencillos',
      description: 'Ve tus números en gráficos fáciles de entender: productos más vendidos, márgenes y tendencias.',
    },
    {
      icon: Calendar,
      title: 'Historial de tu negocio',
      description: 'Guarda el historial de ventas y gastos para ver cómo va creciendo tu negocio con el tiempo.',
    },
    {
      icon: MessageCircle,
      title: 'Soporte y acompañamiento',
      description: 'Te ayudamos por WhatsApp a configurar tu negocio y resolver dudas cuando lo necesites.',
    },
  ];

  const aiValueBlocks = [
    {
      icon: Lightbulb,
      title: 'Te da más claridad',
      description: 'Analiza la información que registras para ayudarte a entender mejor ventas, gastos, inventario y movimientos clave.',
    },
    {
      icon: Compass,
      title: 'Te orienta mejor',
      description: 'Te entrega recomendaciones útiles para que no dependas solo de la intuición o la memoria.',
    },
    {
      icon: Rocket,
      title: 'Impulsa tu crecimiento',
      description: 'Mientras tú ganas control y foco, tu negocio gana más orden, mejores decisiones y más capacidad para crecer.',
    },
    {
      icon: Heart,
      title: 'Te acompaña de verdad',
      description: 'No es IA por moda. Es inteligencia aplicada para ayudarte a operar mejor todos los días.',
    },
  ];

  return (
    <section id="funcionalidades" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#082E72] mb-3 sm:mb-4">
            Todo lo que tu negocio necesita, en una sola app
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            YAPPA integra las herramientas básicas para administrar tu negocio sin que tengas que ser experto en contabilidad o tecnología.
          </p>
        </div>

        {/* Funcionalidad Destacada - IA Interactiva */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-12">
          <div 
            className="relative overflow-hidden bg-gradient-to-br from-[#082E72] via-[#0A3A8F] to-[#00D2FF] rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#00D2FF]/50 cursor-pointer transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,210,255,0.3)]"
            onClick={() => setIsAICardExpanded(!isAICardExpanded)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsAICardExpanded(!isAICardExpanded)}
            aria-expanded={isAICardExpanded}
            aria-label="Tarjeta de inteligencia artificial. Toca para ver más información."
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            
            {/* Animated background glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-[#00D2FF]/0 via-[#00D2FF]/10 to-[#00D2FF]/0 transition-opacity duration-500 ${isAICardExpanded ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
              
              {/* FRONT STATE - Always visible */}
              <div className={`transition-all duration-500 ${isAICardExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                {/* Icons */}
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                  <div className="relative">
                    <Brain className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#00D2FF]" strokeWidth={1.5} />
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-pulse" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center mb-2 sm:mb-3">
                  Tu YAPPA del día
                </h3>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl font-bold text-[#00D2FF] text-center mb-4 sm:mb-6">
                  Inteligencia artificial al servicio de tu negocio
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 text-center leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
                  Acompañamiento estratégico basado en datos reales, optimizados con inteligencia artificial para darte soluciones que funcionan y ayudan a que tu negocio crezca.
                </p>

                {/* Badge */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold border border-white/20">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    Potenciado por Inteligencia Artificial
                  </span>
                </div>

                {/* Tap hint */}
                <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                  <span className="text-white/60 text-xs sm:text-sm animate-pulse">Toca para descubrir más</span>
                  <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
                </div>
              </div>

              {/* EXPANDED STATE */}
              <div className={`transition-all duration-500 ${isAICardExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                  <div className="relative">
                    <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-[#00D2FF]" strokeWidth={1.5} />
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white absolute -top-1 -right-1 animate-pulse" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white text-center mb-3 sm:mb-4">
                  La inteligencia detrás de tu negocio
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-blue-100 text-center leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
                  YAPPA usa inteligencia artificial para leer la información de tu operación y convertirla en recomendaciones simples, útiles y accionables para ti y para tu negocio.
                </p>

                {/* Value blocks grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {aiValueBlocks.map((block, index) => {
                    const IconComponent = block.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/15 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00D2FF]/20 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 sm:w-5 sm:h-5 text-[#00D2FF]" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                              {block.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                              {block.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <a
                    href="#for-stores"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-white text-[#082E72] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    <span>Descubre cómo te acompaña la IA</span>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  
                  {/* Tap to close hint */}
                  <span className="text-white/50 text-xs flex items-center gap-1">
                    <ChevronDown className="w-3 h-3 rotate-180" />
                    Toca para cerrar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {funcionalidades.map((func, index) => {
            const IconComponent = func.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100/50"
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-[#00D2FF]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#082E72] mb-3">{func.title}</h3>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{func.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Accordion View */}
        <div className="lg:hidden space-y-3 max-w-2xl mx-auto">
          {funcionalidades.map((func, index) => {
            const IconComponent = func.icon;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border transition-all ${
                  isOpen 
                    ? 'border-[#00D2FF]/50 shadow-lg' 
                    : 'border-gray-100/50 shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className={`flex-shrink-0 transition-all ${isOpen ? 'scale-110' : ''}`}>
                      <IconComponent 
                        className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${
                          isOpen ? 'text-[#00D2FF]' : 'text-[#082E72]'
                        }`} 
                        strokeWidth={1.5} 
                      />
                    </div>
                    <h3 className={`text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                      isOpen ? 'text-[#00D2FF]' : 'text-[#082E72]'
                    }`}>
                      {func.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#00D2FF] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {func.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#for-stores"
            className="inline-block bg-[#00D2FF] text-[#082E72] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-lg"
          >
            Probar YAPPA gratis
          </a>
        </div>
      </div>
    </section>
  );
}
