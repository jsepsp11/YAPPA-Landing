import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#082E72] mb-3 sm:mb-6">
            ¿Tienes preguntas?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12">Estamos aquí para ayudarte</p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card Email */}
            <a
              href="mailto:jsepsp@gmail.com"
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00D2FF]/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[#00D2FF]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#082E72] mb-3">Email</h3>
              <p className="text-gray-700 text-base sm:text-lg font-medium">jsepsp@gmail.com</p>
              <div className="mt-4">
                <span className="inline-block bg-blue-50 text-[#082E72] text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
                  Respuesta en 24 horas
                </span>
              </div>
            </a>

            {/* Card WhatsApp - Premium con 2 números */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#082E72] mb-5">WhatsApp</h3>
              
              {/* Números de WhatsApp */}
              <div className="space-y-3">
                {/* Número Principal */}
                <a
                  href="https://wa.me/593992913093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200/50 hover:border-green-300 hover:shadow-md transition-all group"
                >
                  <span className="text-gray-800 text-base sm:text-lg font-semibold group-hover:text-green-700 transition-colors">
                    +593 99 291 3093
                  </span>
                  <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    Principal
                  </span>
                </a>

                {/* Número Alternativo */}
                <a
                  href="https://wa.me/593997992717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200/50 hover:border-gray-300 hover:shadow-md transition-all group"
                >
                  <span className="text-gray-600 text-sm sm:text-base font-medium group-hover:text-gray-800 transition-colors">
                    +593 99 799 2717
                  </span>
                  <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                    Alternativo
                  </span>
                </a>
              </div>

              {/* Horario */}
              <div className="mt-5">
                <span className="inline-block bg-blue-50 text-[#082E72] text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
                  Lun–Vie · 09h00–18h00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
