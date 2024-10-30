const seccionPlantas = document.querySelector('#plantas')
const itemsPerPage = 10;
let currentPage = 1;
const seccionCarrito = document.querySelector('#misplantas')

function printCarrito(plant, dom) {

    const article = document.createElement('article')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const button = document.createElement('button')
    const i = document.createElement('i')




    /*     <article>
            <figure>
                <img src="https://images.unsplash.com/photo-1632380211596-b96123618ca8?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Aloe Vera">
            </figure>
            <div class="descripcioncarrito">
                <h3>Aloe Vera</h3>
                <h4><span>2</span> x 10€</h4>
                <button id="borrararticulo"><i class="fa-solid fa-x"></i></button>
            </div>
        </article> */

}

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
