import { useState } from "react";
import Swal from "sweetalert2";

export default function RSVPForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    asiste: "",
    menu: "",
    cantidad: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.telefono || !form.asiste) {
      Swal.fire("Oops", "Por favor completa los campos obligatorios", "warning");
      return;
    }

    setLoading(true);
    try {
      // 🔹 Guardado opcional (puedes dejarlo o quitarlo)
      await fetch("YOUR_APPS_SCRIPT_URL_HERE", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // 🔹 Mensaje de confirmación
      Swal.fire("💖 ¡Gracias!", "Tu asistencia fue registrada correctamente.", "success");

      // 🔹 Generar texto de WhatsApp
      const numero = "573205785464"; // ← cambia por tu número de WhatsApp
      const mensaje =
        form.asiste === "SI"
          ? `✨ *Confirmación de Asistencia - 15 Años de Mariana Del Mar* ✨

👤 *Nombre:* ${form.nombre}
📞 *Teléfono:* ${form.telefono}
✅ *Asistirá:* Sí
👥 *Cantidad de personas:* ${form.cantidad || "1"}
🍽️ *Menú seleccionado:* ${form.menu || "Sin especificar"}

💖 ¡Gracias por confirmar tu asistencia!`
          : `🚫 *Confirmación de NO asistencia - 15 Años de Mariana Del Mar* 🚫

👤 *Nombre:* ${form.nombre}
📞 *Teléfono:* ${form.telefono}
❌ *No podrá asistir al evento.*`;

      // 🔹 Crear enlace y abrir WhatsApp
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");

      // 🔹 Limpiar formulario
      setForm({ nombre: "", telefono: "", asiste: "", menu: "", cantidad: "" });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo enviar el formulario", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="confirmacion" className="py-20 text-center text-[#3d1d1d]">
      {/* Título con mejor contraste */}
      <h2
        className="text-4xl font-extrabold mb-10 
        text-[#4b1e1e] drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]"
      >
        Confirma tu asistencia
      </h2>

      {/* Contenedor efecto vidrio */}
      <div
        className="max-w-lg mx-auto p-8 rounded-3xl 
        bg-white/15 backdrop-blur-xl
        shadow-[0_4px_30px_rgba(224,175,198,0.25)]
        border border-white/30 hover:shadow-[0_4px_40px_rgba(255,200,220,0.3)]
        transition-all duration-500"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            className="p-3 rounded-lg border border-white/30 bg-white/20
            placeholder-gray-700 text-[#3d1d1d] backdrop-blur-sm
            focus:outline-none focus:ring-2 focus:ring-[#E0AFC6]/70"
            placeholder="Nombre completo *"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />

          <input
            className="p-3 rounded-lg border border-white/30 bg-white/20
            placeholder-gray-700 text-[#3d1d1d] backdrop-blur-sm
            focus:outline-none focus:ring-2 focus:ring-[#E0AFC6]/70"
            placeholder="Teléfono *"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />

          <select
            className="p-3 rounded-lg border border-white/30 bg-white/20
            text-[#3d1d1d] backdrop-blur-sm
            focus:outline-none focus:ring-2 focus:ring-[#E0AFC6]/70"
            name="asiste"
            value={form.asiste}
            onChange={handleChange}
          >
            <option value="">¿Asistirás?</option>
            <option value="SI">Sí, asistiré</option>
            <option value="NO">No podré asistir</option>
          </select>

          {form.asiste === "SI" && (
            <>
              <input
                className="p-3 rounded-lg border border-white/30 bg-white/20
                placeholder-gray-700 text-[#3d1d1d] backdrop-blur-sm
                focus:outline-none focus:ring-2 focus:ring-[#E0AFC6]/70"
                type="number"
                placeholder="Cantidad de personas *"
                name="cantidad"
                value={form.cantidad}
                onChange={handleChange}
              />

              <select
                className="p-3 rounded-lg border border-white/30 bg-white/20
                text-[#3d1d1d] backdrop-blur-sm
                focus:outline-none focus:ring-2 focus:ring-[#E0AFC6]/70"
                name="menu"
                value={form.menu}
                onChange={handleChange}
              >
                <option value="">Selecciona menú *</option>
                <option value="Cañón">Cañón</option>
                <option value="Pollo">Pollo</option>
                <option value="Costilla de cerdo">Costilla de cerdo</option>
                <option value="Quesadilla de pollo">Quesadilla de pollo</option>
              </select>
            </>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-[#E0A696] to-[#E0AFC6] 
            text-white font-semibold py-3 rounded-md mt-4 
            hover:opacity-90 shadow-md transition duration-300"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Confirmar asistencia"}
          </button>
        </form>
      </div>
    </section>
  );
}
