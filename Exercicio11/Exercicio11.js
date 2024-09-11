// ciclo aninhado noutro ciclo
// 2º ciclo começa na posição do primeiro ciclo -> procura um número igual -> envia para o novo array
function removerRepetidos(numeros) {
    let resultado = []; 

    for (let i = 0; i < numeros.length; i++) {
        let repetido = false;

        for (let j = 0; j < resultado.length; j++) {
            if (numeros[i] === resultado[j]) {
                repetido = true;
                break;
            }
        }

        if (!repetido) {
            resultado.push(numeros[i]);
        }
    }

    return resultado;
}

const array = [12, 6, 3, 12, 8, 6, 5];
console.log(removerRepetidos(array));   // [12, 6, 3, 8, 5]

// podia criar um novo Set que tira os repetidos do array que recebe como argumento