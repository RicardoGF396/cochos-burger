const productos = [
    {
        nombre: "Tokio",
        precio: 113,
        descripcion: "Carne de res gruesa, carne de pollo empanizada, arrachera, queso blanco , tocino, pepinillos y aderezo a elegir ",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Española",
        precio: 98,
        descripcion: "Carne de res gruesa, arrachera, queso blanco ,tocino  pepinillos y aderezo a elegir",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Dubái",
        precio: 103,
        descripcion: "Doble carne de pollo empanizado, arrachera, queso blanco, tocino,  pepinillos y aderezo a elegir",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Peruana",
        precio: 108,
        descripcion: "Doble carne de res gruesa, queso blanco, tocino,  pepinillos y aderezo a elegir",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Berlín",
        precio: 108,
        descripcion: "Doble carne de arrachera, chorizo argentino  tocino y queso blanco",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Irlandesa",
        precio: 93,
        descripcion: "Carne de res, arrachera, queso blanco y amarillo, salami, jamón, tocino, piña, champiñones y salchicha de pavo",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Filipina",
        precio: 68,
        descripcion: "	Doble carne de pollo empanizado, queso amarillo, pepinillos, aderezo a elegir",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Rusa",
        precio: 73,
        descripcion: "Carne de Res, queso blanco y amarillo, jamón, salami, tocino, champiñones, piña y salchicha de pavo",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Clásica",
        precio: 38,
        descripcion: "	Carne de res, queso amarillo o blanco",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Cubana",
        precio: 56,
        descripcion: "Carne de res, queso blanco, queso amarillo, jamón, champiñones y tocino",
        imagen: "hamburguesa",
        categoriaId: 1
    },
    {
        nombre: "Mexicano",
        precio: 34,
        descripcion: "Salchicha de pavo, queso blanco y amarillo, jamón y tocino",
        imagen: "hotdog",
        categoriaId: 2
    },
    {
        nombre: "Americano",
        precio: 35,
        descripcion: "Salchicha de pavo, queso blanco y amarillo, salami y piña",
        imagen: "hotdog",
        categoriaId: 2
    },
    {
        nombre: "Argentino",
        precio: 34,
        descripcion: "Salchicha de pavo, queso blanco y amarillo, champiñones y piña ",
        imagen: "hotdog",
        categoriaId: 2
    },
    {
        nombre: "Brasileño",
        precio: 74,
        descripcion: "Doble Pan, Carne de res, salchicha de pavo, queso blanco y amarillo,  salami, tocino, champiñones y piña",
        imagen: "hotdog",
        categoriaId: 2
    },
    {
        nombre: "Buenos Aires",
        precio: 34,
        descripcion: "Chorizo argentino, tocino  y queso",
        imagen: "papas",
        categoriaId: 2
    },
    {
        nombre: "El Norteño",
        precio: 65,
        descripcion: "Papas a la francesa, arrachera, queso cheddar, salsa martajada y un toque de aderezo de cilantro.",
        imagen: "papas",
        categoriaId: 3
    },
    {
        nombre: "Papastor",
        precio: 56,
        descripcion: "Papas a la francesa, pastor, queso cheddar, salsa roja-chipotle, aderezo de cilantro y mix de piña (piña en cubitos, cebolla y un toque que cilantro).",
        imagen: "papas",
        categoriaId: 3
    },
    {
        nombre: "Burger Bites",
        precio: 70,
        descripcion: "Papas a la francesa, burger bites, queso cheddar, mermelada de tocino papadictos, mayo, catsup y chiles en vinagre.",
        imagen: "papas",
        categoriaId: 3
    },
    {
        nombre: "Boneless",
        precio: 60,
        descripcion: "Papas a la francesa, boneless, queso cheddar, salsa buffalo y aderezo blue cheese.",
        imagen: "papas",
        categoriaId: 3
    },
    {
        nombre: "El Champi",
        precio: 34,
        descripcion: "Papas a la francesa, champiñones salteados con la receta de la casa, queso cheddar, aderezo blue cheese y un toque de perejil fresco.",
        imagen: "papas",
        categoriaId: 3
    },
    {
        nombre: "Papachuga",
        precio: 34,
        descripcion: "Papas a la francesa, pechuga de pollo con especias, queso cheddar, ranch y un toque de aderezo de cilantro.",
        imagen: "papas",
        categoriaId: 3
    },
    {
        nombre: "Papas Cocho",
        precio: 83,
        descripcion: "Queso blanco, amarillo, jamón, salami, tocino, champiñones, piña y salchicha",
        imagen: "papas",
        categoriaId: 3
    },
    {
        nombre: "Alitas Ranch",
        precio: 80,
        descripcion: "Aderezo Ranch",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Alitas Blue Cheese",
        precio: 80,
        descripcion: "Aderezo Blue Cheeze",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Alitas Salsa de queso",
        precio: 80,
        descripcion: "Salsa de queso",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Alitas BBQ de la Casa",
        precio: 80,
        descripcion: "Salasa BBQ de la Casa",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Alitas Teriyaqui",
        precio: 80,
        descripcion: "Salsa Ranch",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Alitas Buffalo Picante",
        precio: 80,
        descripcion: "Salsa Buffalo Picante",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Alitas Mango & Habanero",
        precio: 80,
        descripcion: "Salsa Mango & Habanero",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Alitas Lemon Pepper",
        precio: 80,
        descripcion: "Salsa Lemon Pepper",
        imagen: "alitas",
        categoriaId: 4
    },
    {
        nombre: "Malteada de Chocolate",
        precio: 60,
        descripcion: "Chocolate 500 ml",
        imagen: "malteada",
        categoriaId: 5
    },
    {
        nombre: "Malteada de Fresa",
        precio: 60,
        descripcion: "Fresa 500 ml",
        imagen: "malteada",
        categoriaId: 5
    },
    {
        nombre: "Malteada de Vainilla",
        precio: 60,
        descripcion: "Vainilla 500 ml",
        imagen: "malteada",
        categoriaId: 5
    },
    {
        nombre: "Cocho Malteada",
        precio: 60,
        descripcion: "Brownie 500 ml",
        imagen: "malteada",
        categoriaId: 5
    },
    {
        nombre: "Coca Cola",
        precio: 24,
        descripcion: "Refresco Coca Cola 600 ml",
        imagen: "bebida",
        categoriaId: 6
    },
    {
        nombre: "Pepsi",
        precio: 24,
        descripcion: "Refresco Pepsi 600 ml",
        imagen: "bebida",
        categoriaId: 6
    },
    {
        nombre: "Sprite",
        precio: 24,
        descripcion: "Refresco Sprite 600 ml",
        imagen: "bebida",
        categoriaId: 6
    },
    {
        nombre: "Horchata",
        precio: 32,
        descripcion: "Agua de Horchata 950 ml",
        imagen: "bebida",
        categoriaId: 6
    },
    {
        nombre: "Jamaica",
        precio: 32,
        descripcion: "Agua de Jamaica 950 ml",
        imagen: "bebida",
        categoriaId: 6
    },
    {
        nombre: "Tamarindo",
        precio: 32,
        descripcion: "Agua de Tamarindo 950 ml",
        imagen: "bebida",
        categoriaId: 6
    },
    {
        nombre: "Alfalfa",
        precio: 32,
        descripcion: "Agua de Alfalfa 950 ml",
        imagen: "bebida",
        categoriaId: 6
    },
]

export {
    productos
}