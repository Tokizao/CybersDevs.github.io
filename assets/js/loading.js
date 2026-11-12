const loader = document.querySelector('.page-loader');

window.addEventListener('load', () => {
    loader.classList.add('loaded');
});

const links = document.querySelectorAll('.btn-navegar');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const destino = link.href
        const loader = document.querySelector('.page-loader');
        loader.classList.remove('loaded')

        setTimeout(() => {
            window.location.href = destino;
        }, 500);
    });
});