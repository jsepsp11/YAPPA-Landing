import { Mail, Smartphone, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#082E72] text-white py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Mobile: 2 columnas, Desktop: 4 columnas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Branding */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-black text-[#00D2FF] mb-2 sm:mb-4">YAPPA</h3>
            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
              Digitalizando negocios en Ecuador
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
            <ul className="space-y-1.5 sm:space-y-3 text-blue-200 text-xs sm:text-sm">
              <li>
                <a href="#sobre-yappa" className="hover:text-[#00D2FF] transition-colors">
                  Sobre YAPPA
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00D2FF] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00D2FF] transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-bold mb-2 sm:mb-4 text-sm sm:text-base">Producto</h4>
            <ul className="space-y-1.5 sm:space-y-3 text-blue-200 text-xs sm:text-sm">
              <li>
                <a href="#funcionalidades" className="hover:text-[#00D2FF] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#for-stores" className="hover:text-[#00D2FF] transition-colors">
                  Registrar negocio
                </a>
              </li>
              <li>
                <a href="#preguntas-frecuentes" className="hover:text-[#00D2FF] transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto - Solo desktop */}
          <div className="hidden md:block">
            <h4 className="font-bold mb-4 text-base">¿Tienes dudas?</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:correo@yappa.com" className="hover:text-[#00D2FF] transition-colors">
                  correo@yappa.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Smartphone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/593999999999" className="hover:text-[#00D2FF] transition-colors">
                  +593 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 pt-6 sm:pt-8 text-center text-blue-200 text-xs sm:text-sm">
          <p className="mb-1 sm:mb-2">© 2025 YAPPA. Todos los derechos reservados.</p>
          <p className="font-medium">
            Hecha en Ecuador
          </p>
        </div>
      </div>
    </footer>
  );
}
