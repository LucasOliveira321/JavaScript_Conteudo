const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '123456789-0',
    email: 'andré@email.com',
    fones: ['(012) 9 1234-5678', '(012) 9 9876-6543']
}

cliente.dependente = {
    nome: 'Maria',
    parentesco: 'Filha',
    idade: '10 anos',
}

cliente.dependente.nome = 'Maria Augusta',

console.log(cliente)