const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
// verificando se já foi criado um array com os itens, 
// caso já tenha um array "item", ele vai atribuir os itens
// já cadastrados ao array, caso contrario vai criar um array vazio
// JSON.PARSE serve para o HTML identificar itens como array
const itens = JSON.parse(localStorage.getItem("item")) || [];

itens.array.forEach( (element) => {
    console.log(element.nome, element.quantidade)
});

form.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
});

function criaElemento(nome, quantidade){
    console.log(nome)
    console.log(quantidade)

    // cria um novo elemento no html
    const novoItem = document.createElement('li')
    // adiciona class ao elemento criado
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    // para adicionar o numeroItem é preciso utilizar o metodo appendChild
    // porque o numeroItem é um objeto, com o valor de <strong> 1 </strong>
    // buscando assim o resultado de 
    // <li class="item">
    //     <strong> 1 </strong>
    //     camiseta
    // </li>   
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome
    
    lista.appendChild(novoItem)

    // localStorage é a memoria do site que armazena as informações importantes
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }
    itens.push(itemAtual)
    // O metodo JSON.stringify(itemAtual) serve para salvar o item como string e não como objeto
    localStorage.setItem("item", JSON.stringify(itens))
}