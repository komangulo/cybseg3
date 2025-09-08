import { Shield } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-cyber-bg flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Shield className="h-8 w-8 text-cyber-purple" />
            <h1 className="text-3xl font-bold text-white">Términos y Condiciones</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400">
              Al utilizar los servicios de CybSeg, usted acepta estos términos y condiciones en su totalidad. Por favor, lea detenidamente este documento.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-400">
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones, todas las leyes y regulaciones aplicables.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Uso del Servicio</h2>
            <p className="text-gray-400">
              Nuestros servicios están destinados únicamente para uso legal. Usted se compromete a no utilizar nuestros servicios para:
            </p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Violar leyes o regulaciones</li>
              <li>Infringir derechos de propiedad intelectual</li>
              <li>Transmitir material dañino o malicioso</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
