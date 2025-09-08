
import { Card } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Marcos Sánchez",
    role: "Experto en Seguridad",
    image: "https://kits.scriptfusions.com/cyberalfa/wp-content/uploads/2025/03/New-Project-2025-03-09T115456.168-234x300.jpg"
  },
  {
    id: 2,
    name: "Fernando Rodríguez",
    role: "Analista de Red",
    image: "https://kits.scriptfusions.com/cyberalfa/wp-content/uploads/2025/03/New-Project-2025-03-09T111516.932-233x300.jpg"
  },
  {
    id: 3,
    name: "Daniel Torres",
    role: "Analista de Amenazas",
    image: "https://kits.scriptfusions.com/cyberalfa/wp-content/uploads/2025/02/New-Project-98-233x300.jpg"
  },
  {
    id: 4,
    name: "Sofia Gómez",
    role: "Gerente de Seguridad",
    image: "https://kits.scriptfusions.com/cyberalfa/wp-content/uploads/2025/02/New-Project-96-233x300.jpg"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Nuestro Equipo Experto Para</span><br />
            <span className="cyber-gradient-text">Tranquilidad en Cyber</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Conoce a nuestro equipo de profesionales de ciberseguridad dedicados a proteger 
            tu organización de amenazas digitales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="service-card overflow-hidden group">
              <div className="relative overflow-hidden h-[280px]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-cyber-purple">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="bg-cyber-card-bg p-2 rounded-full hover:bg-purple-900/50 transition-colors">
                    <Facebook className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="bg-cyber-card-bg p-2 rounded-full hover:bg-purple-900/50 transition-colors">
                    <Twitter className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="bg-cyber-card-bg p-2 rounded-full hover:bg-purple-900/50 transition-colors">
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
            Más Equipo <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
