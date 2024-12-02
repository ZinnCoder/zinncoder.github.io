function showHabilidade(id) {
    const habilidadeTitulo = document.getElementById('habilidade-titulo');
    const habilidadeDescricao = document.getElementById('habilidade-descricao');
    const video = document.getElementById('video');
    const habilidadeVideo = document.getElementById('habilidade-video');

    // Exibe o player de vídeo
    habilidadeVideo.style.display = 'block';  // Faz o vídeo aparecer

    switch(id) {
        case 1:
            habilidadeTitulo.innerHTML = 'Passiva - Guerrilheiro';
            habilidadeDescricao.innerHTML = 'Teemo se move rapidamente ao longo do mapa e é capaz de emboscar inimigos com suas armadilhas. Além disso, suas habilidades aumentam sua velocidade de movimento.';
            video.src = 'videos/Passiva.mp4';
            break;
        case 2:
            habilidadeTitulo.innerHTML = 'Q - Dardo Venenoso';
            habilidadeDescricao.innerHTML = 'Teemo atira um dardo venenoso em um inimigo, causando dano e envenenando o alvo por alguns segundos.';
            video.src = 'videos/Q.mp4';
            break;
        case 3:
            habilidadeTitulo.innerHTML = 'W - Mover Rápido';
            habilidadeDescricao.innerHTML = 'Teemo aumenta sua velocidade de movimento por um tempo, permitindo que ele se desloque rapidamente pelo campo de batalha.';
            video.src = 'videos/W.mp4';
            break;
        case 4:
            habilidadeTitulo.innerHTML = 'E - Tática de Camuflagem';
            habilidadeDescricao.innerHTML = 'Teemo se torna invisível por um tempo, permitindo emboscadas ou escapar de situações perigosas.';
            video.src = 'videos/E.mp4';
            break;
        case 5:
            habilidadeTitulo.innerHTML = 'R - Armadilha Venenosa';
            habilidadeDescricao.innerHTML = 'Teemo coloca armadilhas que explodem ao contato, causando dano massivo e envenenando os inimigos ao redor da armadilha.';
            video.src = 'videos/R.mp4';
            break;
        default:
            habilidadeTitulo.innerHTML = 'Clique em uma habilidade';
            habilidadeDescricao.innerHTML = 'Escolha uma habilidade para ver mais detalhes.';
            video.src = '';
            habilidadeVideo.style.display = 'none';  // Esconde o vídeo quando não for selecionado
    }
}
