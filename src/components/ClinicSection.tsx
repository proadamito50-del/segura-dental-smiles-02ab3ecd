import { motion } from "framer-motion";
import clinicImage from "@/assets/clinic-video-placeholder.jpg";

const ClinicSection = () => {
  const features = [
    { number: "20+", label: "Años de experiencia" },
    { number: "5000+", label: "Pacientes atendidos" },
    { number: "100%", label: "Satisfacción" },
    { number: "24h", label: "Atención urgencias" },
  ];

  return (
    <section id="clinica" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={clinicImage}
                alt="Clínica Dental del Segura"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
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
