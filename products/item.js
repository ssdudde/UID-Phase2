document.addEventListener("DOMContentLoaded", () => {
    const productCat = localStorage.getItem("selectedProductId");
    const productName = localStorage.getItem("selectedProductName");
    const productLayout = document.querySelector(".product-layout");

    // Defensive check
    if (!mockData || !mockData[productCat]) {
        productLayout.innerHTML = "<p>Product category not found.</p>";
        return;
    }

    // Find the matching product(s)
    const items = mockData[productCat].filter(product => product.title === productName);

    if (items.length === 0) {
        productLayout.innerHTML = "<p>Product not found.</p>";
        return;
    }

    // Use 'product' inside the map, not 'items'
    productLayout.innerHTML = items.map(product => `
        <div class="box">
            <img src="${product.image}" alt="${product.title}" />
            <div class="overlay">${product.title}</div>
        </div>
        <div class="product-details">
            <div class="product-title">${product.title}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-price">${product.price}</div>
            <div class="button-container">
                <a href="cart.html" 
                    onclick="addToCart('${product.price.replace(/'/g, "\\'")}','${product.image}', '${product.title}')"
                    style="padding:10px; background:#007BFF; color:white; text-decoration:none; border-radius:5px;">
                    Add to Cart
                </a>
            </div>
        </div>
    `).join('');
});
function addToCart(price, image, title) {
    // Get cart array or initialize
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already exists in cart
    const index = cart.findIndex(item => item.title === title);
    if (index > -1) {
        cart[index].quantity += 1; // increase quantity
    } else {
        cart.push({ title, price, image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart!");
}