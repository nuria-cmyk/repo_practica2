const seccionPlantas = document.querySelector('#plantas')
const itemsPerPage = 20;
let currentPage = 1;

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


printAllPlants(plantas, seccionPlantas)