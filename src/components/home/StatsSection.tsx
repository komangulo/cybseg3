import { useEffect, useState, useRef } from "react";
import { Headphones } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = ""
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observerRef.current?.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const startValue = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - startValue) + startValue);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);
  return <span ref={countRef} className="inline-flex items-center">
      <span>{count}</span>
      <span>{suffix}</span>
    </span>;
};
const StatsSection = () => {
  const stats = [{
    number: 91,
    suffix: "K+",
    label: "Proyectos Realizados"
  }, {
    number: 84,
    suffix: "K+",
    label: "Clientes Satisfechos"
  }, {
    number: 25,
    suffix: "+",
    label: "Años de Experiencia"
  }];
  return <section className="py-12 bg-cyber-bg-dark">
      <div className="container mx-auto px-4">
        <div className="border border-purple-900/20 rounded-xl bg-black/40 py-10">
          <div className="flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-purple-900/20">
            {stats.map((stat, index) => <div key={index} className="text-center py-6 md:py-0 px-8 w-full">
                <h3 className="text-5xl md:text-6xl font-bold text-purple-500 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-white">{stat.label}</p>
              </div>)}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-2 text-white">Nosotros Proveemos</h2>
              <h3 className="text-4xl font-bold mb-8 text-purple-500">Ciber Seguridad Para Ti</h3>
              <p className="text-white/80 mb-8">
                En el ámbito de los servicios de ciberseguridad, ofrecemos soluciones de ciberseguridad integrales 
                para proteger su negocio. Nuestros servicios de ciberseguridad incluyen desde análisis de 
                vulnerabilidades hasta protección avanzada contra amenazas. Las soluciones de ciberseguridad que 
                implementamos están diseñadas para adaptarse a las necesidades específicas de cada empresa.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Protección en Tiempo Real</span>
                    <span className="text-white">94%</span>
                  </div>
                  <Progress value={94} className="h-2 bg-purple-900/20" indicatorClassName="bg-purple-600" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Protege Tu Privacidad</span>
                    <span className="text-white">98%</span>
                  </div>
                  <Progress value={98} className="h-2 bg-purple-900/20" indicatorClassName="bg-purple-600" />
                </div>
              </div>
              
              <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                Leer Más <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
              <div className="absolute top-0 right-0 z-10 bg-black/70 p-4 rounded-lg max-w-xs">
                <div className="text-purple-400 text-4xl font-bold">91K+</div>
                <div className="text-white text-sm">Proyectos Realizados</div>
              </div>
              
              <img src="https://kits.scriptfusions.com/cyberalfa/wp-content/uploads/2025/03/New-Project-2025-03-09T110853.911-800x450.jpg" alt="Servicios de Ciberseguridad" className="w-full rounded-lg relative z-0" />
              
              <div className="absolute bottom-4 right-4 bg-purple-600 p-4 rounded-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Headphones className="h-6 w-6 text-white" />
                  <span className="text-white font-semibold">Monitoreo 24/7</span>
                </div>
                <p className="text-white/80 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eli
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>;
};
export default StatsSection;