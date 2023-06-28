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

let informacoesPrimarias = ""

for (let informacao in cliente){
    if(typeof cliente[informacao] === 'object' || typeof cliente[informacao] === 'function'){
        
        continue

    }else{
        informacoesPrimarias += `
        ${informacao}: ${cliente[informacao]}`
    }
}

console.log(informacoesPrimarias)