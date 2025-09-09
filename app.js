'use strict'

const botaoPesquisarRaca = document.getElementById('botao')

async function buscarImagens(){
    const nomeEscrito = document.getElementById('nome')
    const racaEscrita = nomeEscrito.value;

    const url = `https://dog.ceo/api/breed/${racaEscrita}/images`
    const response = await fetch (url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message 
}

async function mostrarImagens() {
    const urls = await buscarImagens(imagens.message);
    const galeria = document.getElementById('imagens');

        galeria.innerHTML = urls
          .map(url => `<img src="${url}" alt="Imagem da galeria">`)
          .join('');
      }

botaoPesquisarRaca.addEventListener('click', mostrarImagens)

