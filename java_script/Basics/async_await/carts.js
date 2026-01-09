const cartContainer = document.getElementById("cartContainer");

async function fetchCarts() {
  try {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();

    cartContainer.innerHTML = "";

    data.carts.forEach(cart => {
      const cartDiv = document.createElement("div");
      cartDiv.className = "cart";

      cartDiv.innerHTML = `
        <h2>User ID: ${cart.userId}</h2>

        <div class="products">
          ${cart.products.map(product => `
            <div class="product">
              <img src="${product.thumbnail}" alt="${product.title}">
              <h4>${product.title}</h4>
              <p>Price: ₹${product.price}</p>
              <p>Quantity: ${product.quantity}</p>
              <p>Total: ₹${product.total}</p>
            </div>
          `).join("")}
        </div>

        <div class="cart-summary">
          <span>Total Products: ${cart.totalProducts}</span>
          <span>Cart Total: ₹${cart.discountedTotal}</span>
        </div>
      `;

      cartContainer.appendChild(cartDiv);
    });

  } catch (error) {
    cartContainer.innerHTML = "<p class = 'error'>Error loading carts</p>";
    console.error(error);
  }
}

fetchCarts();
