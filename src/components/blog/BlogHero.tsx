import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BlogHeroProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const BlogHero = ({ searchTerm, onSearchChange }: BlogHeroProps) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-cyber-bg-dark via-cyber-bg-darker to-cyber-bg-dark">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="cyber-gradient-text">Blog de Ciberseguridad</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Mantente al día con las últimas tendencias en ciberseguridad, protección de datos, 
            y mejores prácticas para proteger tu empresa de ciberataques modernos.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar artículos de ciberseguridad..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 h-12 bg-card/50 border-primary/20 focus:border-primary"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["ciberseguridad", "phishing", "ransomware", "firewall", "pentesting"].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                onClick={() => onSearchChange(tag)}
                className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;