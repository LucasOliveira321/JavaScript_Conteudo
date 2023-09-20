// var consultaCep = fetch('https://viacep.com.br/ws/12237619/json/')
// .then(resposta => resposta.json())
// .then(r => {
//    if(r.erro){
//        throw Error('Este CEP não existe!');
//    }else
//        console.log(r)    
// })
// .catch(erro => console.log(erro)).finally(console.log('Processamento concluído!'));

async function buscaEndereco(cep){

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertido = await consultaCep.json();
        if(consultaCepConvertido.erro){
            throw Error('CEP não existente!');
        }

        var cidade = document.getElementById('cidade');
        var endereco = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertido.localidade;
        endereco.value = consultaCepConvertido.logradouro;
        estado.value = consultaCepConvertido.uf;

        console.log(consultaCepConvertido);
        return consultaCepConvertido;
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}
// PODE SER FEITO DESSA MANEIRA PARA SOLICITAR MAIS DE UM CEP
// let ceps = ['12237610','12237828'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(r => console.log(r));

var cep = document.getElementById('cep');
// "focusout" é um evento que acontece quando o usuario clica no input e depois clica fora
// ao clicar fora do input ele gera o evento
cep.addEventListener("focusout", () => buscaEndereco(cep.value));