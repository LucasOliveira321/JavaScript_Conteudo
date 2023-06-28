class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const joao = new Cliente("João", "joao@email.com", "111.222.333-44",100)

joao.depositar(50)

class ClientePoup extends Cliente{
    constructor(nome,saldo,saldoPoup){
        super(nome,saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup = valor
    }
}

const jose = new ClientePoup('josé', 100,200)

console.log(joao)
console.log(jose)
