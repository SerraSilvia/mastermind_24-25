//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";


//Declaración de variables globales.
let master = [];
let userCombi = [];
var intento = 0;
var aciertos = 0;

function init() {
    //Aĺmacenaremos el resultado en una variable
    let result = document.querySelector('#result');

    //1. Llama al código random del master
    master = generaAleatorio();
    console.log(master);

    //2. Crea todas las filas según el número de intentos.
    crearFilas();

}

function generaAleatorio(){

        //1. Genera el código random del master
        let combiGanadora = [];

        for(let i = 0; i< MAX_COMBI_COLORES; i++){
            let coloresAleatorios = COLORS[Math.floor(Math.random()* COLORS.length)];
            combiGanadora.push(coloresAleatorios);
        }
        return combiGanadora;
}


function crearFilas() {

    // Creamos filas según intentos
    for (let i = 0; i < MAX_INTENTOS; i++) {
        let filas = document.querySelector("#Result");
        // Insertar el HTML de la fila del intento
        filas.innerHTML += ROW_RESULT;
    }
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {
}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
   
}


/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex wrap">
    <div class="rowUserCombi w75 flex wrap">
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
       <div class="w40 h40">
            <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
    </div>
</div>`;