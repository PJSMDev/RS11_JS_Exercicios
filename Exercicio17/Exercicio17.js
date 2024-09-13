function validarString(texto) {
    if (texto.length === 0) return false;

    for (caracter of texto) {
        let valorASCII = caracter.charCodeAt(0);

        // não maiúscula, nem minúscula nem espaço
        if (!(valorASCII >= 65 && valorASCII <= 90) && !(valorASCII >= 97 && valorASCII <= 122) && (valorASCII !== 32)) {
            return false;
        }
    }
    return true;
}
console.log(validarString("Pedro Remoaldo")); // true
console.log(validarString("Paulo 123"));      // false
console.log(validarString(""));      // false 

function validarStringRegex(texto) {
    /*
        ^ $ - verifica a string toda
        [a-zA-Z ] - aceita minúsculas, maiúsculas e o espaço
        + - garante que há pelo menos 1 caractere válido
        test() - https://www.w3schools.com/jsref/jsref_regexp_test.asp
        texto.length > 0 - a string não é vazia garantidamente
    */ 
    return /^[a-zA-Z ]+$/.test(texto) && texto.length > 0;
}
console.log("---------------------------------------");
console.log(validarStringRegex("Pedro Remoaldo")); // true
console.log(validarStringRegex("Paulo 123"));      // false
console.log(validarStringRegex(""));               // false