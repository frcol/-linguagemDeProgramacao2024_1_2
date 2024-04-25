let titulo = document.querySelector('#titulo');
let paragraph = document.querySelector('p');

function mudarImagem() {
    let minhaImagem = document.querySelector('img');
    minhaImagem.src = 'imagens/horse.png';
    //minhaImagem.setAttribute('width', '50');
    minhaImagem.style.borderRadius = '50%';
}

document.querySelector('#mudarTitulo').onclick = function () {
    titulo.innerHTML = 'Novo Título mais legal de bão!';
};

document.querySelector('#mudarEstilo').onclick = function () {
    titulo.classList.add('novoTitulo');

    paragraph.style.color = 'red';
    paragraph.style.fontSize = '30px';
}

document.querySelector('#removeEstilo').onclick = function () {
    titulo.classList.remove('novoTitulo');

    paragraph.style.color = '';
    paragraph.style.fontSize = '';
}

document.querySelector('#playAudio').onclick = function() {
    document.querySelector('#myAudio').play();
};


let buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.onclick = function () {
        document.querySelector('#resposta').innerHTML = button.innerHTML;
    }
});