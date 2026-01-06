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
