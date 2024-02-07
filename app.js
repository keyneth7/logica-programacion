let numeroSecreto = 0
let numeroIntentos = 0
let intentos = 0

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if (numeroSecreto == numeroUsuario){
        asignarTexto('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto>numeroUsuario){
            asignarTexto('p','El número secreto es mayor');
        } else {
            asignarTexto('p','El número secreto es menor');
        }
        limpiarCaja();
        intentos++;
        console.log(intentos);
    }
    return;
}

function generarNumero() {
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja(){
    valorCaja = document.querySelector('#numeroUsuario').value = '';
}

function condicionesIniciales(){
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumero();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();