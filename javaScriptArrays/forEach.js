const notas = [10, 6.5, 8, 10];

let somaDasNotas = 0;

notas.forEach( notas => {
    somaDasNotas += notas;
})

let medias = somaDasNotas/notas.length;

const nomes = ['Ana','Julia','Pedro','Marcelo']

nomes.forEach(chamaNome)

function chamaNome(nome){
    console.log(nome);
}  

console.log(chamaNome('Julia'));
console.log(medias);