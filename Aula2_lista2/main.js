/* // 1. Função anônima para retornar o nome completo
let nomeCompleto = function(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
};

console.log(nomeCompleto("Fabio", "Colombini"));*/

/* // 2. Arrow Function para calcular área do retângulo
let calculaAreaRetangulo = (base, altura) => base * altura;
console.log(calculaAreaRetangulo(5, 8));  */

/* // 3. Função para somar todos os elementos de um array
let somarElementos = function(array) {
    let total = 0;
    for (let item of array) {
        total += item;
    }
    return total;
    // return array.reduce((total, numero) => total + numero, 0);
};
let numeros1 = [10, 20, 30, 40, 50];
console.log(somarElementos(numeros1)); */

/*  // 4. Função para retornar array de números ímpares
let numerosImpares = function(array) {
    let newArray = [];
    for (let item of array) {
        if (item % 2 !== 0) {
            newArray.push(item);
        }
    }
    return newArray;

    // return array.filter(numero => numero % 2 !== 0);
};
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosImpares(numeros2)); */

/* // 5. Adicionar e remover elementos de um array
let cidades = ["Sorocaba", "Piedade", "Votorantim"];
cidades.unshift("São Paulo"); // Adiciona no início
cidades.pop(); // Remove último
console.log(cidades); */

// 6. Objeto aluno com método mostrarInformacoes
/* let aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia",
    matricula: "12345",
    mostrarInformacoes: function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Matrícula: ${this.matricula}`);
    }
};
aluno.mostrarInformacoes(); */

/* // 7. Função para encontrar o maior número em um array
let encontraMaiorNumero = function(array) {
    let max = Number.MIN_VALUE;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;

    //return Math.max(...array); // ... spread, converte array em lista
};
console.log(encontraMaiorNumero([10, 20, 5, 30, 15])); */

/* // 8. Objeto produto com método calcularTotal
let produto = {
    nome: "Notebook",
    preco: 2500,
    quantidade: 2,
    calcularTotal: function() {
        return this.preco * this.quantidade;
    }
};
console.log(produto.calcularTotal()); */

/* // 9. Loop para mostrar propriedades e valores de um objeto
let endereco = {
    rua: "Rua Principal",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo"
};
for (let propriedade in endereco) {
    console.log(`${propriedade}: ${endereco[propriedade]}`);
} */

/* // 10. Função para filtrar alunos com idade acima de 18
let alunoMaior = function(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.idade > 18);
};
removeDuplicatas(arrayAlunos); */
