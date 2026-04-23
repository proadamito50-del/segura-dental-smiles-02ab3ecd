import { motion } from "framer-motion";
import facilityVideo from "@/assets/facility-feature-video.mov";
import facilityRight1 from "@/assets/facility-right-1.jpeg";
import facilityRight2 from "@/assets/facility-right-2.jpeg";
import facilityRight3 from "@/assets/facility-right-3.jpeg";
import facilityRight4 from "@/assets/facility-right-4.jpeg";
import facilityRight5 from "@/assets/facility-right-5.jpg";

const FacilitiesSection = () => {
  const facilities = [
    { video: facilityVideo, alt: "Vídeo de tecnología y confort en clínica dental" },
    { image: facilityRight1, alt: "Gabinete dental con sillón azul" },
    { image: facilityRight2, alt: "Consulta dental con sillón naranja" },
    { image: facilityRight3, alt: "Sala de espera de la clínica" },
    { image: facilityRight4, alt: "Fachada de Clínica Dental del Segura" },
    { image: facilityRight5, alt: "Gabinete dental con sillón amarillo" },
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
              {facility.video ? (
                <video
                  src={facility.video}
                  aria-label={facility.alt}
                  className={`w-full object-cover ${index === 0 ? "h-full aspect-square" : "aspect-square"}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={facility.image}
                  alt={facility.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? "h-full aspect-square" : "aspect-square"
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
