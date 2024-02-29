/* function myFunction(a, b=0) {
    return a + b;
}

console.log(myFunction(1, 2)); // 3

// =============================
let soma = function(a, b) {
                return a + b;
            };

console.log(soma(1, 2)); // 3

// =============================
let subtracao = (a, b) => a - b;

// =============================

let myArray = [1, 2, 3, 4, 5];
let myArray2 = ["Fabio", 50, true];

console.log(myArray2[2]); */

let matriz = [  ["Fabio", 50, true], 
                ["Joao", 24, false], 
                ["Maria", 18, true]];

// console.log(matriz[1][1]);

let frutas = ["banana", "maçã", "uva", "pera"];
/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} 
for (let fruta of frutas) {
    console.log(fruta);
}
*/

/* frutas.push("laranja");
frutas.unshift("morango");
console.log(frutas);
frutas.pop();
frutas.shift();
console.log(frutas);

frutas.splice(1, 1, "melancia", "manga");
console.log(frutas); */


let pessoa = {
    "nome completo": "Fabio",
    idade: 50,
    casado: true
};
pessoa.nome = "Joao";
/* console.log(pessoa.nome);
console.log(pessoa["nome completo"]); */

for (let prop in pessoa) {
    console.log(prop + ": " + pessoa[prop]);
}

// =========================================

let carro = {
    nome: "Fusca",
    marca: "Volkswagen",
    ano: 1970,
    cor: "vermelho",
    ligado: false,
    
    ligar: function() {
        this.ligado = true;
    }
}

console.log(carro.ligado);
carro.ligar();
console.log(carro.ligado);