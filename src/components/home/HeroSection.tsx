import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, ShieldCheck, ShieldAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const parentWidth = iframeRef.current.parentElement?.offsetWidth || window.innerWidth;
        const parentHeight = iframeRef.current.parentElement?.offsetHeight || window.innerHeight;
        iframeRef.current.style.width = `${parentWidth}px`;
        iframeRef.current.style.height = `${parentHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <iframe 
          ref={iframeRef}
          src="https://www.youtube.com/embed/Z4F3AXvrLKo?autoplay=1&mute=1&loop=1&playlist=Z4F3AXvrLKo&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&vq=hd1080"
          className="absolute w-full h-full object-cover left-0 top-0"
          style={{ transform: "scale(1.5)" }}
          title="Video de Fondo de Ciberseguridad"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 mb-8">
            <Shield className="mr-2 h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">BIENVENIDO A CYBSEG</span>
          </div>
          
          <div className="w-full text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Servicios de Ciberseguridad Para Tus</span>
              <br />
              <span className="cyber-gradient-text">Amenazas Modernas</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Soluciones de ciberseguridad de vanguardia para proteger tu negocio de amenazas y vulnerabilidades digitales en evolución.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="cyber-btn py-6 px-8" asChild>
                <Link to="/pricing">
                  Comenzar <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-purple-600 text-white hover:bg-purple-900/20 py-6 px-8" asChild>
                <Link to="/contact">
                  Más Información
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 mt-12 ml-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-500 rounded-full p-2">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-medium">Protección Comprobada</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              <img src="/lovable-uploads/2e25e9e6-2c07-401a-86c9-08d0baa40e5d.png" alt="Cliente 1" className="w-10 h-10 rounded-full border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center border-2 border-white text-white font-bold">+</div>
            </div>
            <span className="text-gray-400 text-sm">Cliente activo con opiniones positivas</span>
          </div>
        </div>
        
        <div className="mt-16 flex justify-between items-center flex-wrap gap-6">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-cyber-purple" />
            <span className="text-white">Seguridad Confiable</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-6 w-6 text-cyber-purple" />
            <span className="text-white">100% Seguro</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-cyber-purple" />
            <span className="text-white">Soporte 24/7</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldAlert className="h-6 w-6 text-cyber-purple" />
            <span className="text-white">Inteligencia de Amenazas</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-cyber-purple" />
            <span className="text-white">Listo para Empresas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
