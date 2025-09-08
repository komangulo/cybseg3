
import { Shield } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cyber-bg-dark to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1">
            <Shield className="mr-2 h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">NUESTROS TESTIMONIOS</span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">Lo Que Dicen</span>{" "}
          <span className="cyber-gradient-text">Nuestros Clientes</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card bg-cyber-bg-darker border-purple-900/20 p-8 relative">
            <div className="text-purple-500 text-5xl absolute right-8 top-6 opacity-50">"</div>
            <p className="text-gray-300 mb-8 relative z-10">
              Los servicios de ciberseguridad que ofrecen han transformado nuestra seguridad digital. 
              Sus soluciones de ciberseguridad son excepcionales, con un equipo que comprende 
              perfectamente las necesidades de protección de datos empresariales.
            </p>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 border-2 border-purple-500/30">
                <AvatarImage src="/lovable-uploads/00a28473-4023-4162-b7c5-32abbc060d16.png" alt="Juan Martínez" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-bold text-white">Juan Martínez</p>
                <p className="text-sm text-gray-400">Tecnologías Empresa</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-purple-500">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="cyber-card bg-cyber-bg-darker border-purple-900/20 p-8 relative">
            <div className="text-purple-500 text-5xl absolute right-8 top-6 opacity-50">"</div>
            <p className="text-gray-300 mb-8 relative z-10">
              Las soluciones de ciberseguridad implementadas superaron nuestras expectativas. 
              Los servicios de ciberseguridad son completos y personalizados, ofreciendo 
              una protección integral contra amenazas digitales avanzadas.
            </p>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 border-2 border-purple-500/30">
                <AvatarImage src="/lovable-uploads/00a28473-4023-4162-b7c5-32abbc060d16.png" alt="Beatriz González" />
                <AvatarFallback>BG</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-bold text-white">Beatriz González</p>
                <p className="text-sm text-gray-400">Tecnologías Empresa</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-purple-500">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="cyber-card bg-cyber-bg-darker border-purple-900/20 p-8 relative">
            <div className="text-purple-500 text-5xl absolute right-8 top-6 opacity-50">"</div>
            <p className="text-gray-300 mb-8 relative z-10">
              La implementación de sus servicios de ciberseguridad ha sido un punto de 
              inflexión para nuestra empresa. Sus soluciones de ciberseguridad no solo 
              protegen, sino que también optimizan nuestros procesos de seguridad.
            </p>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 border-2 border-purple-500/30">
                <AvatarImage src="/lovable-uploads/00a28473-4023-4162-b7c5-32abbc060d16.png" alt="Cristina Rodríguez" />
                <AvatarFallback>CR</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-bold text-white">Cristina Rodríguez</p>
                <p className="text-sm text-gray-400">Tecnologías Empresa</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-purple-500">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
