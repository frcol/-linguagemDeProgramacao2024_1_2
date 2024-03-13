/* // Exercise 1: ======================================================
const num1 = 5;
const num2 = 10;

const sum = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;

console.log("Sum:", sum);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division); */

/* // Exercise 2: ======================================================
for (let i = 1; i < 100; i+=2) {
    console.log(i);
}

// ou

for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
} */
    
/* // Exercise 3: ======================================================
const texto = "Disciplina de Programação para web";
console.log(texto.length); */

/* // Exercise 4: ======================================================
const nome = "Fabio Rodrigo Colombini";
let arNome = nome.split(" ");

if (arNome.length >= 2) {
    let email = `${arNome[0].toLowerCase()}.${arNome[arNome.length-1].toLowerCase()}@facens.br`;
    console.log(email);
}
else {
    console.log("Nome incompleto");
} */

// Exercise 5: ======================================================
/* let str = "";

for (let i = 1; i <= 10; i++) {
    if (i < 10)
        str += i+"-";
    else
       /*  str += i;
} 

console.log(str);*/

// Exercise 6: ======================================================
/* function dobraNumeroPositivo(num) { 
    if (num > 0) {
        return num*2;
    }
    else {
        console.log("Só é aceito números positivos maiores que zero.");
    }
}

console.log(dobraNumeroPositivo(5)); */

// Exercise 7: ======================================================

/* function reverseString(str) {
   let strReverse = "";
   for (let i = str.length-1; i >= 0; i--) {
      strReverse += str[i];
   }
   return strReverse;
}

console.log(reverseString("Fabio")); */

// Exercise 8: ======================================================
/* function numDeVogais(str) {
    let vogais = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(numDeVogais("Fabio")); */

// Exercise 9: ======================================================
/* function checkEmail(email) {
    let arEmail = email.split("@");
    if (arEmail.length === 2) {
        let arEmail2 = arEmail[1].split(".");
        if (arEmail2.length >= 1) {
            return true;
        }
    }
    return false;
}

console.log(checkEmail("fabiorcolombini@gmail.com")); */

// Exercise 10: ======================================================
/* function palindromo(str) {
    let strReverse = "";
    for (let i=str.length-1; i >= 0; i--) {
        strReverse += str[i];
    }

    return str === strReverse;
}

console.log(palindromo("arara")); */

