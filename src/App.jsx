import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Contador from "./components/Contador";
import ContactForm from "./components/ContactForm";
import ProductList from "./components/ProductList";
import TodoApp from "./components/TodoApp";

function App() {
  const [vista, setVista] = useState("home");

  return (
    <>
      <Header />

      {/* BOTONES DE NAVEGACIÓN */}
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => setVista("home")}>Inicio</button>
        <button onClick={() => setVista("cards")}>Cards</button>
        <button onClick={() => setVista("contador")}>Contador</button>
        <button onClick={() => setVista("form")}>Formulario</button>
        <button onClick={() => setVista("productos")}>Productos</button>
        <button onClick={() => setVista("todo")}>ToDo</button>
      </nav>

      <main>
        {/* HOME */}
        {vista === "home" && (
          <div>
            <h2>Bienvenido al Trabajo Practico N°6 de React</h2>
            <p>Seleccioná una opción del menú</p>
            <img src="https://content.thinkbuildeploy.com/66f6e97d19faf127de444262/assets/wordpress/html,-css,-javascript,-bootstrap-y-react.jpg"
            alt="imagen de inicio"
            ></img>
          </div>
        )}

        {/* CARDS ESTÁTICAS */}
        {vista === "cards" && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Card
              titulo="Notebook"
              descripcion="Notebook gamer potente"
              imagen="https://fullh4rd.com.ar/img/productos/32/notebook-lenovo-156-ideapad-1-15ijl7-n4500-4gb-128gb-emmc-fhd-w11h-0.jpg"
              precio={1200}
            />

            <Card
              titulo="Mouse"
              descripcion="Mouse inalámbrico"
              imagen="https://m.media-amazon.com/images/I/416XShPR6zL.jpg"
              precio={25}
            />

            <Card
              titulo="Teclado"
              descripcion="Teclado mecánico RGB"
              imagen="https://fullh4rd.com.ar/img/productos/8/teclado-mecanico-raptor-fireclaw-m68-switch-red-outemu-0.jpg"
              precio={80}
            />

            <Card
              titulo="Monitor"
              descripcion="Monitor 24 pulgadas Full HD"
              imagen="https://www.xt-pc.com.ar/img/productos/18/MON970.jpg"
              precio={200}
            />
          </div>
        )}

        {/* CONTADOR */}
        {vista === "contador" && <Contador />}

        {/* FORMULARIO */}
        {vista === "form" && <ContactForm />}

        {/* PRODUCTOS */}
        {vista === "productos" && <ProductList />}

        {/* TODO APP */}
        {vista === "todo" && <TodoApp />}
      </main>

      <Footer />
    </>
  );
}

export default App;