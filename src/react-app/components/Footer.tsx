import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="https://019b14bc-ac23-7d40-a29b-e0bd77503eff.mochausercontent.com/Imagen-de-WhatsApp-2025-12-11-a-las-20.02.47_d038f731.jpg" 
                alt="Grupo Arrasa Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empresa mexicana con más de 20 años de experiencia especializada en Manejo Integral 
              de Plagas. Líderes en el Bajío con certificaciones internacionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-sky-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-sky-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-sky-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contacto@grupoarrasa.com" className="bg-gray-800 p-2 rounded-lg hover:bg-sky-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-sky-400 transition-colors">Control de Artrópodos</a></li>
              <li><a href="#servicios" className="hover:text-sky-400 transition-colors">Control de Roedores</a></li>
              <li><a href="#servicios" className="hover:text-sky-400 transition-colors">Fauna Silvestre</a></li>
              <li><a href="#servicios" className="hover:text-sky-400 transition-colors">Sanitización</a></li>
              <li><a href="#servicios" className="hover:text-sky-400 transition-colors">Fitosanitarios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#nosotros" className="hover:text-sky-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#certificaciones" className="hover:text-sky-400 transition-colors">Certificaciones</a></li>
              <li><a href="#contacto" className="hover:text-sky-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Aviso de Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Grupo Arrasa. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Manejo Integral de Plagas | Certificaciones AIB, SQF, ISO, TIF
          </p>
        </div>
      </div>
    </footer>
  );
}
