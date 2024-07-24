let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', 'Acertaste el numero en ' + intentos + ' intentos');

        // habilitar boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero es menor');
        }else{
            asignarTextoElemento('p','el numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio - generar numero aleatorio - inicializar intentos
    condicionesIniciales();
    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}



// crear funcion numero aleatorio
function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se completo el arreglo');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
           
    }

    
}

function condicionesIniciales(){

    asignarTextoElemento('h1', 'juego de numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


condicionesIniciales();