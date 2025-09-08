
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    paquete: "",
    mensaje: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nombre', formData.nombre);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telefono', formData.telefono);
      formDataToSend.append('paquete', formData.paquete);
      formDataToSend.append('mensaje', formData.mensaje);

      const response = await fetch('https://formspree.io/f/mrblwpyq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactar con nosotros. Te responderemos pronto.",
        });

        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          paquete: "",
          mensaje: ""
        });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/69930066-f606-40e7-ae57-4e2441adab50.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg-dark/80 to-cyber-bg-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacta Ahora</h1>
            <p className="text-gray-400">Ponte en contacto con nuestros expertos en ciberseguridad</p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-white">Mantente Conectado</span>{" "}
              <span className="cyber-gradient-text">Con Nosotros.</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Estamos a tu disposición para ayudarte a proteger tus activos digitales con nuestras 
              soluciones de ciberseguridad líderes en la industria.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Input 
                        type="text" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu Nombre" 
                        className="bg-cyber-bg-darker border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Tu Email" 
                        className="bg-cyber-bg-darker border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Número de teléfono" 
                      className="bg-cyber-bg-darker border-gray-700 text-white"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, paquete: value }))}>
                      <SelectTrigger className="bg-cyber-bg-darker border-gray-700 text-white">
                        <SelectValue placeholder="Selecciona un paquete" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Paquete Básico">Paquete Básico</SelectItem>
                        <SelectItem value="Paquete Premium">Paquete Premium</SelectItem>
                        <SelectItem value="Paquete Deluxe">Paquete Deluxe</SelectItem>
                        <SelectItem value="A medida">A medida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="mb-6">
                    <Textarea 
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Escribe tu mensaje..." 
                      className="bg-cyber-bg-darker border-gray-700 text-white h-32"
                      required
                    />
                  </div>
                  
                  <Button className="cyber-btn w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Procesando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </div>
              
              <div className="h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12143.396896584905!2d-3.7095242743713463!3d40.42051763544322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2zR3JhbiBWw61hLCAyOCwgMjgwMTMgTWFkcmlkLCBFc3Bhw7Fh!5e0!3m2!1ses!2s!4v1712188800000!5m2!1ses!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="cyber-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-cyber-purple" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Ubicación:</h3>
                <p className="text-gray-400">Calle Gran Vía 28, 28013 Madrid, España</p>
              </div>
              
              <div className="cyber-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cyber-purple" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Correo electrónico:</h3>
                <p className="text-gray-400">cyber.incidents.exploits@gmail.com</p>
              </div>
              
              <div className="cyber-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-cyber-purple" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Teléfono:</h3>
                <p className="text-gray-400">+34 910 123 456</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
