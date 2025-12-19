'use client';
import { useState } from 'react';
import { Package, DollarSign, BarChart3, TrendingUp, Calendar, MessageCircle, ChevronDown, Sparkles, Brain } from 'lucide-react';

export default function Funcionalidades() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const funcionalidadDestacada = {
    icon: Brain,
    iconSecondary: Sparkles,
    title: 'Tu YAPPA del día',
    subtitle: 'Inteligencia artificial al servicio de tu negocio',
    description: 'Acompañamiento estratégico basado en datos reales, optimizados con inteligencia artificial para darte soluciones que funcionan y ayudan a que tu negocio crezca.',
  };

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

  return (
    <section id="funcionalidades" className="relative py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082E72] mb-4">
            Todo lo que tu negocio necesita, en una sola app
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            YAPPA integra las herramientas básicas para administrar tu negocio sin que tengas que ser experto en contabilidad o tecnología.
          </p>
        </div>

        {/* Funcionalidad Destacada - IA */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#082E72] via-[#0A3A8F] to-[#00D2FF] p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#00D2FF]/50">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            
            <div className="relative z-10">
              {/* Icons */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="relative">
                  <Brain className="w-16 h-16 text-[#00D2FF]" strokeWidth={1.5} />
                  <Sparkles className="w-8 h-8 text-white absolute -top-2 -right-2 animate-pulse" strokeWidth={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-3">
                {funcionalidadDestacada.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg md:text-xl font-bold text-[#00D2FF] text-center mb-6">
                {funcionalidadDestacada.subtitle}
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-blue-100 text-center leading-relaxed max-w-3xl mx-auto">
                {funcionalidadDestacada.description}
              </p>

              {/* Badge */}
              <div className="flex justify-center mt-8">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold border border-white/20">
                  <Sparkles className="w-5 h-5" />
                  Potenciado por Inteligencia Artificial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {funcionalidades.map((func, index) => {
            const IconComponent = func.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100/50"
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-[#00D2FF]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#082E72] mb-3">{func.title}</h3>
                <p className="text-gray-700 leading-relaxed">{func.description}</p>
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
                className={`bg-white/80 backdrop-blur-sm rounded-2xl border transition-all ${
                  isOpen 
                    ? 'border-[#00D2FF]/50 shadow-lg' 
                    : 'border-gray-100/50 shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors rounded-2xl"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`flex-shrink-0 transition-all ${isOpen ? 'scale-110' : ''}`}>
                      <IconComponent 
                        className={`w-10 h-10 transition-colors ${
                          isOpen ? 'text-[#00D2FF]' : 'text-[#082E72]'
                        }`} 
                        strokeWidth={1.5} 
                      />
                    </div>
                    <h3 className={`text-lg font-bold transition-colors ${
                      isOpen ? 'text-[#00D2FF]' : 'text-[#082E72]'
                    }`}>
                      {func.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#00D2FF] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {func.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#for-stores"
            className="inline-block bg-[#00D2FF] text-[#082E72] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-lg"
          >
            Probar YAPPA gratis
          </a>
        </div>
      </div>
    </section>
  );
}
