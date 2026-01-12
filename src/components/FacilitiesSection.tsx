import { motion } from "framer-motion";
import facility1 from "@/assets/facility-1.jpg";
import facility2 from "@/assets/facility-2.jpg";
import facility3 from "@/assets/facility-3.jpg";
import facility4 from "@/assets/facility-4.jpg";
import facility5 from "@/assets/facility-5.jpg";
import facility6 from "@/assets/facility-6.jpg";
import facility7 from "@/assets/facility-7.jpg";

const FacilitiesSection = () => {
  const facilities = [
    { image: facility1, alt: "Sala de tratamientos" },
    { image: facility2, alt: "Equipamiento dental" },
    { image: facility3, alt: "Sala de espera" },
    { image: facility4, alt: "Gabinete dental" },
    { image: facility5, alt: "Recepción" },
    { image: facility6, alt: "Consulta dental" },
    { image: facility7, alt: "Instalaciones modernas" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
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
            Nuestras Instalaciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tecnología y{" "}
            <span className="dental-text-gradient">confort</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras modernas instalaciones equipadas con la última tecnología 
            para garantizar tu comodidad y los mejores resultados en cada tratamiento.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={facility.image}
                alt={facility.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  index === 0 ? "h-full aspect-square" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm">{facility.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
