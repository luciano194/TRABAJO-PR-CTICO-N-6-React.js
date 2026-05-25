import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ nombre, email, mensaje });

    alert("Formulario enviado ✔");
  };

  const formularioInvalido = nombre === "" || email === "" || mensaje === "";

  return (
    <div className="form-container">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <button type="submit" disabled={formularioInvalido}>
          Enviar
        </button>
      </form>

      {/* PREVIEW EN VIVO */}
      <div className="preview">
        <h3>Previsualización</h3>

        <p><b>Nombre:</b> {nombre}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Mensaje:</b> {mensaje}</p>
      </div>
    </div>
  );
}

export default ContactForm;
