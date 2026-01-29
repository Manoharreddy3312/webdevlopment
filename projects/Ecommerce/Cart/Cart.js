document.addEventListener("DOMContentLoaded", () => {

})

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   console.log(cart);
  let cartContent = document.getElementById("cartContent");
  console.log(cartContent);
  let totalprice = document.getElementById("totalprice");
  console.log(totalprice)


  if(cart.length===0){
    cartContent.innerHTML = `Your Cart is Empty...Start Shopping...<button class="back_home" onclick="history.back()">Back to Home</button>`;
    return;
  }
  
  // Clear the cart before re-rendering

  cartContent.innerHTML = ""; 
  cart.map((product,i)=>{
    // console.log(product)
    cartContent.innerHTML += `
    <main>
      <div class="cart-item">
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="item-info">
          <h3>${product.title}</h3>
          <p>₹ ${product.price * 90}</p>
          <button onclick="removeFromCart(${i})">Remove</button>
        </div>
      </div>
    </main>

`
  });
};
displayCart();

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Remove one item at the given index
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart(); // Refresh the cart display
}
