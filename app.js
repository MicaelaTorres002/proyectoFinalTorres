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

console.log(catalogo);

localStorage.setItem("lista de productos", JSON.stringify(catalogo))