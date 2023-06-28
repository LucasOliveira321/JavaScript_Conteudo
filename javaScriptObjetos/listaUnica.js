const cliente = [
    {
        nome: 'André',
        idade: '36 anos',
        cpf: '123456789-0',
        email: 'andré@email.com',
        fones: ['(012) 9 1234-5678', '(012) 9 9876-6543'],
        saldo: 'R$ 100,00',
        dependentes: [{
            nome: 'Maria',
            parentesco: 'Filha',
            idade: '10 anos',
        }]
    },
    {
        nome: 'Juliana',
        idade: '36 anos',
        cpf: '123456789-0',
        email: 'juliana@email.com',
        fones: ['(012) 9 1234-5678', '(012) 9 9876-6543'],
        saldo: 'R$ 100,00',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'Filha',
            idade: '3 anos',
        }]
    }
]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.log(listaDependentes)