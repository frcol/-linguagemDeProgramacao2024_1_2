class Cliente {
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }

    mostrar() {
        return this.nome+ " " + this.idade;
    }
}
