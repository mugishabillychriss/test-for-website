let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartItemsList.innerHTML = '';
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.item} - $${product.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });
    
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout!');
    cart = [];
    total = 0;
    updateCart();
}
