const seccionPlantas = document.querySelector('#plantas')

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
    list.forEach(plant => printOnePlant(plant, dom))
}
printAllPlants(plantas, seccionPlantas)