//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";

const msj_sinIntentos = "No tienes más intentos :( "
const msj_acertado = "Has acertado! Enhorabuena! :D "
const msj_intento = "Intentos restantes: "

//Declaración de variables globales.
let master = [];
let userCombi = [];
var intento = 0;
var aciertos = 0;

function init() {
    //Aĺmacenaremos el resultado en una variable
    let result = document.querySelector('#result');

    //1. Llama al código random del master
    generaAleatorio();
    console.log(master);

    //2. Crea todas las filas según el número de intentos.
    crearFilas();

}

function generaAleatorio() {
    //1. Genera el código random del master
    for (let i = 0; i < MAX_COMBI_COLORES; i++) {
        let coloresAleatorios = COLORS[Math.floor(Math.random() * COLORS.length)];
        master.push(coloresAleatorios);
    }
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
    if (userCombi.length < 4 ) return;

    if(intento + 1 >= MAX_INTENTOS) {
        document.querySelector("#info").textContent = msj_sinIntentos;
        revelarCombinacion();
        return
    }

    if (comprobarCombinacion()){
        document.querySelector("#info").textContent = msj_acertado;
    }else{
        intento++;
        userCombi = [];
        document.querySelector("#info").textContent = msj_intento + (MAX_INTENTOS - intento);
    }    
}

// Revelar la combinación ganadora
function revelarCombinacion() {
    for (let color in master){
     let mostrarMaster= document.querySelectorAll("#master .w100 .w25");
      mostrarMaster[color].querySelector(".cel").style.background = master[color];
    }
}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    //Máximo 4 colores
    if (userCombi.length >= 4) return;

    //Agregar color a la combinación del user
    userCombi.push(color);

    let rowResults = document.querySelectorAll("#Result div.rowResult");

    let rowIntento = rowResults[intento];

    let celda = rowIntento.querySelectorAll(".rowUserCombi div.w25");

    celda[userCombi.length - 1].querySelector('.celUserCombi').style.background = color;
}

function comprobarCombinacion() {
    let aciertos = 0;

    for (let color in userCombi) {
        let posColor = master.indexOf(userCombi[color])
        if(posColor != -1){
            //el color existe
            if(color == posColor){
               circuloColor(color).style.background = BLACK
               aciertos++;
            }else{
                circuloColor(color).style.background = WHITE
            }
        }else{
            //el color no existe
            circuloColor(color).style.background = GREY
        }
    }
    return aciertos == 4;
}

//devolver el elemento a pintar
function circuloColor(color){
    let rowResults = document.querySelectorAll("#Result div.rowResult");
    let rowIntento = rowResults[intento];
    let celda = rowIntento.querySelectorAll(".rowCercleResult div.w40");
    return celda[color].querySelector('.cercleResult')
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