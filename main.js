'use scrict' /* Para ajudar a reconhecer os erros */

const botaoTrocarImagem = document.getElementById('trocar-imagem')

const imagens = [
    'var(--img1)',
    'var(--img2)',
];

function criarElemento () {
    const body = document.querySelector('body')
    const novaImg = document.createElement('img')
    novaImg.textContent = './img/img2.webp'

    body.appendChild(novaImg)
}

/*Função anônima, que não tem nome */
botaoTrocarImagem.addEventListener('click', criarElemento)






