const notas = [10, 8, 7, 6, 9];

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : nota + 1 );
    
console.log(notasAtualizadas);