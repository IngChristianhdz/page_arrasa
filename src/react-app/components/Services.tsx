import { Bug, Rat, Bird, Droplet, Sprout, Target } from 'lucide-react';

const services = [
  {
    icon: Bug,
    title: 'Control de Artrópodos',
    description: 'Manejo profesional de insectos, arácnidos y otros artrópodos con tecnología de vanguardia y productos de última generación.',
    features: ['Cucarachas', 'Hormigas', 'Arañas', 'Moscas', 'Mosquitos']
  },
  {
    icon: Rat,
    title: 'Control de Roedores',
    description: 'Soluciones integrales para prevención y eliminación de roedores con métodos seguros y efectivos.',
    features: ['Ratas', 'Ratones', 'Monitoreo continuo', 'Prevención', 'Exclusión']
  },
  {
    icon: Bird,
    title: 'Control de Fauna Silvestre',
    description: 'Manejo responsable de fauna silvestre urbana con enfoque en prevención y exclusión humanitaria.',
    features: ['Aves', 'Murciélagos', 'Exclusión', 'Prevención', 'Control ético']
  },
  {
    icon: Droplet,
    title: 'Sanitización Patógena',
    description: 'Servicios de desinfección y sanitización contra bacterias, virus y hongos con protocolos certificados.',
    features: ['Desinfección', 'Virus y bacterias', 'Hongos', 'COVID-19', 'Áreas críticas']
  },
  {
    icon: Sprout,
    title: 'Tratamientos Fitosanitarios',
    description: 'Protección integral de cultivos y áreas verdes con productos especializados y técnicas agronómicas.',
    features: ['Cultivos', 'Jardines', 'Áreas verdes', 'Plagas agrícolas', 'Prevención']
  },
  {
    icon: Target,
    title: 'Soluciones Personalizadas',
    description: 'Programas de Manejo Integral de Plagas (MIP) diseñados específicamente para sus necesidades.',
    features: ['Diagnóstico', 'Plan personalizado', 'Monitoreo', 'Seguimiento', 'Reportes']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales de control de plagas para todos los sectores, 
            respaldadas por certificaciones internacionales y más de 20 años de experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Sectores que Atendemos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white font-semibold">Industrial</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white font-semibold">Comercial</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white font-semibold">Agrícola</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white font-semibold">Doméstico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
