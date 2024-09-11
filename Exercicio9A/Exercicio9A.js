function maiorPalavra(texto) {
    const palavras = texto.split(" ");
    let maiorTamanho = 0;  
    let maioresPalavras = [];

    for (let palavra of palavras) {
        if (palavra.length > maiorTamanho) {
            maiorTamanho = palavra.length;  
            // volta a atribuir para "apagar" qualquer palavra que tenha sido selecionada anteriormente como sendo a maior
            maioresPalavras = [palavra];  
            // bastava comparar o comprimento com o da palavra que já está guardado no array e não precisava criar uma variável para guardar o comprimento
        } else if (palavra.length === maiorTamanho) {
            maioresPalavras.push(palavra);
        }
    }

    return maioresPalavras;  
}

console.log(maiorPalavra("Exemplo palavras de uma frase palavras com palavras")); // ["palavras, palavras, palavras"]
console.log(maiorPalavra("Teste 1"));   // ["Teste"]
console.log(maiorPalavra("Teste Testes"));  // ["Testes"]
console.log(maiorPalavra(""));  // [""]
