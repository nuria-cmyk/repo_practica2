const plantas = [
    {
        id: 1,
        nombre: "Aloe Vera",
        descripcion: "Planta suculenta medicinal",
        precio: 10,
        stock: 15,
        imagen: "https://images.pexels.com/photos/1819613/pexels-photo-1819613.jpeg"
    },
    {
        id: 2,
        nombre: "Cactus Echinopsis",
        descripcion: "Cactus pequeño y resistente",
        precio: 8,
        stock: 25,
        imagen: "https://images.pexels.com/photos/5928/nature-plant-cactus-cacti.jpg"
    },
    {
        id: 3,
        nombre: "Helecho",
        descripcion: "Planta de interior de fácil cuidado",
        precio: 12,
        stock: 10,
        imagen: "https://images.pexels.com/photos/932099/pexels-photo-932099.jpeg"
    },
    {
        id: 4,
        nombre: "Lavanda",
        descripcion: "Planta aromática y relajante",
        precio: 15,
        stock: 20,
        imagen: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg"
    },
    {
        id: 5,
        nombre: "Orquídea",
        descripcion: "Planta de flores exóticas",
        precio: 18,
        stock: 5,
        imagen: "https://images.pexels.com/photos/1180961/pexels-photo-1180961.jpeg"
    },
    {
        id: 6,
        nombre: "Monstera Deliciosa",
        descripcion: "Planta tropical de grandes hojas",
        precio: 25,
        stock: 12,
        imagen: "https://images.pexels.com/photos/3672968/pexels-photo-3672968.jpeg"
    },
    {
        id: 7,
        nombre: "Poto",
        descripcion: "Planta colgante de interior",
        precio: 9,
        stock: 30,
        imagen: "https://images.pexels.com/photos/7869515/pexels-photo-7869515.jpeg"
    },
    {
        id: 8,
        nombre: "Sansevieria",
        descripcion: "Planta resistente de hojas alargadas",
        precio: 13,
        stock: 18,
        imagen: "https://images.pexels.com/photos/5699663/pexels-photo-5699663.jpeg"
    },
    {
        id: 9,
        nombre: "Bambú de la Suerte",
        descripcion: "Pequeña planta de interior",
        precio: 5,
        stock: 50,
        imagen: "https://images.pexels.com/photos/458930/pexels-photo-458930.jpeg"
    },
    {
        id: 10,
        nombre: "Palmera Areca",
        descripcion: "Palmera decorativa de interior",
        precio: 22,
        stock: 7,
        imagen: "https://images.pexels.com/photos/1401343/pexels-photo-1401343.jpeg"
    },
    {
        id: 11,
        nombre: "Hiedra",
        descripcion: "Planta trepadora de hoja verde",
        precio: 10,
        stock: 20,
        imagen: "https://images.pexels.com/photos/7212560/pexels-photo-7212560.jpeg"
    },
    {
        id: 12,
        nombre: "Rosal",
        descripcion: "Arbusto de flores coloridas",
        precio: 16,
        stock: 10,
        imagen: "https://images.pexels.com/photos/1507636/pexels-photo-1507636.jpeg"
    },
    {
        id: 13,
        nombre: "Jazmín",
        descripcion: "Planta aromática con flores blancas",
        precio: 18,
        stock: 8,
        imagen: "https://images.pexels.com/photos/156917/pexels-photo-156917.jpeg"
    },
    {
        id: 14,
        nombre: "Calathea",
        descripcion: "Planta de hojas decorativas",
        precio: 20,
        stock: 10,
        imagen: "https://images.pexels.com/photos/6969785/pexels-photo-6969785.jpeg"
    },
    {
        id: 15,
        nombre: "Ficus",
        descripcion: "Árbol de interior de fácil cuidado",
        precio: 28,
        stock: 15,
        imagen: "https://images.pexels.com/photos/5823573/pexels-photo-5823573.jpeg"
    },
    {
        id: 16,
        nombre: "Dracaena",
        descripcion: "Planta resistente de hojas largas",
        precio: 17,
        stock: 25,
        imagen: "https://images.pexels.com/photos/5699663/pexels-photo-5699663.jpeg"
    },
    {
        id: 17,
        nombre: "Crotón",
        descripcion: "Planta colorida de hojas gruesas",
        precio: 14,
        stock: 12,
        imagen: "https://images.pexels.com/photos/6667583/pexels-photo-6667583.jpeg"
    },
    {
        id: 18,
        nombre: "Begonia",
        descripcion: "Planta de flores y hojas vistosas",
        precio: 11,
        stock: 15,
        imagen: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg"
    },
    {
        id: 19,
        nombre: "Peperomia",
        descripcion: "Pequeña planta de interior",
        precio: 7,
        stock: 30,
        imagen: "https://images.pexels.com/photos/6208083/pexels-photo-6208083.jpeg"
    },
    {
        id: 20,
        nombre: "Alocasia",
        descripcion: "Planta exótica de hojas grandes",
        precio: 22,
        stock: 10,
        imagen: "https://images.pexels.com/photos/2519371/pexels-photo-2519371.jpeg"
    },
    {
        id: 21,
        nombre: "Hoya",
        descripcion: "Planta de interior con hojas gruesas",
        precio: 15,
        stock: 20,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    },
    {
        id: 22,
        nombre: "Costilla de Adán",
        descripcion: "Planta tropical de hojas partidas",
        precio: 25,
        stock: 8,
        imagen: "https://images.pexels.com/photos/3277483/pexels-photo-3277483.jpeg"
    },
    {
        id: 23,
        nombre: "Aralia",
        descripcion: "Arbusto con hojas decorativas",
        precio: 16,
        stock: 15,
        imagen: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
    },
    {
        id: 24,
        nombre: "Echeveria",
        descripcion: "Pequeña planta suculenta",
        precio: 6,
        stock: 40,
        imagen: "https://images.pexels.com/photos/381981/pexels-photo-381981.jpeg"
    },
    {
        id: 25,
        nombre: "Pilea",
        descripcion: "Planta de interior con hojas redondas",
        precio: 12,
        stock: 18,
        imagen: "https://images.pexels.com/photos/6208083/pexels-photo-6208083.jpeg"
    },
    {
        id: 26,
        nombre: "Zamioculca",
        descripcion: "Planta resistente y decorativa",
        precio: 20,
        stock: 12,
        imagen: "https://images.pexels.com/photos/1563255/pexels-photo-1563255.jpeg"
    },
    {
        id: 27,
        nombre: "Tradescantia",
        descripcion: "Planta colgante colorida",
        precio: 9,
        stock: 22,
        imagen: "https://images.pexels.com/photos/1451667/pexels-photo-1451667.jpeg"
    },
    {
        id: 28,
        nombre: "Aglaonema",
        descripcion: "Planta de hojas vistosas",
        precio: 14,
        stock: 10,
        imagen: "https://images.pexels.com/photos/6208083/pexels-photo-6208083.jpeg"
    },
    {
        id: 29,
        nombre: "Diefembaquia",
        descripcion: "Planta de hojas grandes y coloridas",
        precio: 15,
        stock: 20,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    },
    {
        id: 30,
        nombre: "Pachira",
        descripcion: "Planta de la suerte con tronco trenzado",
        precio: 19,
        stock: 15,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    },
    {
        id: 31,
        nombre: "Anthurium",
        descripcion: "Planta de flores rojas y hojas verdes",
        precio: 18,
        stock: 8,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    },
    {
        id: 32,
        nombre: "Planta del Dinero",
        descripcion: "Planta que atrae buena suerte",
        precio: 5,
        stock: 50,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    },
    {
        id: 33,
        nombre: "Calanchoe",
        descripcion: "Planta de flores pequeñas",
        precio: 10,
        stock: 25,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    },
    {
        id: 34,
        nombre: "Espatifilo",
        descripcion: "Planta de interior con flores blancas",
        precio: 13,
        stock: 22,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    },
    {
        id: 35,
        nombre: "Bonsái",
        descripcion: "Árbol miniatura cultivado en maceta",
        precio: 40,
        stock: 5,
        imagen: "https://images.pexels.com/photos/276261/pexels-photo-276261.jpeg"
    }
];
