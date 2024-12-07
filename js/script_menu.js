function clickMenu() {
    const menu = document.getElementById('menu');
    
    // Verifica se a largura da tela é menor que 855px (tela mobile)
    if (window.innerWidth < 855) {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block'; // Exibe o menu
        } else {
            menu.style.display = 'none'; // Oculta o menu
        }
    } else {
        // Para telas maiores que 855px (desktop), garante que o menu está visível
        menu.style.display = 'block';
    }
}

// Adiciona um ouvinte para o evento resize para atualizar o menu quando a tela for redimensionada
window.addEventListener('resize', clickMenu);