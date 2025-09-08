
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-900/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyber-purple" />
            <span className="text-xl font-bold">
              <span className="text-white">CybSeg</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyber-purple transition-colors">Inicio</Link>
            <Link to="/about" className="text-white hover:text-cyber-purple transition-colors">Nosotros</Link>
            <Link to="/services" className="text-white hover:text-cyber-purple transition-colors">Servicios</Link>
            <Link to="/blog" className="text-white hover:text-cyber-purple transition-colors">Blog</Link>
            <Link to="/pricing" className="text-white hover:text-cyber-purple transition-colors">Precios</Link>
            <Link to="/contact" className="text-white hover:text-cyber-purple transition-colors">Contacto</Link>
          </nav>
          
          <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white" asChild>
            <Link to="/pricing">
              Comenzar
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
