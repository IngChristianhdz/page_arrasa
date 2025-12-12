import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para atender sus necesidades. Solicite una cotización o consulta sin compromiso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Teléfono</h3>
                  <p className="text-gray-600 mb-2">Llámanos para una atención inmediata</p>
                  <a href="tel:+524611234567" className="text-emerald-600 font-semibold text-lg hover:text-emerald-700">
                    +52 (461) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Correo Electrónico</h3>
                  <p className="text-gray-600 mb-2">Envíanos un mensaje</p>
                  <a href="mailto:contacto@grupoarrasa.com" className="text-emerald-600 font-semibold hover:text-emerald-700">
                    contacto@grupoarrasa.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ubicación</h3>
                  <p className="text-gray-600 mb-2">Región del Bajío</p>
                  <p className="text-emerald-600 font-semibold">
                    Guanajuato, México
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Horario de Atención</h3>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicitar Cotización
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="(461) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Servicio
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all">
                  <option>Seleccione un servicio</option>
                  <option>Control de Artrópodos</option>
                  <option>Control de Roedores</option>
                  <option>Control de Fauna Silvestre</option>
                  <option>Sanitización Patógena</option>
                  <option>Tratamientos Fitosanitarios</option>
                  <option>Solución Personalizada</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
                  placeholder="Cuéntenos sobre su necesidad..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <span>Enviar Solicitud</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
