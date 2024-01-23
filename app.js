let numeroSecreto = 6;
let numeroUsuario = 0;

while (numeroSecreto != numeroUsuario) {
    numeroUsuario = prompt("Ingresa un número entre 1 y 10, por favor:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
    }
}