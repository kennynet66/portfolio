const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu')

menuToggle.addEventListener('click', () => {
    if (menu.style.display === 'block')
    {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});