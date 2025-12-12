import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    name: 'AIB',
    description: 'American Institute of Baking',
    category: 'Inocuidad Alimentaria'
  },
  {
    name: 'SQF',
    description: 'Safe Quality Food',
    category: 'Seguridad Alimentaria'
  },
  {
    name: 'Distintivo H',
    description: 'Higiene en Alimentos',
    category: 'Turismo y Hospitalidad'
  },
  {
    name: 'ISO',
    description: 'Sistemas de Gestión',
    category: 'Calidad Internacional'
  },
  {
    name: 'TIF',
    description: 'Tipo Inspección Federal',
    category: 'Productos Cárnicos'
  },
  {
    name: 'Inocuidad',
    description: 'Estándares Sanitarios',
    category: 'Seguridad Alimentaria'
  }
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <span className="text-sm font-semibold text-emerald-800">Certificaciones y Acreditaciones</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Respaldo Técnico Certificado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestras acreditaciones y competencias técnicas están alineadas con los más altos estándares 
            internacionales de la industria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {cert.description}
                  </p>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">
                    {cert.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <FileCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Proceso MIP Certificado
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Inspección y diagnóstico técnico especializado</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Identificación precisa de especies y nivel de infestación</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Plan de acción personalizado y estratégico</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Aplicación de tratamientos con productos de vanguardia</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Monitoreo continuo y seguimiento preventivo</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 rounded-2xl shadow-lg text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                Garantía de Calidad
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Personal altamente capacitado y certificado</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Equipamiento de última generación</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Productos de 2°, 3° y 4° generación</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Seguridad y eficiencia garantizadas</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Mínimo impacto ambiental</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
