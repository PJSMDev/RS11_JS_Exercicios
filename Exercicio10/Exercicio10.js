// separar em palavras isoladas -> split
// contar -> length serve? -> como fica a string depois do split?
function nPalavras(texto) {
    const palavras = texto.split(" ");

    return palavras.length;
}

console.log(nPalavras("Exemplo de uma frase com palavras")); // 6
console.log(nPalavras("Teste 1"));   // 2
console.log(nPalavras(""));  // 0
