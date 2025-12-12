import { Shield, CheckCircle2, TrendingUp, Award } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-800">Más de 20 años de experiencia</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Líderes en
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Control Integral de Plagas
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Empresa mexicana especializada en Manejo Integral de Plagas (MIP) para sectores industrial, comercial, agrícola y doméstico. Soluciones profesionales con la más alta calidad y certificación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Solicitar Cotización
              </button>
              <button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all">
                Ver Servicios
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="flex items-center space-x-2 text-emerald-600 mb-1">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-2xl font-bold">20+</span>
                </div>
                <p className="text-sm text-gray-600">Años de experiencia</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-emerald-600 mb-1">
                  <Shield className="w-5 h-5" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-sm text-gray-600">Certificados</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-emerald-600 mb-1">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-2xl font-bold">#1</span>
                </div>
                <p className="text-sm text-gray-600">En el Bajío</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" 
                alt="Profesional de control de plagas" 
                className="rounded-2xl w-full h-96 object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Garantía de</p>
                    <p className="text-lg font-bold text-gray-900">Calidad Total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
