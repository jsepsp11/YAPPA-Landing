'use client';
import { useState } from 'react';
import { CheckCircle, Zap, MessageCircle, BarChart3, Apple } from 'lucide-react';

export default function ForStores() {
  const [formData, setFormData] = useState({
    nombre: '',
    tienda: '',
    email: '',
    telefono: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', tienda: '', email: '', telefono: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const beneficios = [
    { icon: CheckCircle, text: 'Primer mes gratis', subtext: 'Sin tarjeta' },
    { icon: Zap, text: 'Fácil de Usar', subtext: 'En minutos' },
    { icon: MessageCircle, text: 'Soporte', subtext: 'Por WhatsApp' },
    { icon: BarChart3, text: 'Reportes', subtext: 'Cada día' },
  ];

  return (
    <section id="for-stores" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#082E72] to-[#0A3A8F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header - Mobile optimizado */}
          <div className="text-center mb-6 sm:mb-10 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Tu negocio merece estar más claro
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">
              Empieza a tomar decisiones con datos, no con adivinanzas.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#082E72] mb-1.5">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#00D2FF] focus:outline-none transition-colors text-base text-black"
                    placeholder="María García"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#082E72] mb-1.5">
                    Nombre de tu Negocio *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.tienda}
                    onChange={(e) => setFormData({ ...formData, tienda: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#00D2FF] focus:outline-none transition-colors text-base text-black"
                    placeholder="Mi Negocio"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#082E72] mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#00D2FF] focus:outline-none transition-colors text-base text-black"
                    placeholder="maria@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#082E72] mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#00D2FF] focus:outline-none transition-colors text-base text-black"
                    placeholder="+593 99 123 4567"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transform hover:scale-[1.02] transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 min-h-[52px] ${
                  submitStatus === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#00D2FF] text-[#082E72] hover:bg-[#00B8E6]'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Registro exitoso! Te contactaremos pronto
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    {isSubmitting ? 'Enviando...' : 'Prueba hoy tu negocio en YAPPA'}
                  </>
                )}
              </button>

              {/* Mensaje de error */}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Hubo un error. Por favor intenta de nuevo.
                </p>
              )}

              {/* Mensaje de Pricing Actualizado */}
              <div className="text-center pt-2">
                <p className="text-base sm:text-lg font-bold text-[#082E72]">
                  YAPPA es gratis el primer mes
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Puedes cancelarlo cuando tú quieras. Ganamos cuando tu negocio crece.
                </p>
              </div>
            </form>

            {/* Benefits - Mobile grid 2x2 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              {beneficios.map((beneficio, index) => {
                const IconComponent = beneficio.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-1.5">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#00D2FF]" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#082E72]">{beneficio.text}</p>
                    <p className="text-xs text-gray-500">{beneficio.subtext}</p>
                  </div>
                );
              })}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Descargar en App Store"
              >
                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 min-w-[160px]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Disponible en</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Descargar en Google Play"
              >
                <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 min-w-[160px]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Disponible en</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
