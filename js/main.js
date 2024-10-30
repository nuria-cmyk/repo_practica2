const seccionPlantas = document.querySelector('#plantas')
const itemsPerPage = 10;
let currentPage = 1;
const seccionCarrito = document.querySelector('#misplantas')

function printOnePlantCarrito(plant, dom) {

    const article = document.createElement('article')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const button = document.createElement('button')

    img.src = plant.imagen
    img.alt = plant.nombre
    div.classList.add('descripcioncarrito')
    h3.textContent = plant.nombre
    h4.innerHTML = `<span>${plant.stock}</span> x ${plant.precio}€`
    button.id = 'borrararticulo'
    button.innerHTML = `<i class="fa-solid fa-x"></i>`

    figure.appendChild(img)
    div.append(h3, h4, button)
    article.append(figure, div)
    dom.appendChild(article)

}
printOnePlantCarrito(plantas[0], seccionCarrito)
printOnePlantCarrito(plantas[1], seccionCarrito)
printOnePlantCarrito(plantas[2], seccionCarrito)
printOnePlantCarrito(plantas[3], seccionCarrito)

function printOnePlant(plant, dom) {

    const article = document.createElement('article')
    const figure = document.createElement('figure')
    const imagen = document.createElement('img')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const h4 = document.createElement('h4')
    const botonanadircarrito = document.createElement('button')

    imagen.src = plant.imagen
    imagen.alt = plant.nombre
    h3.textContent = plant.nombre
    p.textContent = plant.descripcion
    h4.textContent = `Precio: ${plant.precio}€`
    botonanadircarrito.id = 'anadircarrito'
    botonanadircarrito.textContent = 'Añadir al carrito'
    botonanadircarrito.addEventListener('click', () => printCarrito(plant, dom))

    figure.appendChild(imagen)
    article.append(figure, h3, p, h4, botonanadircarrito)
    dom.appendChild(article)
}
function printAllPlants(list, dom) {
    dom.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const plantsToShow = list.slice(start, end);
    plantsToShow.forEach(plant => printOnePlant(plant, dom));

}
/* const itemsPerPage = 20;
let currentPage = 1; */
function nextPage(list) {
    if (currentPage < Math.ceil(list.length / itemsPerPage)) {
        currentPage++;
        printAllPlants(list, seccionPlantas);
    }
}

function prevPage(list) {
    if (currentPage > 1) {
        currentPage--;
        printAllPlants(list, seccionPlantas);
    }
}

document.querySelector('#paginacion button:first-child').addEventListener('click', () => prevPage(plantas));
document.querySelector('#paginacion button:last-child').addEventListener('click', () => nextPage(plantas));

const carrito = document.querySelector('#carrito')
carrito.addEventListener('click', abrirCarrito)
const ventanaCarrito = document.querySelector('.carrito')

function abrirCarrito() {
    ventanaCarrito.style.display = 'flex'
    ventanaCarrito.style.opacity = 1
    ventanaCarrito.style.transition = '1s'
}

const btnCerrar = ventanaCarrito.querySelector('.cerrar')
btnCerrar.addEventListener('click', cerrarCarrito)
function cerrarCarrito() {
    ventanaCarrito.style.display = 'none'
    ventanaCarrito.style.opacity = 0
    ventanaCarrito.style.transition = '1s'
}



printAllPlants(plantas, seccionPlantas)
