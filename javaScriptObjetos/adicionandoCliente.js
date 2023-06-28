function cliente(nome, cpf, email, saldo){

    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){ 
        this.saldo += valor
    }
}

function clientePoupanca (nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

const lucas = new clientePoupanca("Lucas", "123.456.789-10", "lucasoliveira@gmail.com", 1000,300)

lucas.depositar(50)
lucas.depositarPoup(30)

console.log(lucas)