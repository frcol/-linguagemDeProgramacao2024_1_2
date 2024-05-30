document.querySelector("#formCad").addEventListener("submit", (event)=>{
    event.preventDefault();
});

function cadastrar() {
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;

    if (nome == "" || email == "" || senha == "") {
        return;
    }

    fetch("http://localhost:3001/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = `index.html`;
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}

