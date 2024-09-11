function gerarNsAleatorios(min, max, comprimento) {
    const numeros = [];
    while (numeros.length < comprimento) {
        // floor -> impede floats
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        const numero = Math.floor(Math.random() * (max - min) + min)
        // se o array não tiver o número gerado -> concatena o número ao array
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros;
}

const numerosGerados = gerarNsAleatorios(1, 50, 5);
const estrelasGeradas = gerarNsAleatorios(1, 12, 2);
// console.log(numerosGerados);
// console.log(estrelasGeradas);

const chave = [...numerosGerados, ...estrelasGeradas];
console.log(chave);