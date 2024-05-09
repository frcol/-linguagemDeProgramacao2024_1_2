
// function displayResult(result) {
//     console.log(result);
// }
// function displayMobile(result) {
//     console.log('Mobile: ' + result);
// }

// function calcula(num1, num2, callback) {
//     soma = num1 + num2;

//     callback(soma);
// }

// calcula(2, 3, displayMobile);

// function timeOut() {
//     console.log('TimeOut');
// }

// setInterval(timeOut, 3000);

// console.log('Fim do código');

// setInterval(setClock, 1000);

// function setClock() {
//     let date = new Date();

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     document.querySelector('#clock').innerHTML = 
//             hours + ':' + minutes + ':' + seconds;
// }

// getData('db.json');

// async function getData(file) {
//     let meuObjetoFile = await fetch(file);
//     let meuJson = await meuObjetoFile.json();

//     console.log(meuJson[1].nome);
// }

// console.log("fim do codigo");

// fetch('db.json')
//     .then(myVar => myVar.json())
//     .then(myArrayJson => checkData(myArrayJson));


// function checkData(data) {
//     data.forEach(element => {
//         console.log(element.nome);
//     });
// }

// console.log("fim do codigo");]

// fetch('https://663c040017145c4d8c34f832.mockapi.io/cliente')
//     .then(response => response.json())
//     .then(data => trataData(data))
//     .catch(error => console.log('Erro: ' + error));

// function trataData(data) {
//     document.querySelector('#cliente').innerHTML = 
//     `Nome: ${data[9].nome} (${data[9].idade}) - ${data[9].sexo}`;
// }

let cliente = {
    nome: 'Ricardo',
    idade: 25,
    sexo: 'M'
}

fetch('https://663c040017145c4d8c34f832.mockapi.io/cliente',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Erro: ' + error)
)
