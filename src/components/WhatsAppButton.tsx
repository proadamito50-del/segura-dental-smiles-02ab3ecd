import { motion } from "framer-motion";

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
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-shadow hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 fill-white"
      >
        <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.24-.46-2.35-1.47-.87-.77-1.46-1.72-1.64-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.46-.47-.64-.48h-.54c-.2 0-.51.07-.77.37-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.18 3 .14.2 2.03 3.11 5.01 4.24.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.11-.26-.18-.55-.32Z" />
        <path d="M27.27 4.72A15.86 15.86 0 0 0 16 0C7.17 0 0 7.17 0 16c0 2.82.74 5.59 2.14 8.02L0 32l8.2-2.11A15.92 15.92 0 0 0 16 32c8.83 0 16-7.17 16-16 0-4.27-1.66-8.29-4.73-11.28ZM16 29.29c-2.42 0-4.79-.65-6.86-1.88l-.49-.29-4.87 1.25 1.3-4.75-.32-.49A13.2 13.2 0 0 1 2.71 16C2.71 8.66 8.66 2.71 16 2.71c3.53 0 6.84 1.37 9.33 3.87A13.11 13.11 0 0 1 29.29 16c0 7.34-5.95 13.29-13.29 13.29Z" />
      </svg>

      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
};

export default WhatsAppButton;
