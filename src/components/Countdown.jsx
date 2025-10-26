import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const target = new Date("2025-11-22T19:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-[#E0A696]/15 to-[#E0AFC6]/15 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-[#5B2C2C] mb-6">
        Falta poco para el gran día 💖
      </h2>

      <div className="flex justify-center gap-6 text-2xl font-semibold text-[#4B1E1E]">
        <div>
          <p className="text-5xl">{timeLeft.days}</p>
          <span>Días</span>
        </div>
        <div>
          <p className="text-5xl">{timeLeft.hours}</p>
          <span>Horas</span>
        </div>
        <div>
          <p className="text-5xl">{timeLeft.minutes}</p>
          <span>Minutos</span>
        </div>
        <div>
          <p className="text-5xl animate-pulse">{timeLeft.seconds}</p>
          <span>Segundos</span>
        </div>
      </div>
    </motion.section>
  );
}
