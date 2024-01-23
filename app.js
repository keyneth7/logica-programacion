let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroUsuario = 0;
let intentos = 1; 
let maxIntentos = 3;

console.log(numeroSecreto);

while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 10, por favor:"));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;
        if (intentos > maxIntentos){
            alert(`Llegaste al número max. de ${maxIntentos} intentos`);
            break; 
        }
    }
}