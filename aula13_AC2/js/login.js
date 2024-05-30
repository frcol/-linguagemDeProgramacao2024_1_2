document.querySelector("#formLogin").addEventListener("submit", (event)=>{
    event.preventDefault();
});

function login() {
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;

    if (email == "" || senha == "") {
        return;
    }
    
    fetch(`http://localhost:3001/usuario?email=${email}`)
        .then(response => response.json())
        .then(data => {
            
            if (data.length > 0 && data[0].senha == senha) {
                window.location.href = `home.html?nome=${data[0].nome}`;
            } else {
                document.querySelector("#msgErro").innerHTML = "Usuário ou senha inválidos";
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

function cadastrar() {
    window.location.href = "cadastrar.html";
}