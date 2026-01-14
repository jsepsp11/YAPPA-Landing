'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pregunta: '¿YAPPA tiene algún costo?',
      respuesta: (
        <>
          <p className="mb-3">
            Sí, YAPPA incluye <strong>1 mes de prueba gratis</strong> para que lo uses en tu negocio sin pagar nada.
            Cuando termina la prueba, puedes elegir el plan que mejor te quede y el cobro se activa solo si decides continuar.
          </p>
          <p className="mb-3 font-semibold text-[#082E72]">Planes disponibles:</p>
          <ul className="list-none space-y-2 mb-3">
            <li className="flex items-start gap-2">
              <span className="text-[#00D2FF] font-bold">•</span>
              <span><strong>Growth ($9.99/mes):</strong> solo la app.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00D2FF] font-bold">•</span>
              <span><strong>Premium (desde $25/mes):</strong> app + Admin Console (incluye hasta 5 merchants; cada merchant adicional suma $5).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00D2FF] font-bold">•</span>
              <span><strong>Enterprise:</strong> precio a medida (solución personalizada para operaciones grandes).</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm italic">
            Si cancelas antes de que termine el mes de prueba, no se te cobra nada.
          </p>
        </>
      ),
    },
    {
      pregunta: 'No soy bueno con la tecnología, ¿igual puedo usar YAPPA?',
      respuesta: 'Sí. Si sabes usar WhatsApp, puedes usar YAPPA. La app está diseñada para ser simple, con botones claros y pasos guiados. Además, te acompañamos por WhatsApp hasta que te sientas cómodo usándola.',
    },
    {
      pregunta: '¿Necesito una computadora?',
      respuesta: 'No. Solo necesitas tu celular con acceso a internet. Desde ahí puedes administrar tu inventario, registrar tus ventas y ver tus reportes.',
    },
    {
      pregunta: '¿Qué pasa después de registrar mi negocio?',
      respuesta: 'Te contactamos por WhatsApp para ayudarte a crear tu cuenta, registrar tus primeros productos y enseñarte cómo usar YAPPA en tu día a día. No te dejamos solo en el proceso.',
    },
    {
      pregunta: '¿Mis datos están seguros?',
      respuesta: 'Sí. Cuidamos la información de tu negocio y no la compartimos con terceros sin tu autorización. Tus datos son tuyos y los usamos solo para ayudarte a tomar mejores decisiones.',
    },
  ];

  return (
    <section id="preguntas-frecuentes" className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#082E72] mb-2 sm:mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-gray-100/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors"
              >
                <span className="text-sm sm:text-base lg:text-lg font-bold text-[#082E72] pr-4 sm:pr-8">
                  {faq.pregunta}
                </span>
                <span className="text-xl sm:text-2xl text-[#00D2FF] flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {typeof faq.respuesta === 'string' ? <p>{faq.respuesta}</p> : faq.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
