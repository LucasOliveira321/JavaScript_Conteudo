const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value , evento.target.elements['quantidade'].value)
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

}