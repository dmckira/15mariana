import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setEngineReady(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: ["#fff", "#FFD6E0", "#E0A696", "#F8BBD0"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.4, max: 1 },
          animation: { enable: true, speed: 0.6 },
        },
        size: {
          value: { min: 3, max: 8 },
          animation: { enable: true, speed: 3, sync: false },
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
        shadow: {
          enable: true,
          color: "#fff",
          blur: 5,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!engineReady) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
    </div>
  );
}
