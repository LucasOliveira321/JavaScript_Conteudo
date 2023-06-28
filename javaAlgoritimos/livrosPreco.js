const livros = require('./listaLivros');

let maisBarato = 0;

for(let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato é R$${livros[maisBarato].preco},00, e o titulo é ${livros[maisBarato].titulo}.`)