const imagem = document.querySelector('#game-img')


imagem.addEventListener('mouseenter', () =>{
    let rotacao = Math.random(-1, 1)*3
    console.log(rotacao);
    imagem.style.transform = `rotate(${rotacao}deg) scale(1.3)`;
});

imagem.addEventListener('mouseleave', () =>{
    imagem.style.transform = `rotate(0deg) scale(1)`;
});