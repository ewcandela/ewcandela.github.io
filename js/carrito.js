let iconCart = document.querySelector('.icon-cart');
let closeBtn = document.querySelector('.cartTab .close');
let body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
    overlay.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
    overlay.style.display = 'none';
})

//
