// Vamos a crear una página que nos ayude a formar distintos colores , se espera que la misma:

// tenga tres inputs numéricos, con valor mínimo 0 y valor máximo 255, el primero para el valor R (red), 
// el siguiente para el valor G (green) y último para el valor B (blue);
// todos los inputs comiencen con el valor 255;
// cuando se modifica algún input, se cambie el color de fondo del body con el color que se forma a partir 
// de dichos valores.


let inputRed = document.getElementById("red");
let inputGreen = document.getElementById("green");
let inputBlue = document.getElementById("blue");
let fondoBody = document.querySelector ("body");

const formarColores = (event) => {
    let red = inputRed.value
    let green = inputGreen.value
    let blue = inputBlue.value
    console.log("valor red:" + red + " valor green:"+green+ " valor blue:"+blue)
    console.log("rgb(" + red + "," + green + "," + blue + ")")
    fondoBody.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}

inputRed.addEventListener("change", formarColores)
inputGreen.addEventListener("change", formarColores)
inputBlue.addEventListener("change",formarColores)

