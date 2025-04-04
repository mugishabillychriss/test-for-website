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
    // Fill the message box with cart details
    const messageBox = document.getElementById('message');
    let messageContent = 'Proceeding to checkout with the following items:\n\n';
    cart.forEach(product => {
        messageContent += `${product.item} - $${product.price.toFixed(2)}\n`;
    });
    messageContent += `\nTotal: $${total.toFixed(2)}`;
    messageBox.value = messageContent;

    // Submit the form
    const contactForm = document.getElementById('contact-form');
    contactForm.submit();

    // Clear the cart
    cart = [];
    total = 0;
    updateCart();
}

}
