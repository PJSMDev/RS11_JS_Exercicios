let dados = [90, 190, 20, 240, 340, 220, 470, 60, 430, 460, 400];

function bSort(dados) {
    // os valores deste ciclo são como que o primeiro valor de um par e não faz sentido comparar com o último valor
    for (let i = 0; i < dados.length - 1; i++) {
        // só precisa começar no valor a seguir ao valor do ciclo pai
        for (let j = i + 1; j < dados.length; j++) {
            if (dados[j] < dados[i]) { 
                let temp = dados[i];
                dados[i] = dados[j];
                dados[j] = temp;
            }
        }
    }
    return dados;
}

console.log(bSort(dados));
