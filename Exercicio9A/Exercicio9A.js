function maiorPalavra(texto) {
    const palavras = texto.split(" ");
    let maiorTamanho = 0;  
    let maioresPalavras = [];

    for (let palavra of palavras) {
        if (palavra.length > maiorTamanho) {
            // inútil -> restos da versão anterior
            maiorTamanho = palavra.length;  
            // substitui qualquer palavra que tenha sido selecionada antes
            maioresPalavras = [palavra];  
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
