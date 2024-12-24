const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.elements-header ul');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});