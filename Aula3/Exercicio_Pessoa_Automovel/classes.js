class Pessoa {
    #codigo;
    #nome;
    #automoveis;

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#automoveis = [];
    }

    get codigo() {
        return this.#codigo;
    }

    inserirAutomovel(automovel) {
        this.#automoveis.push(automovel);
    }

    removerAutomovelByCod(codigo) {
        for (let i = 0; i < this.#automoveis.length; i++) {
            if (this.#automoveis[i].codigo === codigo) {
                this.#automoveis.splice(i, 1);
                break;
            }
        }

        /* let index = this.#automoveis.findIndex(automovel => automovel.codigo === codigo);
        if (index !== -1) {
            this.#automoveis.splice(index, 1);
        } */
    }

    getAutomovel(codigo) {
        for (let item of this.#automoveis)  {
            if (item.codigo === codigo) {
                return item;
            }
        }

        // return this.#automoveis.find(automovel => automovel.codigo === codigo)
    }

    imprimir() {
        console.log(`código: ${this.#codigo}
nome: ${this.#nome}`);
    }

    imprimirCompleto() {
        this.imprimir();
        console.log("Automóveis: ");
        this.#automoveis.forEach(automovel => automovel.imprimir());
    }
}


class Automovel {
    #codigo;
    #modelo;
    #marca;

    constructor(codigo, modelo, marca) {
        this.#codigo = codigo;
        this.#modelo = modelo;
        this.#marca = marca;
    }

    get codigo() {
        return this.#codigo;
    }

    imprimir() {
        console.log(`      código: ${this.#codigo} modelo: ${this.#modelo} marca: ${this.#marca}`);
    }
}