
import { ArrowUpRight, Network, ShieldAlert, Database, Server, Monitor, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Análisis de Red",
    description: "Inspección completa de su infraestructura de red para identificar posibles brechas de seguridad y vulnerabilidades.",
    icon: Network,
    number: "01"
  },
  {
    id: 2,
    title: "Inteligencia de Amenazas",
    description: "Monitoreo y análisis en tiempo real de amenazas potenciales dirigidas a su industria y organización.",
    icon: ShieldAlert,
    number: "02"
  },
  {
    id: 3,
    title: "Seguridad de Endpoints",
    description: "Protección para todos los dispositivos conectados a su red con detección y respuesta avanzada de amenazas.",
    icon: Monitor,
    number: "03"
  },
  {
    id: 4,
    title: "Seguridad de Red",
    description: "Medidas de seguridad robustas para proteger su infraestructura de red de accesos y ataques no autorizados.",
    icon: Server,
    number: "04"
  },
  {
    id: 5,
    title: "Protección de Datos",
    description: "Soluciones integrales de seguridad de datos para salvaguardar su información sensible y mantener el cumplimiento.",
    icon: Database,
    number: "05"
  },
  {
    id: 6,
    title: "Protección de Identidad",
    description: "Autenticación avanzada y gestión de identidad para prevenir el acceso no autorizado a sistemas críticos.",
    icon: Lock,
    number: "06"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5b087b4a-0bb7-4717-ab93-d3d6f941476a.png')] opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="cyber-gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-gray-400">
            Soluciones integrales de ciberseguridad diseñadas para proteger su empresa de amenazas 
            en evolución y garantizar que sus activos digitales permanezcan seguros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="service-card group overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <service.icon className="h-6 w-6 text-cyber-purple" />
                </div>
                <span className="text-3xl font-bold text-purple-900/30">{service.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Button variant="ghost" className="p-0 text-cyber-purple hover:text-purple-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Saber Más <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
