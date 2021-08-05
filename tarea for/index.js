


// for (let i = 2; i <= 100 ; i += 2){
//     console.log(i)
// }



// for (let i = 1000; i >= 1 ; i --){
//     console.log(i)
// }

// for (let i = 100; i >= 1; i-= 3){
//     console.log(i)
// }

// let alumnas = ["ana", "paula","gaby","mariana"];

// for (let i=0;i<4; i++){
//     console.log(alumnas[i]) //va al array y se fija que hay en la posicion i y muestra lo hay en cada posicion a medida q va cambiando el valor de i
// }

let parrafos = document.querySelectorAll(".parrafo") //selecciono todas las clases del html
console.log(parrafos) //muestra un array con los elementos 

parrafos[0].onclick = () => {
    for (let i=0; i < parrafos.length; i++){
        parrafos[i].style.color = "green"
    }
    
}

parrafos[1].onclick = () => {
    
    for (let i=1; i < parrafos.length; i+=2){
        parrafos[i].style.color = "blue"
    }
    for (let i=0; i < parrafos.length; i+=2){
        parrafos[i].style.color = "orange"
    }
    
}

parrafos[2].onclick = () => {

    for (let i=0; i < parrafos.length; i++){
        if(i/2 == 0){
            parrafos[i].style.color = "blue"
        }else {
            parrafos[i].style.color = "orange"
        }        
    }
}


