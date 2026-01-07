function addToWishlist(productName) {
    let wishlist = document.getElementById("wishlist");

    // prevent duplicate
    if (document.getElementById(productName)) return;

    let li = document.createElement("li");
    li.id = productName;

    li.innerHTML = `
        ${productName}
        <button class="remove-btn" onclick="removeFromWishlist('${productName}')">
         Remove
        </button>
    `;

    wishlist.appendChild(li);
}

function removeFromWishlist(productName) {
    let item = document.getElementById(productName);
    item.remove();
}

function incrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}