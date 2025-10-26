import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <div className="text-center py-10 text-[#5B2C2C] text-2xl md:text-3xl font-semibold italic">
      <Typewriter
        options={{
          strings: [
            "Gracias por acompañarme en esta noche tan especial 💕",
            "Con amor, Mariana 🌸",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 40,
        }}
      />
    </div>
  );
}
