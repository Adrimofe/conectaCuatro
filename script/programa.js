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

for (let index = 0; index < fichas.length; index++) {
    const element = fichas[index];
    element.addEventListener('click', (e) => {
        tirada(e.target.dataset.casillaNum, e);
        acumulador++;
    })
}

function tirada(numeroMarcado) {
    if (verticalUno.includes(parseInt(numeroMarcado))) {
        if (!conjuntoFichas[numeroMarcado].activo && acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalUno)).style.cssText = rojo;
            conjuntoFichas[compruebaElMayor(verticalUno)].activo = true;
        } else if (!conjuntoFichas[numeroMarcado].activo && !acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalUno)).style.cssText = amarillo;
            conjuntoFichas[compruebaElMayor(verticalUno)].activo = true;
        }

    } else if (verticalDos.includes(parseInt(numeroMarcado))) {

        if (!conjuntoFichas[numeroMarcado].activo && acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalDos)).style.cssText = rojo;
            conjuntoFichas[compruebaElMayor(verticalDos)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "rojo";
        } else if (!conjuntoFichas[numeroMarcado].activo && !acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalDos)).style.cssText = amarillo;
            conjuntoFichas[compruebaElMayor(verticalDos)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "amarillo";
        }

    } else if (verticalTres.includes(parseInt(numeroMarcado))) {

        if (!conjuntoFichas[numeroMarcado].activo && acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalTres)).style.cssText = rojo;
            conjuntoFichas[compruebaElMayor(verticalTres)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "rojo";
        } else if (!conjuntoFichas[numeroMarcado].activo && !acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalTres)).style.cssText = amarillo;
            conjuntoFichas[compruebaElMayor(verticalTres)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "amarillo";
        }
    } else if (verticalCuatro.includes(parseInt(numeroMarcado))) {
        if (!conjuntoFichas[numeroMarcado].activo && acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalCuatro)).style.cssText = rojo;
            conjuntoFichas[compruebaElMayor(verticalCuatro)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "rojo";
        } else if (!conjuntoFichas[numeroMarcado].activo && !acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalCuatro)).style.cssText = amarillo;
            conjuntoFichas[compruebaElMayor(verticalCuatro)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "amarillo";
        }

    } else if (verticalCinco.includes(parseInt(numeroMarcado))) {
        if (!conjuntoFichas[numeroMarcado].activo && acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalCinco)).style.cssText = rojo;
            conjuntoFichas[compruebaElMayor(verticalCinco)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "rojo";
        } else if (!conjuntoFichas[numeroMarcado].activo && !acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalCinco)).style.cssText = amarillo;
            conjuntoFichas[compruebaElMayor(verticalCinco)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "amarillo";
        }
    } else if (verticalSeis.includes(parseInt(numeroMarcado))) {
        if (!conjuntoFichas[numeroMarcado].activo && acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalSeis)).style.cssText = rojo;
            conjuntoFichas[compruebaElMayor(verticalSeis)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "rojo";
        } else if (!conjuntoFichas[numeroMarcado].activo && !acumulador % 2 == ZERO) {
            document.getElementById('casilla' + compruebaElMayor(verticalSeis)).style.cssText = amarillo;
            conjuntoFichas[compruebaElMayor(verticalSeis)].activo = true;
            conjuntoFichas[compruebaElMayor(verticalCinco)].color = "amarillo";
        }
    }
}

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

function compruebaGanador(numeroMarcado){
    // como comprobar si hay un ganador

}