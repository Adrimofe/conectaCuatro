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
const conjuntoFichas = [];
class ficha {
    constructor(numero) {
        this._numero = numero;
    }
    _color = blanco;
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

for (let index = 1; index < 43; index++) {
    conjuntoFichas.push(new ficha(index));
}

for (let index = 0; index < fichas.length; index++) {
    const element = fichas[index];
    element.addEventListener('click', (e) => {
        if (e.target.dataset.casillaNum && acumulador % 2 == 0 && !conjuntoFichas[e.target.dataset.casillaNum].activo) {
            acumulador++;
            e.target.style.cssText = rojo;
            conjuntoFichas[e.target.dataset.casillaNum].activo = true;  

        } else if (e.target.dataset.casillaNum && !acumulador % 2 == 0  && !conjuntoFichas[e.target.dataset.casillaNum].activo) {
            acumulador++;
            e.target.style.cssText = amarillo;
            conjuntoFichas[e.target.dataset.casillaNum].activo = true;    
        }
    })

    
}

