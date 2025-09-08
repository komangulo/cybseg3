
import { Shield } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const WorkPolicy = () => {
  return (
    <div className="min-h-screen bg-cyber-bg flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Shield className="h-8 w-8 text-cyber-purple" />
            <h1 className="text-3xl font-bold text-white">Política de Trabajo</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400">
              En CybSeg, nos esforzamos por mantener un ambiente de trabajo positivo y productivo. Esta política establece nuestras prácticas y expectativas laborales.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cultura Laboral</h2>
            <p className="text-gray-400">
              Fomentamos una cultura de:
            </p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Innovación y creatividad</li>
              <li>Respeto mutuo y colaboración</li>
              <li>Aprendizaje continuo</li>
              <li>Balance trabajo-vida personal</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Desarrollo Profesional</h2>
            <p className="text-gray-400">
              Apoyamos el crecimiento profesional de nuestros empleados mediante:
            </p>
            <ul className="list-disc pl-6 text-gray-400">
              <li>Programas de capacitación</li>
              <li>Mentoría</li>
              <li>Oportunidades de promoción interna</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPolicy;
