const myArray = [4, 2, 10, 33, 45, 100];

// let num18 = myArray.find(findFunction);
let num18 = myArray.find(a => a > 18);

/* function findFunction(value) {
  return value > 18;
} */

// console.log(num18);

// Array de Nomes
// retorne o primeiro nome com "a" usando find

const nomes = ["Jaco", "Miriu", "Soro", "Fabio"];

let nome = nomes.filter(_nome => _nome.length >= 5)
// console.log(nome);





// Classe Animal (nome, idade)
// crie um array com 5 animais
// retorne os animais com idade > 5 usando filter

class Animal {
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
}

const animais = [
    new Animal("Cachorro", 10),
    new Animal("Gato", 3),
    new Animal("Papagaio", 7),
    new Animal("Cavalo", 15),
    new Animal("Tartaruga", 100)
];

let animaisVelhos = animais.filter(animal => animal.idade > 5);
console.log(animaisVelhos);






