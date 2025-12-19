import { Quote } from 'lucide-react';

export default function Testimonios() {
  const testimonios = [
    {
      cita: 'Antes anotaba todo en un cuaderno y al final del mes no sabía cuánto ganaba de verdad. Con YAPPA veo mis ventas y mis gastos en segundos. Ahora sé qué productos me conviene tener más.',
      autor: 'María',
      tienda: 'Negocio "Mi Esquina"',
      ciudad: 'Quito',
    },
    {
      cita: 'Me ayudó a dejar de comprar por comprar. Veo qué se mueve y qué no. He dejado de perder plata en productos que se quedan en percha.',
      autor: 'Don Jorge',
      tienda: 'Minimarket "San José"',
      ciudad: 'Guayaquil',
    },
  ];

  return (
    <section className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#082E72] mb-2 sm:mb-4 px-2">
            Lo que dicen quienes ya usan YAPPA
          </h2>
        </div>

        {/* Mobile: Solo 1 testimonio, Desktop: 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonios.slice(0, 1).map((testimonio, index) => (
            <div
              key={index}
              className="md:hidden bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-2xl shadow-lg border border-blue-100/50"
            >
              <div className="mb-3">
                <Quote className="w-8 h-8 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 italic">
                "{testimonio.cita}"
              </p>
              <div className="border-t border-blue-200 pt-4">
                <p className="font-bold text-[#082E72] text-sm sm:text-base">{testimonio.autor}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonio.tienda} – {testimonio.ciudad}</p>
              </div>
            </div>
          ))}
          {/* Desktop: todos los testimonios */}
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="hidden md:block bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all"
            >
              <div className="mb-4 lg:mb-6">
                <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4 lg:mb-6 italic">
                "{testimonio.cita}"
              </p>
              <div className="border-t border-blue-200 pt-4 lg:pt-6">
                <p className="font-bold text-[#082E72] text-base lg:text-lg">{testimonio.autor}</p>
                <p className="text-sm text-gray-600">{testimonio.tienda} – {testimonio.ciudad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
