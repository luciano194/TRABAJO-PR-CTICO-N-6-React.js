import { useState } from "react";
import Card from "./Card";

function ProductList() {
  const [categoria, setCategoria] = useState("Todas");
  const [soloStock, setSoloStock] = useState(false);

  const productos = [
    {
      id: 1,
      nombre: "Notebook",
      precio: 1200,
      categoria: "Electronica",
      enStock: true,
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_674154-MLA99475153990_112025-T.webp"
    },
    {
      id: 2,
      nombre: "Mouse",
      precio: 20,
      categoria: "Electronica",
      enStock: false,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0WrUVExqBTCG01kIKuZcey6H96MBBFUvcA&s"
    },
    {
      id: 3,
      nombre: "Teclado",
      precio: 50,
      categoria: "Electronica",
      enStock: true,
      imagen: "https://www.comeros.com.ar/wp-content/uploads/2024/09/PERFORMANCE-8259-1.jpg"
    },
    {
      id: 4,
      nombre: "Remera",
      precio: 15,
      categoria: "Ropa",
      enStock: true,
      imagen: "https://acdn-us.mitiendanube.com/stores/002/326/461/products/whatsapp-image-2025-12-08-at-21-52-48-378475f7613827c6c817653109555891-1024-1024.webp"
    },
    {
      id: 5,
      nombre: "Pantalon",
      precio: 30,
      categoria: "Ropa",
      enStock: false,
      imagen: "https://m.media-amazon.com/images/I/61uqB9n4HkL._AC_UY1000_.jpg"
    },
    {
      id: 6,
      nombre: "Zapatillas",
      precio: 80,
      categoria: "Ropa",
      enStock: true,
      imagen: "https://acdn-us.mitiendanube.com/stores/001/702/486/products/zz37300a-131-162caed068f96344d116777787735747-1024-1024.webp"
    },
  ];

  const productosFiltrados = productos.filter((p) => {
    const filtroCategoria =
      categoria === "Todas" || p.categoria === categoria;

    const filtroStock = soloStock ? p.enStock : true;

    return filtroCategoria && filtroStock;
  });

  return (
    <div>
      <h2>Lista de Productos</h2>

      {/* FILTROS */}
      <div style={{ marginBottom: "15px" }}>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Electronica">Electrónica</option>
          <option value="Ropa">Ropa</option>
        </select>

        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            checked={soloStock}
            onChange={(e) => setSoloStock(e.target.checked)}
          />
          Solo en stock
        </label>
      </div>

      {/* LISTA */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Card
              key={producto.id}
              titulo={producto.nombre}
              descripcion={`Categoria: ${producto.categoria}`}
              imagen={producto.imagen}
              precio={producto.precio}
            />
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;