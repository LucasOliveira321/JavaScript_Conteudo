const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '123456789-0',
    email: 'andré@email.com',
    fones: ['(012) 9 1234-5678', '(012) 9 9876-6543'],
    dependentes: [{
        nome: 'Maria',
        parentesco: 'Filha',
        idade: '10 anos',
    }]
}

console.log(cliente.dependentes[0].nome)