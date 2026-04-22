import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-clinica.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/34626749685?text=Hola,%20me%20gustaría%20solicitar%20una%20cita";

  const features = [
    { icon: Shield, text: "Máxima seguridad" },
    { icon: Award, text: "+20 años experiencia" },
    { icon: Calendar, text: "Cita en 24h" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-dental-light -z-10" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Tu sonrisa, nuestra pasión
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Clínica Dental{" "}
              <span className="dental-text-gradient">del Segura</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Cuidamos de tu salud bucal con la mejor tecnología y un equipo de profesionales 
              comprometidos con tu bienestar. Tu confianza es nuestra prioridad.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mb-4 text-center lg:text-left">
              <p className="text-base font-semibold text-primary md:text-lg">
                Agenda tu cita ahora y consigue tu revisión gratuita
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="dental-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pedir Cita por WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5"
              >
                <a href="#servicios">
                  Ver Servicios
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Clínica Dental del Segura - Instalaciones modernas"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 dental-gradient rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+5000</p>
                  <p className="text-muted-foreground">Pacientes satisfechos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
