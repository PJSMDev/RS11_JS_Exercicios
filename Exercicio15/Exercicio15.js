let pessoas = [
    { nome: "Pedro Remoaldo", localidade: "Ermesinde" },
    { nome: "Luísa Xavier", localidade: "Lisboa"},
    { nome: "Mário Simões", localidade: "Aveiro"},
    { nome: "Joana Castro", localidade: "Santa Maria da Feira"},
    { nome: "Guilherme Silveira", localidade: "Lisboa"},
    { nome: "Pedro Oliveira", localidade: "Ermesinde"}
]

let pessoasTeste01 = [
    { nome: "Pedro Remoaldo", localidade: "Ermesinde" },
    { nome: "Luísa Xavier", localidade: "Lisboa"},
    { nome: "Mário Simões", localidade: "Aveiro"},
    { nome: "Joana Castro", localidade: "Santa Maria da Feira"},
    { nome: "Guilherme Silveira", localidade: "Lisboa"},
    { nome: "Pedro Oliveira", localidade: "Ermesinde"},
    { nome: "Ana Almeida", localidade: "Aveiro"}
]

let pessoasTeste02 = [];

function localidadesPessoas(pessoas) {
    let localidadesUnicas = new Set(pessoas.map(pessoa => pessoa.localidade));

    return [...localidadesUnicas].sort();
}
console.log(localidadesPessoas(pessoas));   // ['Aveiro', 'Ermesinde', 'Lisboa', 'Santa Maria da Feira']
console.log(localidadesPessoas(pessoasTeste01));    // ['Aveiro', 'Ermesinde', 'Lisboa', 'Santa Maria da Feira']
console.log(localidadesPessoas(pessoasTeste02));    // []