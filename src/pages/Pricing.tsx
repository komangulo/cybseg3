
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/home/PricingSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/69930066-f606-40e7-ae57-4e2441adab50.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg-dark/80 to-cyber-bg-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Precios</h1>
            <p className="text-gray-400">Soluciones de ciberseguridad asequibles para empresas de todos los tamaños</p>
          </div>
        </div>
      </div>
      
      <PricingSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-white">Preguntas</span>{" "}
              <span className="cyber-gradient-text">Frecuentes</span>
            </h2>
            
            <div className="space-y-6">
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-3 text-white">¿Qué incluye el paquete básico?</h3>
                <p className="text-gray-400">
                  Nuestro paquete básico incluye servicio de soporte 24/7, transacciones encriptadas y hardware gratuito. Está diseñado para proporcionar medidas de seguridad esenciales para pequeñas empresas y startups.
                </p>
              </div>
              
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-3 text-white">¿Con qué frecuencia se actualiza la base de datos de amenazas?</h3>
                <p className="text-gray-400">
                  Nuestra base de datos de inteligencia de amenazas se actualiza en tiempo real, con importantes actualizaciones del sistema implementadas cada 24 horas para garantizar que esté protegido contra las últimas amenazas de ciberseguridad.
                </p>
              </div>
              
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-3 text-white">¿Puedo actualizar mi plan más adelante?</h3>
                <p className="text-gray-400">
                  Sí, puede actualizar fácilmente su plan en cualquier momento a medida que su negocio crece o sus necesidades de seguridad cambian. La transición es fluida y sin tiempo de inactividad.
                </p>
              </div>
              
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-3 text-white">¿Ofrecen soluciones de seguridad personalizadas?</h3>
                <p className="text-gray-400">
                  ¡Absolutamente! Entendemos que cada negocio tiene requisitos de seguridad únicos. Contáctenos para discutir soluciones de seguridad personalizadas adaptadas a sus necesidades específicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
