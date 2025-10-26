import { motion } from "framer-motion";

export default function GiftSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#E0A696]/25 to-[#E0AFC6]/40 
                 text-[#4B1E1E] text-center relative overflow-hidden"
    >
      {/* Brillos de fondo suaves */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-xl mx-auto px-6"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-[#5B2C2C] 
                     drop-shadow-md mb-6 tracking-tight"
        >
          Sugerencia de regalos
        </h2>

        <p className="italic text-lg md:text-xl mb-8 text-[#4B1E1E]/90 leading-relaxed">
          “Tu presencia es el mejor regalo que me puedes dar,  
          pero si algo me quieres obsequiar, en un sobre lo puedes colocar.”
        </p>

        {/* Ícono central animado */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full mx-auto flex items-center justify-center 
                     bg-gradient-to-r from-[#E0A696] to-[#E0AFC6] shadow-lg"
        >
          <span className="text-5xl text-white drop-shadow-lg">💌</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 font-semibold text-[#5B2C2C] text-xl"
        >
          ¡Lluvia de sobres!
        </motion.p>
      </motion.div>
    </section>
  );
}
