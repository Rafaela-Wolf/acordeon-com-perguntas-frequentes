const itensPerguntasERepostas = document.querySelectorAll('.item');

itensPerguntasERepostas.forEach(function (item) {
    item.addEventListener('click', function () {
    const itemAtivo = document.querySelector('.ativo');

        if (itemAtivo) {
        itemAtivo.classList.remove('ativo');
        }

        item.classList.add('ativo');
    });
});