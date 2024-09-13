let temperaturesCompImpar = [12, 25, 14, -5, 18, 9, 27];
let temperaturesCompPar = [12, 25, 14, -5, 18, 9];
let temperaturesTest = [];

function calcMediana(temperaturas) {
    let arrayOrdenado = [...temperaturas].sort((a, b) => a - b);
    let comprimento = arrayOrdenado.length;

    if (comprimento % 2 !== 0) {
        let indiceMeio = Math.floor(comprimento / 2);
        return arrayOrdenado[indiceMeio];
    } else {
        let meio1 = comprimento / 2 - 1;
        let meio2 = comprimento / 2;
        return (arrayOrdenado[meio1] + arrayOrdenado[meio2]) / 2;
    }
}

console.log(calcMediana(temperaturesCompImpar));    // 14
console.log(calcMediana(temperaturesCompPar));  // 13
console.log(calcMediana(temperaturesTest));  // algum tipo de erro -> NaN