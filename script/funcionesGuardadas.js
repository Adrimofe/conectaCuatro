for (let index = 0; index < fichas.length; index++) {
    const element = fichas[index];
    element.addEventListener('click', (e) => {
        console.log(e.target.dataset.casillaNum)
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



function compruebaVacios(e){
    if(acumulador==0){
        console.log("ES IGUAL a 0")
    }

   console.log( (conjuntoFichas[e.target.dataset.casillaNum-6]))
   if(conjuntoFichas[e.target.dataset.casillaNum-6].activo == false|| conjuntoFichas[e.target.dataset.casillaNum-1].activo == false  ){
      // console.log("ES FALSO")
   }
}


for (let index = 0; index < fichas.length; index++) {
    const element = fichas[index];
    let numeroMarcado = 0;
    element.addEventListener('click', (e) => {
        console.log(e.target.dataset.casillaNum)
        if (e.target.dataset.casillaNum && acumulador % 2 == 0) {
            numeroMarcado = e.target.dataset.casillaNum;
            tirada(numeroMarcado);
            acumulador++;
            e.target.style.cssText = rojo;
            conjuntoFichas[e.target.dataset.casillaNum].activo = true;


        } else if (e.target.dataset.casillaNum && !acumulador % 2 == 0) {
            numeroMarcado = e.target.dataset.casillaNum;
            tirada(numeroMarcado);
            acumulador++;
            e.target.style.cssText = amarillo;
            conjuntoFichas[e.target.dataset.casillaNum].activo = true;
        }

    })
}

function compruebaMayor(...vertical){
    for (let i = 0; i < vertical.length; i++) {
        const element = vertical[i];
        numero = element.join(" \n");
      //  console.log(numero)
    }
}

compruebaMayor(verticalUno)


conjuntoFichas[0].activo = true;
conjuntoFichas[6].activo = true;
function compruebaElMayor(...vertical) {
  
    for (let i = 0; i < conjuntoFichas.length; i++) {
        const element = conjuntoFichas[i];
        for (let j = 0; j < vertical.length; j++) {
            const elemento = vertical[j];
            numero = elemento.join(" ");
            if(conjuntoFichas[parseInt(numero)].activo == true){
                // console.log(conjuntoFichas[parseInt(numero)].numero + " es verdad")
              }
              console.log(conjuntoFichas[parseInt(numero)].numero + " es verdad")
        }    
    } 
    console.log(numero)
}

compruebaElMayor(verticalUno)


function tirada(numeroMarcado, verticalEncontrada) {
    
    if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {
        setCssColorOfVerticalSelectedLikeTrue(verticalEncontrada, rojo, "rojo");
    } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {
        setCssColorOfVerticalSelectedLikeTrue(verticalEncontrada, amarillo, "amarillo");
    }

}


function tirada(numeroMarcado) {
    if (verticalUno.includes(parseInt(numeroMarcado))) {
        if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalUno, rojo, "rojo");
        } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalUno, amarillo, "amarillo");
        }
    } else if (verticalDos.includes(parseInt(numeroMarcado))) {
        if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalDos, rojo, "rojo");
        } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalDos, amarillo, "amarillo");
        }
    } else if (verticalTres.includes(parseInt(numeroMarcado))) {
        if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalTres, rojo, "rojo");
        } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalTres, amarillo, "amarillo");
        }
    } else if (verticalCuatro.includes(parseInt(numeroMarcado))) {
        if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalCuatro, rojo, "rojo");
        } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalCuatro, amarillo, "amarillo");
        }
    } else if (verticalCinco.includes(parseInt(numeroMarcado))) {
        if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalCinco, rojo, "rojo");
        } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalCinco, amarillo, "amarillo");
        }
    } else if (verticalSeis.includes(parseInt(numeroMarcado))) {
        if (checkNumSelectedAndAcumulattorLikeZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalSeis, rojo, "rojo");
        } else if (checkNumSelectedAndAcumulattorDistinctZero(numeroMarcado)) {
            setCssColorOfVerticalSelectedLikeTrue(verticalSeis, amarillo, "amarillo");
        }
    }
}

for (let index = 0; index < fichas.length; index++) {
    const element = fichas[index];
    let numeroMarcado = 0;
    element.addEventListener('click', (e) => {
        if (acumulador % 2 == ZERO) {
            numeroMarcado = e.target.dataset.casillaNum;
            tirada(numeroMarcado, e);
            acumulador++;
        } else if (!acumulador % 2 == ZERO) {
            numeroMarcado = e.target.dataset.casillaNum;
            tirada(numeroMarcado, e);
            acumulador++;
            e.target.style.cssText = amarillo;
            conjuntoFichas[e.target.dataset.casillaNum].activo = true;
        }
    })
}


if ((conjuntoFichas[36].activo == true &&
    conjuntoFichas[30].activo == true &&
    conjuntoFichas[24].activo == true &&
    conjuntoFichas[18].activo == true)
    &&
    conjuntoFichas[36].color === "rojo" &&
    conjuntoFichas[30].color === "rojo" &&
    conjuntoFichas[24].color == "rojo" &&
    conjuntoFichas[18].color === "rojo") {

    console.log("ganaste");

}
if ((conjuntoFichas[(parseInt(numeroMarcado) + 6)].activo == true&&
conjuntoFichas[(parseInt(numeroMarcado) + 12)].activo == true &&
conjuntoFichas[(parseInt(numeroMarcado) + 18)].activo == true &&
conjuntoFichas[(parseInt(numeroMarcado) + 24)].activo == true)
&& conjuntoFichas[(parseInt(numeroMarcado) + 6)].color === "rojo" &&
conjuntoFichas[(parseInt(numeroMarcado) + 12)].color === "rojo" &&
conjuntoFichas[(parseInt(numeroMarcado) + 18)].color === "rojo" &&
conjuntoFichas[(parseInt(numeroMarcado) + 24)].color == "rojo") {

console.log("ganaste");

}


function compruebaVerticalGanadora(vertical){
    for (let i = 0; i < conjuntoFichas.length; i++) {
        const element = conjuntoFichas[i];
        for (let j = 0; j < vertical.length; j++) {
            const verticalJ = vertical[j];
            if(verticalJ==element.numero){
                console.log("si")
                if(element.activo && element.color == "rojo"){
                    console.log("na")
                }
            }
        }
    }
}

compruebaVerticalGanadora(verticalUno);

function compruebaGanador(numeroMarcado) {
    console.log(numeroMarcado)
    let verticalRecibida = checkVerticalContainsSelectedNum(numeroMarcado);
    let acumuladorRojos = 0;
    let acumuladorAmarillos = 0;
    console.log(acumuladorRojos)
    console.log(verticalRecibida)
    for (let i = 0; i < verticalRecibida.length; i++) {
        const e = verticalRecibida[i];
        if (conjuntoFichas[e].activo && conjuntoFichas[e].color == "rojo") {
            acumuladorRojos++;
        } if (conjuntoFichas[e].activo && conjuntoFichas[e].color == "amarillo") { 
            acumuladorAmarillos++;
        }

    }
    if (acumuladorRojos == 4) {
        console.log("asi es 4 rojos y ganaste");
        alert("ganaste")
    }
    if(acumuladorAmarillos == 4){
        console.log("asi es amarillo");
        alert("ganaste")
    }
}