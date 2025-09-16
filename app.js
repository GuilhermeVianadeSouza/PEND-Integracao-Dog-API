'use strict'

//Declarando o botão que usarei para fazer uma ação de busca
const botaoPesquisarRaca = document.getElementById('botao')
const galeria = document.getElementById('imagens');


//funcao de buscar imagem através de API. Async é necessário para utilização do AWAIT
async function buscarImagens(){
    
    //declarando o input, pegando seu id e pegando em si o valor escrito.
    const nomeEscrito = document.getElementById('nome')
    const racaEscrita = nomeEscrito.value

    //Constante na qual pega as imagens
    const url = `https://dog.ceo/api/breed/${racaEscrita}/images`
    const response = await fetch (url) //pedido de requisição das informações
    const imagens = await response.json() //transformando a resquisição pega em arquivo json 
    return imagens.message 
}

//Função para mostrar as imagens na tela
async function mostrarImagens() {
    //Essa constante espera que a função buscarImagens retorne imagens.message para continuar a ação
    const urls = await buscarImagens(imagens.message);
    
    galeria.textContent = ''; //limpa todos os textos que estão na tela, isso inclui as url das imagens para que elas não apareçam na tela.

    //Criando uma constante que vai receber um .map que vai buscar as url através de uma arrow fuction;
    const elementos = urls.map(url => {
        const img = document.createElement('img'); //Em seguida é declarado a criação do elemento img que vai receber o src e alt da imagem e returnar img.
        img.src = url;
        img.alt = 'Imagem da raça';
        return img;
      });

      //
      elementos.forEach(img => galeria.appendChild(img)); //Por fim, procurando através de um forEach 
    }

botaoPesquisarRaca.addEventListener('click', mostrarImagens)
