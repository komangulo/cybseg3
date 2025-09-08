import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Progress } from "@/components/ui/progress";
import { Shield, ShieldCheck, ShieldAlert, Shield as ShieldIcon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/69930066-f606-40e7-ae57-4e2441adab50.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg-dark/80 to-cyber-bg-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-gray-400">Conozca más sobre nuestra misión y experiencia en ciberseguridad</p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-white">Expertos en</span><br />
                <span className="cyber-gradient-text">Ciberseguridad Integral</span>
              </h2>
              
              <p className="text-gray-400 mb-8">
                CybSeg es una empresa líder en soluciones de ciberseguridad, dedicada a proteger a organizaciones 
                de todos los tamaños contra las amenazas digitales más sofisticadas. Con una sólida experiencia 
                avalada por los años, nuestro equipo de expertos utiliza tecnología de vanguardia y estrategias 
                proactivas para salvaguardar la integridad de sus sistemas y datos.
              </p>
              
              <div className="space-y-5 mb-8">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Protección en Tiempo Real</span>
                    <span className="text-cyber-purple">98%</span>
                  </div>
                  <Progress value={98} className="h-2 bg-gray-800" indicatorClassName="bg-gradient-to-r from-purple-500 to-purple-700" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Proteja Su Privacidad</span>
                    <span className="text-cyber-purple">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-800" indicatorClassName="bg-gradient-to-r from-purple-500 to-purple-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-cyber-bg-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">Por Qué Elegirnos</span>{" "}
              <span className="cyber-gradient-text">A Nosotros</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Ofrecemos servicios excepcionales de ciberseguridad con un enfoque en innovación, confiabilidad y satisfacción del cliente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-900/30 p-4 rounded-full">
                  <Shield className="h-8 w-8 text-cyber-purple" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Protección Avanzada</h3>
              <p className="text-gray-400">
                Soluciones de seguridad de vanguardia para proteger contra las últimas amenazas cibernéticas.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-900/30 p-4 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-cyber-purple" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Monitoreo 24/7</h3>
              <p className="text-gray-400">
                Vigilancia continua para detectar y responder a incidentes de seguridad en tiempo real.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-900/30 p-4 rounded-full">
                  <ShieldAlert className="h-8 w-8 text-cyber-purple" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Inteligencia de Amenazas</h3>
              <p className="text-gray-400">
                Identificación proactiva de amenazas emergentes específicas para su industria.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-900/30 p-4 rounded-full">
                  <ShieldIcon className="h-8 w-8 text-cyber-purple" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Consulta de Expertos</h3>
              <p className="text-gray-400">
                Estrategias de seguridad personalizadas desarrolladas por profesionales de la industria.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
