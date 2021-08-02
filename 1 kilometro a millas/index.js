// Necesitamos crear una página que nos ayude a convertir los valores de kilómetros a millas y viceversa ,
//  se espera que la misma:

// tenga dos inputs, uno para el valor de kilómetros y otro para el de millas;
// cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada.
//  Consideraciones:

// Tanto kilómetros como millas deben tener un id con su nombre, por ejemplo para kilómetros el id deberá ser kilometros;
// Tené en cuenta que un kilómetro es 0.62 millas, y una milla es 1.61 kilómetros.

const kilometros = document.getElementById("kilometros")
const millas = document.getElementById("millas")

kilometros.oninput = () => { 
    kilometrosAMillas = kilometros.value * 0.62
    millas.value = kilometrosAMillas

}

millas.oninput = () => {
    millasAKilometros = millas.value * 1.61
    kilometros.value = millasAKilometros
}




