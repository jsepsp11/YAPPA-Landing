'use client';
import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

export default function Testimonios() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    {
      cita: 'Al principio pensé que era complicado, pero en 5 minutos ya estaba registrando mis ventas. Mis hijos me ayudaron a instalarlo y ahora lo uso todos los días.',
      autor: 'Doña Carmen',
      tienda: 'Tienda "La Bendición"',
      ciudad: 'Cuenca',
    },
    {
      cita: 'Lo mejor es el cierre del día. En un solo vistazo sé cuánto vendí, cuánto gasté y cuánto me queda. Antes me tomaba horas hacer eso con papel.',
      autor: 'Luis',
      tienda: 'Bodega "El Ahorro"',
      ciudad: 'Machala',
    },
    {
      cita: 'Tengo 3 locales y ahora puedo ver las ventas de todos desde mi celular. Ya no tengo que ir a cada tienda a revisar los cuadernos.',
      autor: 'Roberto',
      tienda: 'Supermercados "Don Roberto"',
      ciudad: 'Ambato',
    },
    {
      cita: 'Mi esposo no creía en estas aplicaciones, pero cuando vio los reportes de ganancias se convenció. Ahora él también registra las ventas.',
      autor: 'Patricia',
      tienda: 'Minimarket "Los Pinos"',
      ciudad: 'Riobamba',
    },
    {
      cita: 'Las alertas de inventario me salvaron. Antes se me acababa el arroz o el azúcar y perdía clientes. Ahora YAPPA me avisa antes de que se acabe.',
      autor: 'Fernando',
      tienda: 'Víveres "La Economía"',
      ciudad: 'Loja',
    },
    {
      cita: 'Soy joven y manejo la tecnología, pero mis papás también aprendieron a usarlo. La app es muy fácil de entender para cualquier persona.',
      autor: 'Andrés',
      tienda: 'Tienda "Familiar"',
      ciudad: 'Manta',
    },
  ];

  // Duplicar testimonios para efecto infinito
  const duplicatedTestimonios = [...testimonios, ...testimonios];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled half the content (original testimonios)
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#082E72] mb-2 sm:mb-4 px-2">
            Lo que dicen quienes ya usan YAPPA
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Miles de negocios en Ecuador ya confían en YAPPA
          </p>
        </div>
      </div>

      {/* Carrusel infinito */}
      <div 
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {duplicatedTestimonios.map((testimonio, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px] bg-white/90 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all"
          >
            <div className="mb-3 sm:mb-4">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#00D2FF]" strokeWidth={1.5} />
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 italic line-clamp-4">
              "{testimonio.cita}"
            </p>
            <div className="border-t border-blue-200 pt-3 sm:pt-4">
              <p className="font-bold text-[#082E72] text-sm sm:text-base">{testimonio.autor}</p>
              <p className="text-xs sm:text-sm text-gray-600">{testimonio.tienda} – {testimonio.ciudad}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradientes para efecto de fade en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
