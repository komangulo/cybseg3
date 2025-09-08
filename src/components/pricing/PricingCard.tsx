
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: Feature[];
  popular: boolean;
  onSelect: () => void;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  popular,
  onSelect
}: PricingCardProps) => {
  return (
    <Card className={`service-card relative ${popular ? 'border-purple-500/50 shadow-[0_0_20px_rgba(155,135,245,0.2)]' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-cyber-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-white">{name}</h3>
      <p className="text-gray-400 text-sm mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            {feature.included ? (
              <Check className="h-5 w-5 text-cyber-purple" />
            ) : (
              <X className="h-5 w-5 text-gray-500" />
            )}
            <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={popular ? "cyber-btn w-full" : "bg-cyber-card-bg border border-purple-900/50 text-white hover:bg-purple-900/20 w-full"}
        onClick={onSelect}
      >
        CONTACTAR AHORA
      </Button>
    </Card>
  );
};

export default PricingCard;
