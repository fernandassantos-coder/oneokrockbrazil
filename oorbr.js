const pesquisaContainer = document.querySelector('.pesquisa-container');
const pesquisaBtn = document.querySelector('.pesquisa-btn');
const pesquisaInput = document.querySelector('.pesquisa-input');

pesquisaBtn.addEventListener('click', (e) => {
    if (!pesquisaContainer.classList.contains('active')) {
        pesquisaContainer.classList.add('active');
        pesquisaInput.focus();
        e.preventDefault();
    } else {
        if (pesquisaInput.value.trim() === "") {
            pesquisaContainer.classList.remove('active');
            e.preventDefault();
        }
    }
});

document.addEventListener('click', (e) => {
    if (!pesquisaContainer.contains(e.target)) {
        pesquisaContainer.classList.remove('active');
    }
})