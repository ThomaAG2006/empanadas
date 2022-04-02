let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)

function escuchar(event){

    event.preventDefault()

    console.log("hizo click")
    
    let empanadas=document.getElementById("empanadas").value
    console.log (empanadas)


    let nombre=document.getElementById("nombre").value
    console.log (nombre)



    let cedula=document.getElementById("cedula").value
    console.log (cedula)



    let correo=document.getElementById("correo").value
    console.log (correo)

    if(empanadas=="carne"){
        alert("Su total a pagar es: $2500")
    }
    else if(empanadas=="paisa"){
        alert("Su total a pagar es: $5000")
    }
    else if(empanadas=="queso"){
        alert("Su total a pagar es: $5000")
    }
    else if(empanadas=="ranchera"){
        alert("Su total a pagar es: $3500")
    }
    else if(empanadas=="papa"){
        alert("Su total a pagar es: $2000")
    }
}
