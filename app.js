let numeroSecreto = 6;
let numeroUsuario = prompt("Ingresa un número entre 1 y 10, por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el número');
} else {
    alert('Lo siento, no acertaste el número');
}