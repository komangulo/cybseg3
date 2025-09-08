
import { Shield } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-cyber-bg flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Shield className="h-8 w-8 text-cyber-purple" />
            <h1 className="text-3xl font-bold text-white">Política de Privacidad</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400">
              En CybSeg, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Recopilación de Información</h2>
            <p className="text-gray-400">
              Recopilamos información que usted nos proporciona directamente cuando utiliza nuestros servicios, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
              <li>Información de la empresa</li>
              <li>Datos de uso del servicio</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Uso de la Información</h2>
            <p className="text-gray-400">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Mejorar la experiencia del usuario</li>
              <li>Enviar información importante sobre nuestros servicios</li>
              <li>Responder a sus consultas y solicitudes</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
