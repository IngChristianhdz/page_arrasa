import { Building2, Users, MapPin, TrendingUp, Shield, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-800">Sobre Nosotros</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Más de 20 Años de Excelencia
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Somos <span className="font-bold text-emerald-700">GRUPO ARRASA</span>, una empresa mexicana 
              con más de 20 años de experiencia especializada en Manejo Integral de Plagas (MIP). 
              Nos hemos posicionado como líderes en el Bajío gracias a nuestro compromiso con la 
              excelencia y la innovación constante.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ofrecemos soluciones personalizadas orientadas a la <span className="font-semibold">prevención, 
              corrección y eliminación definitiva de plagas</span>, garantizando la seguridad de 
              nuestros clientes y el mínimo impacto ambiental.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                <p className="text-emerald-800 font-semibold">Empresa Mexicana</p>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                <p className="text-emerald-800 font-semibold">20+ Años</p>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                <p className="text-emerald-800 font-semibold">Líderes en el Bajío</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop" 
              alt="Equipo profesional" 
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Personal Especializado
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contamos con un equipo altamente capacitado y certificado, comprometido con la 
              excelencia en cada servicio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Tecnología de Vanguardia
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos equipamiento de última generación y productos de 2°, 3° y 4° generación 
              para máxima efectividad.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Cobertura Regional
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Líderes en el Bajío con capacidad de atención en toda la región y cobertura nacional.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative text-center">
            <Star className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nuestro Compromiso
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nos comprometemos a ofrecer soluciones integrales de control de plagas con los más altos 
              estándares de calidad, seguridad y responsabilidad ambiental. Su tranquilidad es nuestra misión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
