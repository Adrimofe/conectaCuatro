/**Tablero de 7x6 (7 en el eje "x" y 6 en el "y").
Fichas Rojas y Amarillas. La primera partida la comienza siempre la Roja (la segunda la Amarilla, la tercera la Roja...).
No hay que implementar una funcionalidad que te permita jugar contra la App. Se asume que jugarán dos personas reales alternándose.
Al seleccionar la columna se coloca la ficha en la parte inferior.
Guardar el número partidas ganadas de cada equipo mientras la App no se finaliza.
Dos botones para reiniciar la partida en marcha y para resetear el contador de victorias y derrotas.
Puedes añadirle todas las funcionalidades extra que consideres. */

const fichas = document.getElementsByClassName('tablero__casilla');
const rojo = "background-color: red";
const amarillo = "background-color: yellow";
const blanco = "background-color: white";
let acumulador = 0;
const ZERO = 0;
/*Verticales que contienen las cifras de cada una para comprobar campos */
const verticalUno = [0, 6, 12, 18, 24, 30, 36];
const verticalDos = [1, 7, 13, 19, 25, 31, 37];
const verticalTres = [2, 8, 14, 20, 26, 32, 38];
const verticalCuatro = [3, 9, 15, 21, 27, 33, 39];
const verticalCinco = [4, 10, 16, 22, 28, 34, 40];
const verticalSeis = [5, 11, 17, 23, 29, 35, 41];
const conjuntoFichas = [];
class ficha {
    constructor(numero) {
        this._numero = numero;
    }
    _color = "blanco";
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    _numero = 0;
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    _activo = false;
    get activo() {
        return this._activo;
    }
    set activo(value) {
        this._activo = value;
    }
}

for (let index = 0; index < 42; index++) {
    conjuntoFichas.push(new ficha(index));
}
let verticalEncontrada = 0;
for (let index = 0; index < fichas.length; index++) {
    const element = fichas[index];
    element.addEventListener('click', (e) => {
        verticalEncontrada = checkVerticalContainsSelectedNum(e.target.dataset.casillaNum);
        tirada(e.target.dataset.casillaNum, verticalEncontrada);
        acumulador++;
    })
}
function checkVerticalContainsSelectedNum(numeroMarcado) {
    if (verticalUno.includes(parseInt(numeroMarcado))) {
        return verticalUno;
    }
    if (verticalDos.includes(parseInt(numeroMarcado))) {
        return verticalDos;
    }
    if (verticalTres.includes(parseInt(numeroMarcado))) {
        return verticalTres;
    }
    if (verticalCuatro.includes(parseInt(numeroMarcado))) {
        return verticalCuatro;
    }
    if (verticalCinco.includes(parseInt(numeroMarcado))) {
        return verticalCinco;
    }
    if (verticalSeis.includes(parseInt(numeroMarcado))) {
        return verticalSeis;
    }
}
/** La función cheque si el número marcado está activo: true y si el resto del acumulador es igual a 0 */
function checkNumSelectedAndAcumulattorLikeZero(numeroMarcado) {

    return (!conjuntoFichas[numeroMarcado].activo && acumulador % 2 == ZERO);
}
/** La función cheque si el número marcado está activo: true y si el resto del acumulador es distinto a 0 */
function checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado) {
    return (!conjuntoFichas[numeroMarcado].activo && !acumulador % 2 == ZERO);
}

function setCssColorOfVerticalSelectedLikeTrue(vertical, color, colorText) {
    console.log(compruebaElMayor(vertical))
    document.getElementById('casilla' + compruebaElMayor(vertical)).style.cssText = color;
    conjuntoFichas[compruebaElMayor(vertical)].color = colorText;
    conjuntoFichas[compruebaElMayor(vertical)].activo = true;


}
function tirada(numeroMarcado, verticalEncontrada) {

    if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {

        setCssColorOfVerticalSelectedLikeTrue(verticalEncontrada, rojo, "rojo");
        compruebaGanador(compruebaElMayor(verticalEncontrada));
    } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {

        setCssColorOfVerticalSelectedLikeTrue(verticalEncontrada, amarillo, "amarillo");
        compruebaGanador(compruebaElMayor(verticalEncontrada));
    }
}
/** La función recibe el número de casilla marcado que está
 * almacenado en los arrays ordenados pro verticales.
 * Comprueba la casilla mayor que sea false, las añade a un array.
 *  Mediante Math.max
 * comprobamos cual es el número mayor de ese array, 
 * así sabremos que casilla es la que hay que marcar
 * sin que tenga espacios en blanco o vacíos por debajo.
 */
function compruebaElMayor(vertical) {
    let numerosFalsos = [];
    for (let i = 0; i < vertical.length; i++) {
        const element = vertical[i];
        if (conjuntoFichas[element].activo == false) {
            numerosFalsos.push(element)
        }
    }
    return Math.max(...numerosFalsos);
}

function compruebaGanador(numeroMarcado) {
    console.log(numeroMarcado)
    let verticalRecibida = checkVerticalContainsSelectedNum(numeroMarcado);
    let acumuladorRojos = 0;
    let arrayRojos = [];
    let arrayAmarillos = [];
    let acumuladorAmarillos = 0;
    for (let i = 0; i < verticalRecibida.length; i++) {
        const e = verticalRecibida[i];
        if (conjuntoFichas[e].activo && conjuntoFichas[e].color == "rojo") {
            acumuladorRojos++;
            arrayRojos.push(conjuntoFichas[e].numero);
            console.log(arrayRojos)
        } if (conjuntoFichas[e].activo && conjuntoFichas[e].color == "amarillo") {
            acumuladorAmarillos++;
            arrayAmarillos.push(conjuntoFichas[e].numero);
        }
    }
    if (acumuladorRojos >= 4) {
        console.log("asi es 4 rojos y ganaste");
        compruebaGanadorVertical(arrayRojos);
    }
    if (acumuladorAmarillos == 4) {
        console.log("asi es amarillo");
        compruebaGanadorVertical(arrayAmarillos);
    }

}

function compruebaGanadorVertical(arrayVertical) {
    console.log(arrayVertical[0])
    console.log(arrayVertical[0] - 6)

    if (arrayVertical[1] == arrayVertical[0] + 6 &&
        arrayVertical[2] == arrayVertical[0] + 12 &&
        arrayVertical[3] == arrayVertical[0] + 18
    ) {
        document.getElementById('casilla' + arrayVertical[0]).style.cssText = "background-color: #00BB2D";
        document.getElementById('casilla' + arrayVertical[1]).style.cssText = "background-color: #00BB2D";
        document.getElementById('casilla' + arrayVertical[2]).style.cssText = "background-color: #00BB2D";
        document.getElementById('casilla' + arrayVertical[3]).style.cssText = "background-color: #00BB2D";
    }
}