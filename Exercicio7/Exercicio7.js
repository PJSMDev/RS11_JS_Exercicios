function repete(numRepeticoes, texto) {
    let acc = numRepeticoes;
    let novoTexto = "";
    while (acc > 0) {
        novoTexto += texto;
        acc--;
    }
    console.log(novoTexto);
}

repete(3, "Primavera"); // PrimaveraPrimaveraPrimavera
repete(-1, "Fagundes"); //
repete(1, "Fagundes");  // Fagundes
repete(0, "Cegid"); //