const catalogo = [
    {
        categoria: "noAlcoholica",
        productos: []
    },
    {
        categoria: "cerveza",
        productos: []
    },
    {
        categoria: "vino",
        productos:[]
    },
    {
        categoria: "whisky",
        productos:[]
    },
    {
        categoria: "licor",
        productos:[]
    }, 
    {
        categoria: "bebidasBlancas",
        productos:[]
    },
    {
        categoria: "aperitivo",
        productos:[]
    },
];

function Bebida(nombre, precio, volumen) {
    this.nombre = nombre;
    this.precio = precio;
    this.volumen = volumen;
}

catalogo[0].productos.push(
   new Bebida("Manaos de pomelo", 1400, "2.25 lt"),
   new Bebida("Granadina Crusenier", 5000, "750ml")
);
catalogo[1].productos.push(
    new Bebida("Heineken Porrón", 4000, "330 ml")
);
catalogo[2].productos.push(
    new Bebida("Trumpeter", 8000, "750 ml")
);
catalogo[3].productos.push(
    new Bebida("Black label de Johnnie Walker", 60000, "1 lt")
);
catalogo[4].productos.push(
    new Bebida ("Jägermeister", 25000, "700 ml" )
);
catalogo[5].productos.push(
    new Bebida ("Skyy Cosmic edición limitada Infusions", 18000, "750 ml" )
);
catalogo[6].productos.push(
    new Bebida ("Fernet Branca", 16000, "750 ml" )
);

let idGlobal = 1;

catalogo.forEach(categoria => {
  categoria.productos.forEach(producto => {
    producto.id = idGlobal++;
  });
});

localStorage.setItem("lista de productos", JSON.stringify(catalogo));

fetch("../data/datos.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const bebida = new Bebida(item.nombre, item.precio, item.volumen);
    
            const categoriaObj = catalogo.find(c => c.categoria ===item.categoria);
            if (categoriaObj) {
                categoriaObj.productos.push(bebida);
            }
        });
        console.log(catalogo);
    });

function obtenerTodosLosProductos() {
  return catalogo.flatMap(cat => cat.productos);
}

let carrito = [];

function agregarAlCarrito(id) {
    const productos = obtenerTodosLosProductos();
    const producto = productos.find(p => p.id === Number(id));

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

function renderCarrito() {
    const contenedorCarrito = document.getElementById("carrito-items");
    const totalHTML = document.getElementById("carrito-total");

    contenedorCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("carrito-item");

      div.innerHTML = `
        <span>${producto.nombre}</span>
        <span>$${producto.precio}</span>
      `;

      contenedorCarrito.appendChild(div);
      total += producto.precio;
    });

    totalHTML.textContent = `Total: $${total}`;
}

const contenedor = document.getElementById("contenedor-productos");


catalogo.forEach(categoria => {
    categoria.productos.forEach(producto => {

    const card = document.createElement("article");
    card.classList.add("articleCard");

    card.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Volumen: ${producto.volumen}</p>
        <p>Precio: ${producto.precio}</p>
        <button class="boton boton-agregar" data-id=${producto.id}>Agregar al carrito</button>`;
    
    const boton = card.querySelector(".boton-agregar");

    boton.addEventListener("click", (e) => {
        agregarAlCarrito (e.target.dataset.id);

        Swal.fire({
            title: "Producto agregado al carrito",
            text: `${producto.nombre}`,
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 1500
        });
    });

    contenedor.appendChild(card);
  });
});








