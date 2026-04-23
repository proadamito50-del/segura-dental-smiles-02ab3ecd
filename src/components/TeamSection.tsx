import { motion } from "framer-motion";
import team1 from "@/assets/team-1-new.jpeg";
import team2 from "@/assets/team-2-new.jpeg";
import team3 from "@/assets/team-3-new.jpeg";

const TeamSection = () => {
  const team = [
    {
      image: team1,
      name: "Dra. María García",
      role: "Directora Médica",
      specialty: "Especialista en Implantología",
    },
    {
      image: team3,
      name: "Dra. Ana López",
      role: "Odontóloga",
      specialty: "Especialista en Estética Dental",
    },
  ];

  return (
    <section id="equipo" className="py-20 lg:py-28 bg-background">
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
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Profesionales que{" "}
            <span className="dental-text-gradient">cuidan de ti</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos con un equipo de profesionales altamente cualificados y con amplia 
            experiencia, comprometidos con tu bienestar y salud bucal.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-1">{member.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
