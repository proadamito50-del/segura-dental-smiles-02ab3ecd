import { motion } from "framer-motion";
import { Play } from "lucide-react";

const ClinicSection = () => {
  // Video URL from user
  const videoUrl = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyhVPDLOnOf0UUDpcMQt-OXPTCs-W9UDEYJ4yh3oKZ4aVHbIATsd8yAw91pnuiBUFSzvrIZica1WIw7rQbvC2ZVpCO-dwN88tzxfUOEcl74-ZO1SuCR8p11C1eCQuvX9ESMA6SB=w141-h176-n-k-no-nu";

  const features = [
    { number: "20+", label: "Años de experiencia" },
    { number: "5000+", label: "Pacientes atendidos" },
    { number: "100%", label: "Satisfacción" },
    { number: "24h", label: "Atención urgencias" },
  ];

  return (
    <section id="clinica" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-video">
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 dental-gradient rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nuestra Clínica
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Instalaciones{" "}
              <span className="dental-text-gradient">modernas</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              En Clínica Dental del Segura contamos con instalaciones de última generación, 
              equipadas con la tecnología más avanzada para garantizar los mejores resultados 
              en cada tratamiento. Tu comodidad y seguridad son nuestra prioridad.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card p-5 rounded-2xl border border-border"
                >
                  <p className="text-3xl font-bold dental-text-gradient mb-1">
                    {feature.number}
                  </p>
                  <p className="text-muted-foreground text-sm">{feature.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
