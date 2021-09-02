

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.mobile').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('toggled');
    })
});