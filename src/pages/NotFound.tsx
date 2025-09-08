
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Shield className="h-20 w-20 text-cyber-purple" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="cyber-gradient-text">404</span>
          </h1>
          
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back to safety.
          </p>
          
          <Button asChild className="cyber-btn py-6 px-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
