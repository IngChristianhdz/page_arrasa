import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection('inicio')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://019b14bc-ac23-7d40-a29b-e0bd77503eff.mochausercontent.com/Imagen-de-WhatsApp-2025-12-11-a-las-20.02.47_d038f731.jpg" 
              alt="Grupo Arrasa Logo" 
              className="h-12 w-auto"
            />
          </button>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('certificaciones')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              Certificaciones
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
              Contacto
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sky-50 rounded">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sky-50 rounded">
              Servicios
            </button>
            <button onClick={() => scrollToSection('certificaciones')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sky-50 rounded">
              Certificaciones
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sky-50 rounded">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 rounded">
              Contacto
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
