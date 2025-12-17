// Filtrar por categoría
document.getElementById('filtro-categoria').addEventListener('change', function () {
  const categoriaSeleccionada = this.value;
  const productos = document.querySelectorAll('.producto');

  productos.forEach(producto => {
    if (categoriaSeleccionada === 'todos') {
      producto.style.display = 'block';
    } else {
      producto.style.display = producto.classList.contains(categoriaSeleccionada) ? 'block' : 'none';
    }
  });
});

// Búsqueda de producto
document.addEventListener("DOMContentLoaded", function () {
  const inputBusqueda = document.getElementById("busqueda");
  const productos = document.querySelectorAll(".producto");

  // Función para normalizar texto: sin tildes y en minúsculas
  function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  inputBusqueda.addEventListener("input", function () {
    const texto = normalizar(inputBusqueda.value);

    productos.forEach(producto => {
      const titulo = normalizar(producto.querySelector("h2").textContent);
      const descripcion = normalizar(producto.querySelector("p").textContent);

      if (titulo.includes(texto) || descripcion.includes(texto)) {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  });
});
