document.addEventListener("DOMContentLoaded", () => {
  displayCart();
})

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   console.log(cart);
  let cartContent = document.getElementById("cartContent");
  // console.log(cartContent);
  let totalprice = document.getElementById("totalprice");
  console.log(totalprice)



  if(cart.length===0){
    cartContent.innerHTML = `Your Cart is Empty...Start Shopping...<button class="back_home" onclick="history.back()">Back to Home</button>`;
    if(totalprice) totalprice.innerHTML = "";
    return;
  }
  
  // Clear the cart before re-rendering

  cartContent.innerHTML = ""; 
  let total = 0
  cart.map((product,i)=>{
    // console.log(product)
    total += product.price * 90 * (product.quantity || 1);
    console.log(total)



    cartContent.innerHTML += `
    <main>
      <div class="cart-item">
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="item-info">
          <h3>${product.title}</h3>

          <p>Price: ₹ ${(product.price * 90 * (product.quantity || 1)).toFixed(2)}</p>

          <div class="quantity-controls">
             <button onclick="decrementItem(${i})">-</button>
             <span>${product.quantity || 1}</span>
             <button onclick="incrementItem(${i})">+</button>
          </div>

          <button onclick="removeFromCart(${i})">Remove</button>
        </div>
      </div>
      <div>


      </<div>
    </main>

 `;

  });

  totalprice.innerHTML = `Total Price : ₹ ${total.toFixed(2)}`;

};

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Remove one item at the given index
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart(); // Refresh the cart display
}

function incrementItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = (cart[index].quantity || 1) + 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function decrementItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if ((cart[index].quantity || 1) > 1) {
    cart[index].quantity = (cart[index].quantity || 1) - 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
