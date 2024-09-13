// converter no valor ASCII
// https://www.geeksforgeeks.org/print-ascii-value-of-a-character-in-javascript/
// converter do valor ASCII num caracter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
function convertToUpperCase(palavra) {
    let resultado = "";

    for (letra of palavra) {
        let valorASCII = letra.charCodeAt(0);

        // minúscula
        if (valorASCII >= 97 && valorASCII <= 122) {
            resultado += String.fromCharCode(valorASCII - 32);
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

let palavraMaiuscula01 = convertToUpperCase("Pedro Remoaldo");   // PEDRO REMOALDO
let palavraMaiuscula02 = convertToUpperCase("PauloMelo");   // PAULO MELO
let palavraMaiuscula03 = convertToUpperCase("");    //

console.log(palavraMaiuscula01, palavraMaiuscula02, palavraMaiuscula03);    // PEDRO REMOALDO PAULO MELO