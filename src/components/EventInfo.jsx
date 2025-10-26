import { motion } from "framer-motion";

export default function EventInfo() {
  return (
    <section
      id="evento"
      className="py-20 text-center text-[#3d1d1d]"
    >
      {/* 🩸 Título oscuro elegante y legible */}
      <h2
        className="text-4xl font-extrabold mb-10 
        text-[#4b1e1e]
        drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]
        tracking-wider"
      >
        Detalles del evento
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { emoji: "📅", title: "Fecha", text: "22 de noviembre de 2025" },
          {
            emoji: "📍",
            title: "Lugar",
            text: "Restaurante San Felipe Picni – Laureles, Cl 36 #80-22",
          },
          { emoji: "🕖", title: "Hora", text: "7:00 P.M." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="p-8 rounded-2xl 
            bg-white/20 backdrop-blur-md 
            shadow-[0_4px_30px_rgba(224,175,198,0.25)]
            border border-white/30 hover:border-[#E0AFC6]/60
            hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-5xl mb-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
              {item.emoji}
            </p>

            {/* 💎 Título visible dentro de la tarjeta */}
            <h3 className="text-xl font-semibold text-[#5a1a2f] drop-shadow-[0_1px_3px_rgba(255,255,255,0.7)]">
              {item.title}
            </h3>

            <p className="mt-2 text-[#2b0d14] font-medium">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
