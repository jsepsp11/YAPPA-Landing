import { MapPin, Users, Rocket } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="sobre-yappa" className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#082E72] mb-3 sm:mb-4">Sobre YAPPA</h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg border border-blue-100/50">
            {/* Misión */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
              <span className="font-bold text-[#082E72]">Nuestra misión es acercar la tecnología</span> a los negocios y comercios pequeños del Ecuador.
            </p>
            
            {/* Problema y solución */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Vemos todos los días emprendedores que trabajan duro, pero que no tienen acceso a datos claros sobre su negocio. Por eso creamos <span className="font-bold text-[#082E72]">YAPPA</span>: una solución simple, cercana y poderosa que convierte la información en decisiones y las decisiones en crecimiento real.
            </p>
            
            {/* Visión */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Creemos en un Ecuador donde los negocios siguen siendo el corazón de la comunidad, pero con herramientas modernas para competir y crecer.
            </p>
          </div>

          {/* Stats - Oculto en mobile */}
          <div className="hidden sm:grid md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
            <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100/50">
              <div className="flex justify-center mb-3 sm:mb-4">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00D2FF] mb-2">Ecuador</div>
              <div className="text-sm sm:text-base text-gray-600">Hecho en Ecuador,<br />para los negocios del Ecuador.</div>
            </div>
            <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100/50">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00D2FF] mb-2">Comunidad</div>
              <div className="text-sm sm:text-base text-gray-600">Apoyamos a los negocios<br />que sostienen a su comunidad.</div>
            </div>
            <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100/50">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00D2FF] mb-2">Innovación</div>
              <div className="text-sm sm:text-base text-gray-600">Tecnología accesible<br />para que cualquier negocio pueda crecer.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
