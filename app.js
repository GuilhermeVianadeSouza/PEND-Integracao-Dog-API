'use strict'

//Declarando o botão que usarei para fazer uma ação de busca
const botaoPesquisarRaca = document.getElementById('botao')

//funcao de buscar imagem através de API. Async é necessário para utilização do AWAIT
async function buscarImagens(){
    
    //declarando o input, pegando seu id e pegando em si o valor escrito.
    const nomeEscrito = document.getElementById('nome')
    const racaEscrita = nomeEscrito.value

    //Constante na qual pegan
    const url = `https://dog.ceo/api/breed/${racaEscrita}/images`
    const response = await fetch (url) //pedido de requisição das informações
    const imagens = await response.json() //transformando a resquisição pega em arquivo json 
    console.log(imagens.message)
    return imagens.message 
}

//Função para mostrar as imagens na tela
async function mostrarImagens() {
    //Essa constante espera que a função buscarImagens retorne imagens.message para continuar a ação
    const urls = await buscarImagens(imagens.message);
    const galeria = document.getElementById('imagens');

        galeria = urls //Aqui a constante declarada galeria vai definir o conteudo HTML
          .map(url => `<img src="${url}" alt="Imagem da galeria">`) //
          .join('');//
      }

botaoPesquisarRaca.addEventListener('click', mostrarImagens)

