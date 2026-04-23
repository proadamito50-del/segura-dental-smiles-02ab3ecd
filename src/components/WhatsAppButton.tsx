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
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-shadow hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={whatsappOfficial}
        alt="WhatsApp"
        className="h-full w-full object-contain"
      />
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
};

export default WhatsAppButton;
