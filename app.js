let numeroSecreto = 0;
let numeroIntentos = 0;
let intentos = 0;
let listaNumSorteado = [];
let numeroMax = 10;
let textoMayor = ['El número secreto es mayor, te quedan tres intentos.', 'Unos centímetros más grande.', 'Un poco más, te queda un intento.'];
let textoMenor = ['El número secreto es menor, te quedan tres intentos.', 'Unos centímetros más pequeño.', 'Un poco mas pequeño, te queda un intento'];

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (!(numeroUsuario >= 1 && numeroUsuario <= 10)){
        asignarTexto('p','Ingresa un número válido :)');
        return;
    } else {
        if (numeroSecreto == numeroUsuario){
            asignarTexto('p',`Acertaste el número en ${intentos+1} ${intentos == 0 ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#intentar').setAttribute('disabled', 'true');
        } else {
            if (numeroSecreto>numeroUsuario){
                asignarTexto('p',textoMayor[intentos]);
            } else {
                asignarTexto('p',textoMenor[intentos]);
            }
            limpiarCaja();
            intentos++;

            if (intentos>3){
                asignarTexto('p',`Llegaste al número máximo de intentos. El número era ${numeroSecreto}.`);
                document.querySelector('#intentar').setAttribute('disabled', 'true');
                document.getElementById('reiniciar').removeAttribute('disabled');
            } 
        }
    }
    return;
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumSorteado);

    if (listaNumSorteado.length == parseInt(numeroMax/2)){
        listaNumSorteado = [];
        return generarNumero();
    } else {
        if(listaNumSorteado.includes(numeroGenerado)){
            return generarNumero();
        } else {
            listaNumSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    valorCaja = document.querySelector('#numeroUsuario').value = '';
}

function condicionesIniciales(){
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumero();
    intentos = 0;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales();