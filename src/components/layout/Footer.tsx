
import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-bg-darker text-white pt-16 pb-6 border-t border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-cyber-purple" />
              <span className="text-xl font-bold">
                <span className="text-white">CybSeg</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Especialistas en protección de activos digitales con soluciones de ciberseguridad avanzadas para empresas y particulares.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-purple">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Ubicación</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-cyber-purple shrink-0 mt-1" />
                <p className="text-gray-400">Calle Gran Vía 28, 28013 Madrid, España</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-cyber-purple shrink-0 mt-1" />
                <p className="text-gray-400">cyber.incidents.exploits@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-cyber-purple shrink-0 mt-1" />
                <p className="text-gray-400">+34 910 123 456</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Útiles</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-cyber-purple">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-cyber-purple">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/work-policy" className="text-gray-400 hover:text-cyber-purple">Política de Trabajo</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Páginas Principales</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyber-purple">Nosotros</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-cyber-purple">Precios</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyber-purple">Servicios</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyber-purple">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>CybSeg 2025 © Copyright | Powered by Asha academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
