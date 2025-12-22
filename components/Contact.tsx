import { Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082E72] mb-6">
            ¿Tienes preguntas?
          </h2>
          <p className="text-xl text-gray-600 mb-12">Estamos aquí para ayudarte</p>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:jsepsp@gmail.com"
              className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100/50"
            >
              <div className="flex justify-center mb-4">
                <Mail className="w-16 h-16 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#082E72] mb-3">Email</h3>
              <p className="text-gray-600 text-lg">jsepsp@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">Respuesta en 24 horas</p>
            </a>

            <a
              href="https://wa.me/593997992717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100/50"
            >
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-16 h-16 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#082E72] mb-3">WhatsApp</h3>
              <p className="text-gray-600 text-lg">+593 99 799 2717</p>
              <p className="text-sm text-gray-500 mt-2">Lun-Vie 9h00-18h00</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
