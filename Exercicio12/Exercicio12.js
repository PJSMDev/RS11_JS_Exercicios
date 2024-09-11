function encontraSoma(colecao, valor) {
    for (let i = 0; i < colecao.length; i++) {
        for (let j = i + 1; j < colecao.length; j++) {
            if (colecao[i] + colecao[j] === valor) {
                return [colecao[i], colecao[j]];
            }
        }
    }
    return null;
}

const numerosTeste1 = [2, 7, 11, 15];   // valor: 9
const numerosTeste2 = [1, 2, 3, 9];     // valor: 8
const numerosTeste3 = [1, 2, 4, 4];     // valor: 8

console.log(encontraSoma(numerosTeste1, 9));  // [2, 7]
console.log(encontraSoma(numerosTeste2, 8));  // null
console.log(encontraSoma(numerosTeste3, 8));  // [4, 4]
