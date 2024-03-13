class Main {
    #pessoas;

    constructor() {
        this.#pessoas = [];
    }

    addPessoa(pessoa) {
        this.#pessoas.push(pessoa);
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) {
        let pessoa = this.#pessoas.find(pessoa => pessoa.codigo === codPessoa);
        
        pessoa.inserirAutomovel(new Automovel(codAuto, marca, modelo));
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAuto) {
        let pessoaOrigem = this.#pessoas.find(pessoa => pessoa.codigo === codPessoaOrigem);
        let pessoaDestino = this.#pessoas.find(pessoa => pessoa.codigo === codPessoaDestino);

        if (!pessoaDestino || !pessoaOrigem) {
            console.log("Pessoa não encontrada");
            return;
        }

        let automovel = pessoaOrigem.getAutomovel(codAuto);

        if (automovel) {
            pessoaOrigem.removerAutomovelByCod(codAuto);
            pessoaDestino.inserirAutomovel(automovel);
        }
    }

    mostrarTodasAsPessoas() {
        console.log("\n\nPessoas: \n====================\n");
        for (let pessoa of this.#pessoas)  {
            pessoa.imprimirCompleto();
        }
        
        //this.#pessoas.forEach(pessoa => pessoa.imprimirCompleto());
    }
}


const main = new Main();
main.addPessoa(new Pessoa(1, "João"));
main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");
main.mostrarTodasAsPessoas();

main.addPessoa(new Pessoa(2, "Maria"));
main.transfereAutomovel(1, 2, 1);
main.mostrarTodasAsPessoas();