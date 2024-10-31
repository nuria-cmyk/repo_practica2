const seccionPlantas = document.querySelector('#plantas');
const seccionCarrito = document.querySelector('#misplantas');
const subtotalSpan = document.querySelector('.subtotal span');
const itemsPerPage = 10;
let currentPage = 1;
const carritoItems = [];

function printOnePlant(plant, dom) {

    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const imagen = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const h4 = document.createElement('h4');
    const botonanadircarrito = document.createElement('button');

    imagen.src = plant.imagen;
    imagen.alt = plant.nombre;
    h3.textContent = plant.nombre;
    p.textContent = plant.descripcion;
    h4.textContent = `Precio: ${plant.precio}€`;
    botonanadircarrito.id = 'anadircarrito';
    botonanadircarrito.dataset.id = plant.id;
    botonanadircarrito.textContent = 'Añadir al carrito';
    botonanadircarrito.addEventListener('click', addCarrito);

    figure.appendChild(imagen);
    article.append(figure, h3, p, h4, botonanadircarrito);
    dom.appendChild(article);

}

function printAllPlants(list, dom) {

    dom.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const plantsToShow = list.slice(start, end);
    plantsToShow.forEach(plant => printOnePlant(plant, dom));

}

function pintarCarrito() {

    seccionCarrito.innerHTML = '';
    carritoItems.forEach(item => {
        const article = document.createElement('article');
        article.id = `item-${item.id}`;
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const button = document.createElement('button');

        img.src = item.imagen;
        img.alt = item.nombre;
        div.classList.add('descripcioncarrito');
        h3.textContent = item.nombre;
        h4.innerHTML = `<span class="cantidad">${item.cantidad}</span> x ${item.precio}€`;
        button.id = 'borrararticulo'
        button.innerHTML = `<i class="fa-solid fa-x"></i>`;
        button.addEventListener('click', () => borrarElementoCarrito(item.id));

        figure.appendChild(img);
        div.append(h3, h4, button);
        article.append(figure, div);
        seccionCarrito.appendChild(article);
    });

}

function addCarrito(event) {

    const plantId = Number(event.target.dataset.id);
    const plant = plantas.find(planta => planta.id === plantId);
    const existingItem = carritoItems.find(item => item.id === plantId);

    if (!existingItem) {

        if (plant.stock > 0) {
            carritoItems.push({ ...plant, cantidad: 1 });
        } else {
            alert('No queda stock');
        }
    } else if (existingItem.cantidad < plant.stock) {

        existingItem.cantidad += 1;
    } else {
        alert('No hay stock');
    }

    pintarCarrito();
    calcularSubtotalCarrito();
}

function borrarElementoCarrito(plantId) {

    const index = carritoItems.findIndex(item => item.id === plantId);

    if (index !== -1) {
        carritoItems.splice(index, 1);
    }

    pintarCarrito();
    calcularSubtotalCarrito();
}

function calcularSubtotalCarrito() {

    const subtotal = carritoItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    subtotalSpan.textContent = `${subtotal}€`;
}


const carrito = document.querySelector('#carrito');
const ventanaCarrito = document.querySelector('.carrito');
const btnCerrar = ventanaCarrito.querySelector('.cerrar');

carrito.addEventListener('click', abrirCarrito);
btnCerrar.addEventListener('click', cerrarCarrito);

function abrirCarrito() {

    ventanaCarrito.style.display = 'flex';
    ventanaCarrito.style.opacity = 1;
    ventanaCarrito.style.transition = '1s';

}

function cerrarCarrito() {

    ventanaCarrito.style.display = 'none';
    ventanaCarrito.style.opacity = 0;
    ventanaCarrito.style.transition = '1s';

}

const btnFinalizarCompra = document.querySelector('#finalizarcompra');
btnFinalizarCompra.addEventListener('click', finalizarCompra);

function finalizarCompra() {

    if (carritoItems.length === 0) {
        alert('El carrito esta vacio');
    } else {
        alert('¡Gracias por tu compra! :)');
        carritoItems.length = 0;
        pintarCarrito();
        calcularSubtotalCarrito();
    }

}

document.querySelector('#paginacion button:first-child').addEventListener('click', () => prevPage(plantas));
document.querySelector('#paginacion button:last-child').addEventListener('click', () => nextPage(plantas));

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


printAllPlants(plantas, seccionPlantas);
