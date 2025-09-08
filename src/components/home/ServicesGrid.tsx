import { ArrowUpRight, Network, ShieldAlert, Monitor, Server } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Análisis de Red",
      description: "Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec",
      icon: Network,
      number: "01",
      iconBg: "bg-purple-500/20",
    },
    {
      id: 2,
      title: "Inteligencia de Amenazas",
      description: "Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec",
      icon: ShieldAlert,
      number: "02",
      iconBg: "bg-purple-500/20",
    },
    {
      id: 3,
      title: "Seguridad de Endpoints",
      description: "Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec",
      icon: Monitor,
      number: "03",
      iconBg: "bg-purple-500/20",
    },
    {
      id: 4,
      title: "Seguridad de Red",
      description: "Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec",
      icon: Server,
      number: "04",
      iconBg: "bg-purple-500/20",
    }
  ];

  return (
    <section className="py-24 bg-cyber-bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="md:w-1/3 space-y-6">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1">
              <ShieldAlert className="mr-2 h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">NUESTROS SERVICIOS</span>
            </div>
            
            <h2 className="text-4xl font-bold">
              <span className="text-white">Servicios de</span><br />
              <span className="cyber-gradient-text">Ciber Seguridad Para Ti</span>
            </h2>
            
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            
            <Link to="/services" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors">
              Ver Más <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 bg-cyber-card-bg border border-purple-900/30 rounded-lg p-4">
              <div>
                <h3 className="text-white text-lg font-semibold">Detección en Tiempo Real</h3>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-black/40 border border-purple-900/10 rounded-lg p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex justify-between mb-6">
                  <div className={`${service.iconBg} p-3 rounded-full`}>
                    <service.icon className="h-6 w-6 text-purple-500" />
                  </div>
                  <span className="text-purple-700 text-2xl font-bold">{service.number}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <Link to={`/services`} className="inline-flex items-center text-purple-500 hover:text-purple-400 group">
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
