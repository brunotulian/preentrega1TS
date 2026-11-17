import './style.css'

// 1. Interfaz 
interface Remera {
  id: number;
  titulo: string;
  categoria: "Fútbol" | "Películas" | "Cómics" | "Series" | "Música";
  precio: number;
  stock: number;
}

const nombreTienda: string = "Remeras";
const mensajeBienvenida: string = "Encontrá tu pasión: Fútbol, Cine, Cómics, Series y Música en una sola remera.";

// 2. Array 
const catalogoRemeras: Remera[] = [
  { id: 1, titulo: "Remera Selección Argentina Campeón", categoria: "Fútbol", precio: 22000, stock: 15 },
  { id: 2, titulo: "Remera The Godfather (El Padrino)", categoria: "Películas", precio: 20000, stock: 10 },
  { id: 3, titulo: "Remera Batman Vintage Comic", categoria: "Cómics", precio: 21000, stock: 8 },
  { id: 4, titulo: "Remera Nosferatu / Horror Clásico", categoria: "Series", precio: 19500, stock: 12 },
  { id: 5, titulo: "Remera Rock / Ópera & Clásicos", categoria: "Música", precio: 23000, stock: 6 }
];

// 3. Funciones 
function calcularDescuentoEfectivo(precioBase: number): number {
  const porcentajeDescuento: number = 10; // 10% off pagando en efectivo
  return precioBase - (precioBase * porcentajeDescuento) / 100;
}

function obtenerInfoTienda(nombre: string, cantidadProductos: number): string {
  return `Bienvenido a ${nombre}. Contamos actualmente con ${cantidadProductos} categorías icónicas disponibles en stock.`;
}

// 4. Eventos
document.addEventListener("DOMContentLoaded", () => {
  const tituloEl = document.querySelector<HTMLHeadingElement>("#titulo-tienda");
  const subtituloEl = document.querySelector<HTMLParagraphElement>("#subtitulo-tienda");
  const listaEl = document.querySelector<HTMLUListElement>("#lista-remeras");
  const btnPromos = document.querySelector<HTMLButtonElement>("#btn-promos");
  const resultadoEl = document.querySelector<HTMLDivElement>("#resultado");

  if (tituloEl && subtituloEl && listaEl && btnPromos && resultadoEl) {
    tituloEl.textContent = nombreTienda;
    subtituloEl.textContent = obtenerInfoTienda(nombreTienda, catalogoRemeras.length);

    // Renderizar cada remera en la lista
    catalogoRemeras.forEach(remera => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span><strong>[${remera.categoria}]</strong> ${remera.titulo}</span>
        <span class="badge bg-secondary rounded-pill">$${remera.precio}</span>
      `;
      listaEl.appendChild(li);
    });

    // Evento 
    btnPromos.addEventListener("click", () => {
      const productoDestacado = catalogoRemeras[0];
      const precioConPromo = calcularDescuentoEfectivo(productoDestacado.precio);
      resultadoEl.textContent = `¡Promo Efectivo! Llevate la "${productoDestacado.titulo}" con 10% off a solo $${precioConPromo}`;
    });
  }
});