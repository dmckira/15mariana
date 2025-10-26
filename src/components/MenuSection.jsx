import { motion } from "framer-motion";

const menuOptions = [
  { emoji: "🥩", title: "Cañón", desc: "En salsa BBQ, frutas o cebolla y orégano." },
  { emoji: "🍗", title: "Pollo", desc: "En salsa de cebolla y orégano, BBQ o champiñones." },
  { emoji: "🍖", title: "Costilla de cerdo", desc: "Al grill, bañadas en salsa BBQ." },
  { emoji: "🌮", title: "Quesadilla de pollo", desc: "Con queso mozarella, salsa de pimientos y crema agria." },
];

export default function MenuSection() {
  return (
    <section className="py-20 text-center bg-gradient-to-br from-[#E0A696]/20 to-[#E0AFC6]/30 relative overflow-hidden">
      {/* Capa de brillo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_70%)] pointer-events-none"></div>

      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#4B1E1E] mb-12 drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]">
        Opciones de menú
      </h2>

      {/* Grid de platos */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {menuOptions.map((m, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-6 border border-white/30 
                       bg-white/15 backdrop-blur-lg
                       shadow-[0_4px_20px_rgba(224,175,198,0.25)]
                       hover:shadow-[0_4px_30px_rgba(255,200,220,0.3)]
                       transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-6xl mb-3">{m.emoji}</p>
            <h3 className="font-bold text-xl text-[#4B1E1E] mb-2">{m.title}</h3>
            <p className="text-[#4B1E1E]/80 text-sm leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
