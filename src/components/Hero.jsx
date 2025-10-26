import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const target = new Date("2025-11-22T19:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Fondo aurora animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0A696] via-[#E0AFC6] to-[#FFD6E0] animate-gradient-wave opacity-90"></div>

      <motion.h1
  data-text="Mis 15 Años"
  className="title-wrap title-stroke"
>
  <span className="title-fill text-7xl md:text-9xl">
    Mis 15 Años
  </span>
</motion.h1>

<motion.p
  data-text="Mariana Del Mar Cardona Naar"
  className="title-wrap name-stroke mt-3"
>
  <span className="name-fill text-5xl md:text-7xl">
    Mariana Del Mar Cardona Naar
  </span>
</motion.p>


      {/* Mensaje alusivo */}
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-white/90 mt-8 px-4 italic font-light leading-relaxed drop-shadow-[0_3px_8px_rgba(224,175,198,0.8)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        “Quiero celebrar mis quince con quienes más quiero, compartiendo risas, recuerdos y una linda cena juntos. Una mesa, buena compañía y mucho cariño… así quiero vivir esta noche <b> con mis personas favoritas</b>.”
      </motion.p>

      {/* Contador */}
      <motion.div
        className="mt-10 text-white bg-white/20 rounded-2xl backdrop-blur-md px-6 py-4 shadow-xl border border-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <h2 className="text-lg font-semibold mb-2 text-white drop-shadow-[0_2px_6px_rgba(255,200,220,0.8)]">
          Falta poco para el gran día 💖
        </h2>
        <div className="flex justify-center gap-6 text-center font-semibold text-white">
          <div>
            <p className="text-4xl font-bold">{timeLeft.days}</p>
            <span>Días</span>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.hours}</p>
            <span>Horas</span>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.minutes}</p>
            <span>Minutos</span>
          </div>
          <div>
            <p className="text-4xl font-bold animate-pulse">{timeLeft.seconds}</p>
            <span>Segundos</span>
          </div>
        </div>
      </motion.div>

      {/* Botón Ver Detalles */}
      <motion.a
        href="#evento"
        className="mt-12 px-8 py-3 bg-white/90 text-[#E0A696] font-semibold rounded-full shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        whileHover={{ scale: 1.05 }}
      >
        Ver detalles
      </motion.a>
    </section>
  );
}
