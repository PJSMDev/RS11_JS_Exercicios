const listaPalavras = [
    "cao", "Guitarra", "pintura", "Sintonia", "universo", "Barulho",
    "elefante", "Pavimento", "floresta", "Montanha", "computador", "Biblioteca",
    "foguete", "Prancha", "bicicleta", "Aventureiro", "alegria", "Faculdade",
    "planeta", "Escola", "coragem", "Historia", "professor", "Livraria", "baleia",
    "Cavalo", "eletrico", "Tempestade", "palmeira", "Luz", "telefone", "Energia",
    "armario", "Conhecimento", "amizade", "Sapato", "caderno", "Oculos", 
    "travesseiro", "Viagem", "futebol", "Jornal", "teatro", "Filme", "museu",
    "Parque", "flamingo", "Camisa", "arca", "Cerebro", "encontro",
    "Tecnologia", "televisao", "Madrugada", "helicoptero", "Dicionario"
];

// const listaPalavras = ["Barbaridade"];

function jogoEnforcado() {
    let palavraEscolhida = selecPalavra(listaPalavras); 
    let base = criaBase(palavraEscolhida);
    let tentativas = definirTentativas(palavraEscolhida);
    let letrasUsadas = [];
    
    console.log(`Tentativas: ${tentativas}`);
    
    while (tentativas > 0 && base.includes("_")) {
        console.log("Palavra atual: ");
        mostraBase(base);  

        let letra = prompt("Introduza uma letra:").toLowerCase(); 

        if (letra.length !== 1 || !isLetra(letra)) {  
            alert("Por favor, insira uma única letra válida.");
            continue;
        }

        if (letrasUsadas.includes(letra)) {
            alert("Já usou essa letra. Tente outra.");
            continue;
        }

        letrasUsadas.push(letra);

        if (palavraEscolhida.toLowerCase().includes(letra)) {
            base = atualizaBase(palavraEscolhida, base, letra); 
        } else {
            tentativas--;
            alert(`A letra "${letra}" não existe na palavra. Tentativas restantes: ${tentativas}`);
        }

        if (!base.includes("_")) {
            alert("Parabéns. Acertou na palavra!");
            console.log("Palavra final: ");
            mostraBase(base);  
        } else if (tentativas === 0) {
            alert(`Jogo terminado. Não acertou na palavra. A palavra era: ${palavraEscolhida}`);
        }
    }
}

function selecPalavra(palavras) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const indiceRandom = Math.floor(Math.random() * palavras.length);
    // console.log("---------------------");
    console.log(indiceRandom);
    // console.log("---------------------");
    return palavras[indiceRandom];
}

function criaBase(palavra) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    return Array(palavra.length).fill("_");
}

function atualizaBase(palavra, base, letra) {
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() === letra) {
            base[i] = palavra[i];
        }
    }
    return base;
}

function definirTentativas(palavra) {
    if (palavra.length === 5) {
        return 5;
    } else if (palavra.length >= 6 && palavra.length <= 7) {
        return 4;
    } else {
        return 3;  
    }
}

function mostraBase(base) {
    let baseStr = "";
    for (let i = 0; i < base.length; i++) {
        baseStr += base[i] + " ";  
    }
    console.log(baseStr);
}

function isLetra(letra) {
    let codigo = letra.charCodeAt(0);
    return (codigo >= 97 && codigo <= 122) || (codigo >= 65 && codigo <= 90);
}

jogoEnforcado();
