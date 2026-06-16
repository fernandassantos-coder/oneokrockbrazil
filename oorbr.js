document.addEventListener('DOMContentLoaded', () => {
    const pesquisaContainer = document.querySelector('.pesquisa-container');
    const pesquisaBtn = document.querySelector('.pesquisa-btn');
    const pesquisaInput = document.querySelector('.pesquisa-input');

    // Teste de segurança: se não encontrar, avisa no console
    if (!pesquisaContainer || !pesquisaBtn || !pesquisaInput) {
        console.error("Falta algum elemento no HTML: verifique as classes .pesquisa-container, .pesquisa-btn e .pesquisa-input");
        return;
    }

    pesquisaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Impede o clique de propagar para o document
        
        pesquisaContainer.classList.toggle('active');
        
        if (pesquisaContainer.classList.contains('active')) {
            pesquisaInput.focus();
        }
    });

    // Impede que o clique dentro da caixa de texto feche a barra
    pesquisaInput.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Fecha a barra se clicar fora
    document.addEventListener('click', (e) => {
        if (!pesquisaContainer.contains(e.target)) {
            pesquisaContainer.classList.remove('active');
        }
    });
});