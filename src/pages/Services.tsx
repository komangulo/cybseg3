
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/home/ServicesSection";
import ContactCTA from "@/components/home/ContactCTA";
import { ArrowUpRight, Network, ShieldAlert, Database, Server, Monitor, Lock, Shield, Bug, Search, AlertTriangle, Eye, BarChart, MessageCircle } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/69930066-f606-40e7-ae57-4e2441adab50.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg-dark/80 to-cyber-bg-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Servicios de Ciberseguridad y Soluciones de Protección Digital</h1>
            <p className="text-xl text-cyber-purple mb-8">Protección integral para su negocio en el entorno digital actual</p>
          </div>
        </div>
      </div>
      
      <ServicesSection />
      
      <section className="py-16 bg-cyber-bg-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">¿Qué son los servicios de ciberseguridad?</h2>
              <div className="space-y-6">
                <div className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                  <h3 className="text-xl font-semibold text-white mb-3">Soluciones de ciberseguridad adaptadas a empresas</h3>
                  <p className="text-gray-400">Ofrecemos soluciones personalizadas que se adaptan a las necesidades específicas de su organización, garantizando la protección de sus activos más valiosos.</p>
                </div>
                <div className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                  <h3 className="text-xl font-semibold text-white mb-3">Importancia de la ciberseguridad en el entorno actual</h3>
                  <p className="text-gray-400">En un mundo cada vez más digitalizado, la ciberseguridad se ha convertido en un pilar fundamental para la continuidad y éxito de cualquier negocio.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-cyber-purple text-center">Nuestras soluciones de ciberseguridad</h2>
            
            <div className="space-y-12">
              {/* Pentesting y pruebas de intrusión */}
              <div className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                <div className="flex items-center mb-4">
                  <Bug className="h-6 w-6 text-cyber-purple mr-2" />
                  <h3 className="text-2xl font-bold text-white">Pentesting y pruebas de intrusión</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Pentest internos y externos</h4>
                    <p className="text-gray-400 text-sm">Identificación de vulnerabilidades en sus sistemas internos y externos.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Simulaciones de Red Team</h4>
                    <p className="text-gray-400 text-sm">Pruebas de seguridad ofensiva que simulan ataques reales.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Seguridad WiFi y redes inalámbricas</h4>
                    <p className="text-gray-400 text-sm">Protección de sus redes inalámbricas contra accesos no autorizados.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Ingeniería social y pruebas humanas</h4>
                    <p className="text-gray-400 text-sm">Evaluación de la concienciación de sus empleados en seguridad.</p>
                  </div>
                </div>
              </div>

              {/* Auditorías de seguridad */}
              <div className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-cyber-purple mr-2" />
                  <h3 className="text-2xl font-bold text-white">Auditorías de seguridad</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Auditoría de aplicaciones web y móviles</h4>
                    <p className="text-gray-400 text-sm">Análisis exhaustivo de la seguridad de sus aplicaciones.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Seguridad en entornos financieros y bancarios</h4>
                    <p className="text-gray-400 text-sm">Protección especializada para el sector financiero.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Seguridad en la nube e infraestructuras críticas</h4>
                    <p className="text-gray-400 text-sm">Protección de sus activos en la nube y sistemas críticos.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Auditoría de código y revisión de sistemas</h4>
                    <p className="text-gray-400 text-sm">Análisis detallado del código fuente en busca de vulnerabilidades.</p>
                  </div>
                </div>
              </div>

              {/* Gestión de vulnerabilidades */}
              <div className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-cyber-purple mr-2" />
                  <h3 className="text-2xl font-bold text-white">Gestión de vulnerabilidades y reducción de riesgos</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Monitorización continua de amenazas</h4>
                    <p className="text-gray-400 text-sm">Detección proactiva de amenazas en tiempo real.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Análisis de riesgos dinámicos de ciberseguridad</h4>
                    <p className="text-gray-400 text-sm">Evaluación continua de los riesgos de seguridad.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Programas de Bug Bounty</h4>
                    <p className="text-gray-400 text-sm">Incentivos para investigadores que encuentren vulnerabilidades.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Simulación de ataques de denegación de servicio (DoS)</h4>
                    <p className="text-gray-400 text-sm">Pruebas de resistencia contra ataques DDoS.</p>
                  </div>
                </div>
              </div>

              {/* Detección y respuesta a incidentes */}
              <div className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-cyber-purple mr-2" />
                  <h3 className="text-2xl font-bold text-white">Detección y respuesta a incidentes</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Threat Hunting y servicios MDR</h4>
                    <p className="text-gray-400 text-sm">Búsqueda proactiva de amenazas en su red.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Respuesta a incidentes críticos</h4>
                    <p className="text-gray-400 text-sm">Actuación inmediata ante brechas de seguridad.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Forensia digital y análisis de fraude</h4>
                    <p className="text-gray-400 text-sm">Investigación de incidentes de seguridad.</p>
                  </div>
                </div>
              </div>

              {/* Servicios de ciberinteligencia */}
              <div className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                <div className="flex items-center mb-4">
                  <BarChart className="h-6 w-6 text-cyber-purple mr-2" />
                  <h3 className="text-2xl font-bold text-white">Servicios de ciberinteligencia</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Vigilancia digital y análisis de datos</h4>
                    <p className="text-gray-400 text-sm">Monitoreo de amenazas en la web profunda.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Threat Intelligence en tiempo real</h4>
                    <p className="text-gray-400 text-sm">Información actualizada sobre amenazas emergentes.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Ciberinteligencia estratégica</h4>
                    <p className="text-gray-400 text-sm">Análisis de amenazas para la toma de decisiones.</p>
                  </div>
                  <div className="bg-cyber-bg-darker p-4 rounded">
                    <h4 className="font-semibold text-white mb-2">Formación en ciberseguridad para empresas</h4>
                    <p className="text-gray-400 text-sm">Capacitación especializada para su equipo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preguntas frecuentes */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-cyber-purple text-center">Preguntas frecuentes sobre servicios de ciberseguridad</h2>
              <div className="space-y-4">
                {[
                  "¿Qué servicios de ciberseguridad necesita una empresa?",
                  "¿Cuáles son las principales amenazas actuales?",
                  "¿Qué soluciones de ciberseguridad existen en el mercado?",
                  "¿Cómo elegir el servicio adecuado para mi negocio?"
                ].map((question, index) => (
                  <div key={index} className="bg-cyber-bg p-4 rounded-lg border border-cyber-border">
                    <h3 className="font-semibold text-white">{question}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Planes de servicio */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4 text-cyber-purple">Soluciones de ciberseguridad a medida para tu empresa</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: "Planes de protección según el tamaño de tu negocio", description: "Soluciones escalables que crecen con su empresa." },
                  { title: "Paquete Básico, Premium y Deluxe", description: "Diferentes niveles de protección para cada necesidad." },
                  { title: "Implementación rápida y soporte especializado", description: "Despliegue ágil con asistencia de expertos." }
                ].map((item, index) => (
                  <div key={index} className="bg-cyber-bg p-6 rounded-lg border border-cyber-border">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div className="mt-16 text-center bg-cyber-bg p-8 rounded-lg border border-cyber-border">
              <h2 className="text-3xl font-bold mb-6 text-cyber-purple">Contacto y asesoría en ciberseguridad</h2>
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="bg-cyber-bg-darker p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Habla con nuestro equipo experto</h3>
                  <p className="text-gray-400 mb-4">Nuestros especialistas están listos para responder a sus preguntas.</p>
                  <button className="bg-cyber-purple hover:bg-cyber-purple/90 text-white px-6 py-2 rounded-md transition-colors">Contactar Ahora</button>
                </div>
                <div className="bg-cyber-bg-darker p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Solicita una auditoría de seguridad gratuita</h3>
                  <p className="text-gray-400 mb-4">Descubra las vulnerabilidades de sus sistemas sin compromiso.</p>
                  <button className="bg-cyber-purple hover:bg-cyber-purple/90 text-white px-6 py-2 rounded-md transition-colors">Solicitar Auditoría</button>
                </div>
              </div>
              <p className="mt-8 text-gray-400">Protege tu empresa con soluciones de ciberseguridad efectivas</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Services;
