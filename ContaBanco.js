class ContaBancaria {
    #saldoAtual;
    #senhaCliente;

    constructor() {
        this.#saldoAtual = 400;
        this.#senhaCliente = "072009";
    }

    versaldo(senha) {
        if (senha === this.#senhaCliente) {
            return `Saldo Atual: R$ ${this.#saldoAtual}`;
        }
        return "Senha incorreta";
    }
}

const conta = new ContaBancaria();

console.log(conta.versaldo("072009"));
