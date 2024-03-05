const display = document.querySelector("#display"); // llamamos pantalla
const buttons = document.querySelectorAll("button"); // llamamos botones

let arrayDisplay = display.value.split('');

let resultadoMostrado = false; // true o false
let ultimoResultado = 0; // el ultimo valor de resultado

buttons.forEach((btn) => { // por cada boton
    btn.addEventListener("click", () => { //clicado, hacemos
        if(btn.id === "=") { //si el boton es igual a igual
            try {
                display.value = eval(display.value); // me evalua el contenido de la pantalla
                ultimoResultado = display.value; // guardo el ultimo resultado
                resultadoMostrado = true; // el resultado se muestra
            }
            catch(error){
                display.value = "Error" //da error si la evaluacion no es correcta
            }
        } 

        else if (btn.id === "ac") { // si el boton es igual a ac
            display.value = ""; // me devuelve nada
        } 
        
        else if (btn.id == "del") { // si el boton es igual a del
            display.value = display.value.slice(0, -1); // recortas el valor en una unidad
            arrayDisplay.pop(); // eliminas el ultimo valor del array
        }

        else if (btn.id === '.') { // si ya existe un punto en pantalla
            if (arrayDisplay[arrayDisplay.length - 1] !== '.') {
                display.value += btn.id;
                arrayDisplay.push(btn.id);
            }
        }

        else if (display.value === '0') { //si el valor de pantalla es cero
            display.value = btn.id; // se sustituye por el boton clicado siguiente
        }

        else if (display.value.includes('Error')) { //si en la pantalla hay error
            display.value = btn.id; // reiniciar con el siguietne boton
        }

        else if (btn.id === '+' || btn.id === '-' || btn.id === '*' || btn.id === '/') {
            if (resultadoMostrado) {
                display.value = ultimoResultado + btn.id; // se sustituye por el boton clicado siguiente
                resultadoMostrado = false;
            } else {
                display.value += btn.id; // que se sumen uno al lado de otro los botones clicados
                arrayDisplay.push(btn.id); // agregar el nuevo valor al array
            }
        }

        else {
            if (resultadoMostrado) {
                display.value = btn.id; // se sustituye por el boton clicado siguiente
                arrayDisplay = [btn.id]; // reiniciar el array con el nuevo valor
                resultadoMostrado = false; // reiniciar el indicador de resultado mostrado
            } else {
                display.value += btn.id; // que se sumen uno al lado de otro los botones clicados
                arrayDisplay.push(btn.id); // agregar el nuevo valor al array
            }
        }
    });

});