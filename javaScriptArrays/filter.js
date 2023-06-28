const nomes = ['João', 'Maria', 'José'];

const notas = [5, 6, 7];

const reprovados = nomes.filter((_,indice) => notas[indice] <= 6);

console.log(` Os alunos reprovados são: ${reprovados}`)