import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = async () => {
      try {
        await audio.play();
        console.log("🎵 Música iniciada automáticamente");
      } catch (err) {
        console.warn("⚠️ Autoplay bloqueado, mostrando botón flotante");
        showButton();
      }
    };

    const showButton = () => {
      const overlay = document.createElement("button");
      overlay.innerText = "🎵 Activar música";
      overlay.style.position = "fixed";
      overlay.style.bottom = "20px";
      overlay.style.right = "20px";
      overlay.style.background = "linear-gradient(90deg,#E0A696,#E0AFC6)";
      overlay.style.color = "white";
      overlay.style.border = "none";
      overlay.style.padding = "12px 20px";
      overlay.style.borderRadius = "999px";
      overlay.style.zIndex = "9999";
      overlay.style.fontSize = "1rem";
      overlay.style.cursor = "pointer";
      overlay.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
      overlay.onclick = () => {
        audio.play();
        overlay.remove();
      };
      document.body.appendChild(overlay);
    };

    tryPlay();

    // Vuelve a intentar reproducir si el usuario hace clic en cualquier parte
    const handleUserInteraction = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", handleUserInteraction);
    };
    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/song.mp3"
      loop
      preload="auto"
      volume="0.3"
    />
  );
}
