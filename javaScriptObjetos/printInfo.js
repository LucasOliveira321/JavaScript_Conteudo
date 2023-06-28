const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '123456789-0',
    email: 'andré@email.com',
}

console.log(`O nome do cliente é ${cliente.nome}, e tem ${cliente.idade} de idade, os 3 primeiros números de seu CPF são: ${cliente.cpf.substring(0,3)}.`)