
import { useState } from "react";
import PricingCard from "../pricing/PricingCard";
import ContactFormDialog from "../pricing/ContactFormDialog";

const pricingPlans = [
  {
    id: 1,
    name: "Paquete Básico",
    price: "900€",
    description: "Perfecto para pequeñas empresas que inician su viaje de ciberseguridad",
    features: [
      { name: "Servicio de soporte 24/7", included: true },
      { name: "Transacciones encriptadas", included: true },
      { name: "Hardware gratuito incluido", included: true },
      { name: "Copia de seguridad diaria automatizada", included: false },
      { name: "Sesión de compromiso incluida", included: false }
    ],
    popular: false
  },
  {
    id: 2,
    name: "Paquete Premium",
    price: "1200€",
    description: "Ideal para empresas en crecimiento con mayores necesidades de seguridad",
    features: [
      { name: "Servicio de soporte 24/7", included: true },
      { name: "Transacciones encriptadas", included: true },
      { name: "Hardware gratuito incluido", included: true },
      { name: "Copia de seguridad diaria automatizada", included: false },
      { name: "Sesión de compromiso incluida", included: false }
    ],
    popular: true
  },
  {
    id: 3,
    name: "Paquete Deluxe",
    price: "1800€",
    description: "Protección integral para empresas establecidas",
    features: [
      { name: "Servicio de soporte 24/7", included: true },
      { name: "Transacciones encriptadas", included: true },
      { name: "Hardware gratuito incluido", included: true },
      { name: "Copia de seguridad diaria automatizada", included: true },
      { name: "Sesión de compromiso incluida", included: true }
    ],
    popular: false
  }
];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  return (
    <section className="py-20 relative overflow-hidden bg-cyber-bg-darker">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5b087b4a-0bb7-4717-ab93-d3d6f941476a.png')] opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="cyber-gradient-text">Elija El Plan Adecuado Para</span><br />
            <span className="text-white">Su Empresa</span>
          </h2>
          <p className="text-gray-400">
            Seleccione el paquete de ciberseguridad perfecto adaptado a las necesidades y presupuesto de su organización.
            Todos los planes incluyen nuestras funciones básicas de protección.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          ))}
        </div>
      </div>

      <ContactFormDialog
        open={!!selectedPlan}
        onOpenChange={(open) => !open && setSelectedPlan(null)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PricingSection;
