import { motion } from "framer-motion";
import { 
  Sparkles, 
  Smile, 
  HeartPulse, 
  Baby, 
  Stethoscope, 
  Clock,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Limpieza Dental",
      description: "Limpieza profesional para mantener tus dientes sanos y libres de sarro y manchas.",
    },
    {
      icon: Smile,
      title: "Ortodoncia",
      description: "Tratamientos de ortodoncia invisible y brackets para una sonrisa perfectamente alineada.",
    },
    {
      icon: HeartPulse,
      title: "Implantes Dentales",
      description: "Recupera tu sonrisa con implantes de última generación con garantía de por vida.",
    },
    {
      icon: Baby,
      title: "Odontopediatría",
      description: "Cuidado dental especializado para los más pequeños en un ambiente amigable.",
    },
    {
      icon: Stethoscope,
      title: "Endodoncia",
      description: "Tratamientos de conducto para salvar dientes dañados sin dolor.",
    },
    {
      icon: ShieldCheck,
      title: "Estética Dental",
      description: "Blanqueamiento y carillas para conseguir la sonrisa de tus sueños.",
    },
    {
      icon: Zap,
      title: "Urgencias",
      description: "Atención de urgencias dentales para resolver problemas de forma rápida.",
    },
    {
      icon: Clock,
      title: "Revisiones",
      description: "Revisiones periódicas para prevenir problemas y mantener tu salud bucal.",
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluciones completas para tu{" "}
            <span className="dental-text-gradient">salud dental</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales con la tecnología más avanzada 
            y un equipo de especialistas para cuidar de tu sonrisa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 dental-gradient rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
