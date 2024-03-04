const display = document.querySelector("#display"); // llamamos pantalla
const buttons = document.querySelectorAll("button"); // llamamos botones
const operator = document.querySelector('.operador');

buttons.forEach((btn) => { // por cada boton
    btn.addEventListener("click", () => { //clicado, hacemos
        if(btn.id === "=") { //si el boton es igual a igual
            try {
                display.value = eval(display.value); // me evalua el contenido de la pantalla
            }
            catch(error){
                display.value = "Error" //da error si la evaluacion no es correcta
            }
        } 

        else if (btn.id === "ac") { // si el boton es igual a ac
            display.value = ""; // me devuelve nada
        } 
        
        else if (btn.id == "del") { // si el boton es igual a del
            display.value = display.value.slice(0, -1); // recortas el valor e una unidad
        }

        else if (btn.id === '.' && display.value.includes('.')) { // si ya existe un punto en pantalla
            display.value + btn.id; // escribir el botón siguiente
        }

        else if (display.value === '0') { //si el valor de pantalla es cero
            display.value = btn.id; // se sustituye por el boton clicado siguiente
        }

        else if (display.value.includes('Error')) { //si en la pantalla hay error
            display.value = btn.id; // reiniciar con el siguietne boton
        }

        else {
            display.value += btn.id; // que se sumen uno al lado de otro los botones clicados
        }

    });

});


// problemas:
// no puedo poner decimales en mas de un numero
// luego del igual sumo digitos
// solucion: limpiar pantalla
// puedo poner mas de un operador seguido, repetir punto, pero mismo problema