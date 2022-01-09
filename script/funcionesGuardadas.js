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