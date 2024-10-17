
function resta(numero1, numero2) {
    return numero1 - numero2;
}

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return "Error: No se puede dividir por 0";
    }
    return numero1 / numero2;
}

function verificarnumero(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

let numero1 = parseFloat(prompt("Ingresa el primer numero:"));

let numero2 = parseFloat(prompt("Ingresa el segundo numero:"));

let numero = prompt("Ingresa un número para verificar si es par o impar:");

console.log("Resultado de la suma (" + numero1 + " + " + numero2 + "): " + sumar(numero1, numero2));

console.log("Resultado de la resta (" + numero1 + " - " + numero2 + "): " + resta(numero1, numero2));

console.log("Resultado de la multiplicacion (" + numero1 + " * " + numero2 + "): " + multiplicacion(numero1, numero2));

console.log("Resultado de la division (" + numero1 + " / " + numero2 + "): " + dividir(numero1, numero2));

console.log(verificarnumero(numero));