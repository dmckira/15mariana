import { motion } from "framer-motion";
import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import MenuSection from "./components/MenuSection";
import RSVPForm from "./components/RSVPForm";
import GiftSection from "./components/GiftSection";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import MusicPlayer from "./components/MusicPlayer";
import TypewriterText from "./components/TypewriterText";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden"
    >
      {/* ✨ Fondo aurora y partículas */}
      <AuroraBackground />
      <ParticlesBackground />
      <MusicPlayer />

      {/* Secciones */}
      <Hero />

      <AuroraSection blur="lg">
        <EventInfo />
      </AuroraSection>

      <AuroraSection blur="xl">
        <MenuSection />
      </AuroraSection>

      <AuroraSection blur="2xl">
        <RSVPForm />
      </AuroraSection>

      <AuroraSection blur="xl">
        <GiftSection />
      </AuroraSection>

      <TypewriterText />
      <Footer />
    </motion.div>
  );
}

/* 🌈 Fondo global tipo aurora */
function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-20 animate-aurora-sky"></div>
  );
}

/* ✨ Contenedor transparente sin fondo blanco */
function AuroraSection({ children, blur = "lg" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative my-24 mx-auto max-w-6xl px-6 md:px-12 py-12 rounded-3xl 
                  bg-white/5 backdrop-blur-${blur} shadow-[0_0_80px_rgba(224,175,198,0.25)]`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(224,175,198,0.2),_transparent_60%)] opacity-70 animate-aurora"></div>
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

export default App;
