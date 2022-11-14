'use strict'

const portada    = document.querySelector('.portada__grande')
const opcion     = document.querySelectorAll('.opcion')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
opcion.forEach( ( cadaOpcion , i )=> {
    // Asignamos un CLICK a cadaPunto
    opcion[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.33

        // MOVEMOS el grand
        portada.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        opcion.forEach( ( cadaOpcion , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            opcion[i].classList.remove('seleccionado')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        opcion[i].classList.add('seleccionado')

    })
})