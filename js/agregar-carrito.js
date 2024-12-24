document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.querySelector('.icon-cart span');
    const listCart = document.querySelector('.listCart');
    const totalElement = document.getElementById('total');
    const overlay = document.querySelector('.overlay');
    const cartTab = document.querySelector('.cartTab');
    const closeCartButton = document.querySelector('.close');

    // Actualizar el número en el carrito
    function updateCartIcon() {
        const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartIcon.textContent = totalQuantity;
    }

    function renderCart() {
        listCart.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-wrap">
                <div class="cart-item-details">
                    <h5>${item.title}</h5>
                    <div class="cart-price">
                        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                </div>
            </div>

            <div class="remove-button">
                <button class="remove-item" data-id="${item.id}">X</button>
            </div>
            `;
            listCart.appendChild(cartItem);
        });

        totalElement.textContent = `$${subtotal.toFixed(2)}`;

        // Sacar del carrito
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    // Agregar a carrito
    function addToCart(event) {
        const button = event.target;
        const product = {
            id: button.getAttribute('data-id'),
            title: button.getAttribute('data-title'),
            price: parseFloat(button.getAttribute('data-price')),
            quantity: parseInt(button.previousElementSibling.value), // Get quantity input
            image: button.getAttribute('data-image'),
        };

        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            // Actualizar sí agrego más del mismo producto
            cart[existingProductIndex].quantity += product.quantity;
        } else {
            // SINO agregar nuevo producto
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartIcon();
        renderCart();
    }

    // Sacar del carrito
    function removeFromCart(event) {
        const productId = event.target.dataset.id;
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex > -1) {
            cart.splice(productIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartIcon();
            renderCart();
        }
    }

    document.querySelectorAll('.addToCart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    updateCartIcon();
    renderCart();
});