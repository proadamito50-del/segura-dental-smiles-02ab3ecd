import { motion } from "framer-motion";
import whatsappOfficial from "@/assets/whatsapp-official.png";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/34626749685?text=Hola,%20me%20gustaría%20solicitar%20una%20cita";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 block h-16 w-16 overflow-visible rounded-full transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={whatsappOfficial}
        alt=""
        aria-hidden="true"
        className="absolute -inset-1 -z-10 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)] animate-ping object-cover opacity-30"
      />
      <img
        src={whatsappOfficial}
        alt="WhatsApp"
        className="block h-full w-full object-cover"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
