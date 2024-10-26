const plantas = [
    {
        id: 1,
        nombre: "Aloe Vera",
        descripcion: "Planta suculenta medicinal",
        precio: 10,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1632380211596-b96123618ca8?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        nombre: "Cactus Echinopsis",
        descripcion: "Cactus pequeño y resistente",
        precio: 8,
        stock: 25,
        imagen: "https://images.unsplash.com/photo-1623050095430-480240c0c463?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        nombre: "Helecho",
        descripcion: "Planta de interior de fácil cuidado",
        precio: 12,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1474139346426-aa184093f6d0?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        nombre: "Lavanda",
        descripcion: "Planta aromática y relajante",
        precio: 15,
        stock: 20,
        imagen: "https://images.unsplash.com/photo-1531112998639-59af23e7a65e?q=80&w=991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        nombre: "Orquídea",
        descripcion: "Planta de flores exóticas",
        precio: 18,
        stock: 5,
        imagen: "https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        nombre: "Monstera Deliciosa",
        descripcion: "Planta tropical de grandes hojas",
        precio: 25,
        stock: 12,
        imagen: "https://images.unsplash.com/photo-1604866830513-d54766457f45?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        nombre: "Poto",
        descripcion: "Planta colgante de interior",
        precio: 9,
        stock: 30,
        imagen: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        nombre: "Sansevieria",
        descripcion: "Planta resistente de hojas alargadas",
        precio: 13,
        stock: 18,
        imagen: "https://images.unsplash.com/photo-1599719840163-1cd5b7c1fabe?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        nombre: "Bambú de la Suerte",
        descripcion: "Pequeña planta de interior",
        precio: 5,
        stock: 50,
        imagen: "https://images.unsplash.com/photo-1585155839850-9546d90dbb74?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        nombre: "Palmera Areca",
        descripcion: "Palmera decorativa de interior",
        precio: 22,
        stock: 7,
        imagen: "https://plus.unsplash.com/premium_photo-1681256187605-2d66160926a2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 11,
        nombre: "Hiedra",
        descripcion: "Planta trepadora de hoja verde",
        precio: 10,
        stock: 20,
        imagen: "https://images.unsplash.com/photo-1470049454586-e5301a4b53d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        nombre: "Rosal",
        descripcion: "Arbusto de flores coloridas",
        precio: 16,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1523423020839-947b35c1b96d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 13,
        nombre: "Jazmín",
        descripcion: "Planta aromática con flores blancas",
        precio: 18,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1701757526886-8c099a9972f8?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        nombre: "Calathea",
        descripcion: "Planta de hojas decorativas",
        precio: 20,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1599463099031-d6b8a407a501?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 15,
        nombre: "Ficus",
        descripcion: "Árbol de interior de fácil cuidado",
        precio: 28,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1615536183083-47dfdd76b10b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 16,
        nombre: "Dracaena",
        descripcion: "Planta resistente de hojas largas",
        precio: 17,
        stock: 25,
        imagen: "https://images.unsplash.com/photo-1671587527878-0b171683caba?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 17,
        nombre: "Crotón",
        descripcion: "Planta colorida de hojas gruesas",
        precio: 14,
        stock: 12,
        imagen: "https://images.unsplash.com/photo-1657082137442-c12169e8bfb9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 18,
        nombre: "Begonia",
        descripcion: "Planta de flores y hojas vistosas",
        precio: 11,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1603504988681-9e5e811f3f30?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 19,
        nombre: "Peperomia",
        descripcion: "Pequeña planta de interior",
        precio: 7,
        stock: 30,
        imagen: "https://images.unsplash.com/photo-1631038093615-8dc919a6336b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 20,
        nombre: "Alocasia",
        descripcion: "Planta exótica de hojas grandes",
        precio: 22,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1701266780639-d1471199cde0?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 21,
        nombre: "Hoya",
        descripcion: "Planta de interior con hojas gruesas",
        precio: 15,
        stock: 20,
        imagen: "https://images.unsplash.com/photo-1610816658822-7054998a82ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 22,
        nombre: "Costilla de Adán",
        descripcion: "Planta tropical de hojas partidas",
        precio: 25,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 23,
        nombre: "Aralia",
        descripcion: "Arbusto con hojas decorativas",
        precio: 16,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1518814723866-2541e2032ef1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 24,
        nombre: "Echeveria",
        descripcion: "Pequeña planta suculenta",
        precio: 6,
        stock: 40,
        imagen: "https://images.unsplash.com/photo-1642778771770-07e2afdd5187?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 25,
        nombre: "Pilea",
        descripcion: "Planta de interior con hojas redondas",
        precio: 12,
        stock: 18,
        imagen: "https://plus.unsplash.com/premium_photo-1661694315539-5c4bf1002ba3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 26,
        nombre: "Zamioculca",
        descripcion: "Planta resistente y decorativa",
        precio: 20,
        stock: 12,
        imagen: "https://images.unsplash.com/photo-1715358405679-9b0dc9270c7b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 27,
        nombre: "Tradescantia",
        descripcion: "Planta colgante colorida",
        precio: 9,
        stock: 22,
        imagen: "https://images.unsplash.com/photo-1660076828224-0d063860fc49?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 28,
        nombre: "Aglaonema",
        descripcion: "Planta de hojas vistosas",
        precio: 14,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1729655855474-fee6907721d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 29,
        nombre: "Diefembaquia",
        descripcion: "Planta de hojas grandes y coloridas",
        precio: 15,
        stock: 20,
        imagen: "https://plus.unsplash.com/premium_photo-1673242570845-51e4f04a0494?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 30,
        nombre: "Pachira",
        descripcion: "Planta de la suerte con tronco trenzado",
        precio: 19,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1633789242668-886f4098ea1c?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 31,
        nombre: "Anthurium",
        descripcion: "Planta de flores rojas y hojas verdes",
        precio: 18,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1704114056547-0a36b098f636?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 32,
        nombre: "Planta del Dinero",
        descripcion: "Planta que atrae buena suerte",
        precio: 5,
        stock: 50,
        imagen: "https://plus.unsplash.com/premium_photo-1674237276501-595398f90f87?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 33,
        nombre: "Calanchoe",
        descripcion: "Planta de flores pequeñas",
        precio: 10,
        stock: 25,
        imagen: "https://images.unsplash.com/photo-1558502187-d883ac019745?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 34,
        nombre: "Espatifilo",
        descripcion: "Planta de interior con flores blancas",
        precio: 13,
        stock: 22,
        imagen: "https://images.unsplash.com/photo-1609652433232-3e85274aea3b?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 35,
        nombre: "Bonsái",
        descripcion: "Árbol miniatura cultivado en maceta",
        precio: 40,
        stock: 5,
        imagen: "https://images.unsplash.com/photo-1526397751294-331021109fbd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
