const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        removerSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');
        
        alterarImgPersonagemGrande(personagem);
        
        alterarNomePersonagemGrande(personagem);
        
        alterarDescricaoPersonagemGrande(personagem);
    })
})

function alterarDescricaoPersonagemGrande(personagem) {
    const drescricaoPersonagemGrande = document.getElementById('descricao-personagem');
    drescricaoPersonagemGrande.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemGrande(personagem) {
    const nomePersonagemGrande = document.getElementById('nome-personagem');
    nomePersonagemGrande.innerText = personagem.getAttribute('data-name');
}

function alterarImgPersonagemGrande(personagem) {
    const imgPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imgPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSeleciondo = document.querySelector('.selecionado');
    personagemSeleciondo.classList.remove('selecionado');
}
