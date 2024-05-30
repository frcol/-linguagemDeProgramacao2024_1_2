let param = new URLSearchParams(window.location.search);
let nome = param.get("nome");
document.querySelector("#nome").innerHTML = `Olá ${nome}!`;

function sair() {
    window.location.href = "index.html";
}