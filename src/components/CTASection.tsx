import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/34626749685?text=Hola,%20me%20gustaría%20solicitar%20una%20cita";
  const weeklySchedule = [
    { day: "Lunes", hours: "10:00-14:00 · 17:00-21:00" },
    { day: "Martes", hours: "10:00-14:00" },
    { day: "Miércoles", hours: "10:00-14:00 · 17:00-21:00" },
    { day: "Jueves", hours: "10:00-14:00 · 17:00-21:00" },
    { day: "Viernes", hours: "10:00-14:00" },
  ];
  const fullAddress = "Clínica Dental del Segura, s/n Bajo, C. Torre Álvarez, 30007 Murcia";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dental-gradient rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              ¿Listo para conseguir la sonrisa que siempre quisiste?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Reserva tu cita ahora y da el primer paso hacia una sonrisa perfecta. 
              ¡Te esperamos!
            </p>

            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr] items-stretch text-left mb-10">
              <div className="rounded-lg border border-primary-foreground/20 bg-background/10 backdrop-blur-sm overflow-hidden min-h-[320px]">
                <iframe
                  src={mapEmbedUrl}
                  title="Mapa de ubicación de la clínica"
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-lg border border-primary-foreground/20 bg-background/10 backdrop-blur-sm p-6 md:p-7">
                <div className="flex items-center gap-2 text-primary-foreground mb-5">
                  <Clock className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">Horario de clínica</h3>
                </div>

                <div className="space-y-3">
                  {weeklySchedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between gap-4 border-b border-primary-foreground/15 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-medium text-primary-foreground">{item.day}</span>
                      <span className="text-right text-primary-foreground/85">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-3 text-primary-foreground/90">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>{fullAddress}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                asChild 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pedir Cita por WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6"
              >
                <a href="tel:968231632">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>968 23 16 32</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Lun-Vie · Consultar detalle arriba</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
