
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-lg border-2 border-cyber-purple/50"></div>
              
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">We Provide Our</span><br />
              <span className="cyber-gradient-text">Cyber Security For You</span>
            </h2>
            
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <div className="space-y-5 mb-8">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white">Real-Time Protection</span>
                  <span className="text-cyber-purple">98%</span>
                </div>
                <Progress value={98} className="h-2 bg-gray-800" indicatorClassName="bg-gradient-to-r from-purple-500 to-purple-700" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white">Protect Your Privacy</span>
                  <span className="text-cyber-purple">95%</span>
                </div>
                <Progress value={95} className="h-2 bg-gray-800" indicatorClassName="bg-gradient-to-r from-purple-500 to-purple-700" />
              </div>
            </div>
            
            <Button className="cyber-btn py-6 px-8">
              Read More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
