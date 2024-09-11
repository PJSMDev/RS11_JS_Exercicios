function maiorPalavra(texto) {
    // separa o texto em palavras isoladas
    const palavras = texto.split(" ");
    let maiorPalavra = "";  // Inicializa com uma string vazia

    for (let palavra of palavras) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    }

    // precisa do '`' -> procurar nos apontamentos
    return `${maiorPalavra} - ${maiorPalavra.length} letras`;
}

console.log(maiorPalavra("Exemplo de uma frase com palavras")); // palavras - 8 letras
console.log(maiorPalavra("Teste 1"));   // Teste - 5 letras
console.log(maiorPalavra(""));  // - 0 letras
console.log(maiorPalavra("Exemplo de uma frase Exemplo com palavras Exemplo Exemplo")); 