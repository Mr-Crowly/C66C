'use strict'

const portada    = document.querySelector('.portada__grande')
const opcion     = document.querySelectorAll('.opcion')

opcion.forEach( ( cadaOpcion , i )=> {
    
    opcion[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -33.33

        portada.style.transform = `translateX(${ operacion }%)`

        opcion.forEach( ( cadaOpcion , i )=>{
            opcion[i].classList.remove('seleccionado')
        })
        
        opcion[i].classList.add('seleccionado')
    })
})