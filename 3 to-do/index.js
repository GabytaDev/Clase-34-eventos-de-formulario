// Necesitamos crear una página para enlistar nuestras tareas , se espera que la misma:

// tenga un input, un botón que diga Crear TO-DO y una lista;
// al presionar el botón, si el input no está vacío, se agregue un ítem a la 
// lista con el contenido del input y se borre el contenido del input.

let inputTexto = document.getElementById("input-texto");
const boton = document.getElementById("boton-lista");
const ul = document.getElementById("ul")


const mostrarLista = () => {
    console.log(inputTexto.value)

    if(inputTexto.value != "") { //comprueba si el input no esta vacio
        const li = document.createElement("li") //crea en el documento un elemento li
        li.appendChild(document.createTextNode(inputTexto.value))//crea el texto con el valor del input y lo pone dentro de li
        li.setAttribute("id", inputTexto.value) //le damos atributo de id con el mismo valor del input
        ul.appendChild(li) //le asigana al ul el hijo li q creamos antes
    }
}


boton.addEventListener("click", mostrarLista);