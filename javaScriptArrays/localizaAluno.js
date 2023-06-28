const alunos = ['João', 'Maria', 'José', 'Carlos'];

const nota = [10, 9, 10, 7];

const alunosNotas = [alunos,nota];

const exibeNotaAluno = (nome) => {
    if(alunosNotas[0].includes(nome)){
        let lista = alunosNotas[0].indexOf(nome)
        return alunosNotas[0][lista] + `, sua média é ` + alunosNotas[1][lista]
    }else{
        return `Aluno não é cadastrado.`
    }
}

console.log(exibeNotaAluno('Carlos'));