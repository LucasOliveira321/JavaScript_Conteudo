const cliente = {
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
}

function oferecerSeguro(objeto){
    const dadosCliente = Object.keys(objeto)
    if(dadosCliente.includes('dependentes')){
        console.log(`Oferecer seguro de vida para ${cliente.nome}`)

    }
}

oferecerSeguro(cliente)
// object.values - trás valores e object.keys - trás as chaves
console.log(Object.entries(cliente))