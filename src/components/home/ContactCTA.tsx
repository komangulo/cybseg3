
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-cyber-bg-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5b087b4a-0bb7-4717-ab93-d3d6f941476a.png')] opacity-10 z-0"></div>
      
      {/* Animated glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">¿Protección Para</span>{" "}
            <span className="cyber-gradient-text">Usted?</span>
          </h2>
          
          <p className="text-gray-400 mb-8">
            ¿Listo para asegurar sus activos digitales con soluciones de ciberseguridad líderes en la industria?
            Póngase en contacto con nuestros expertos hoy mismo.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 bg-cyber-purple rounded-full"></span>
              <span className="text-white">Proteja Su Privacidad</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 bg-cyber-purple rounded-full"></span>
              <span className="text-white">Asegure Su Identidad</span>
            </div>
          </div>
          
          <Button className="cyber-btn py-6 px-8 mt-8" asChild>
            <Link to="/pricing">
              Comenzar <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
