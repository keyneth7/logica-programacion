let numeroUsuario = 0;
let intentos = 1; 
let maxIntentos = 3;

let numeroMax = parseInt(prompt('Ingresa hasta que número quieres jugar'));
let numeroSecreto = Math.floor(Math.random()*numeroMax) + 1;

while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt(`Ingresa un número entre 1 y ${numeroMax}, por favor:`));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez.' : 'veces.'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;
        if (intentos > maxIntentos){
            alert(`Llegaste al número max. de ${maxIntentos} intentos. El número era ${numeroSecreto}.`);
            break; 
        }
    }
}