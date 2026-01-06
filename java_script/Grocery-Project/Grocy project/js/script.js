let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


// Select all trash icons inside the shopping cart
let cartTrashIcons = document.querySelectorAll('.shopping-cart .fa-trash');

cartTrashIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove the parent .box element (the cart item)
        icon.parentElement.remove();

        // Optionally, update total here if needed
        updateCartTotal();
    });
});

// Function to update total price (optional)
function updateCartTotal() {
    let total = 0;
    let cartItems = document.querySelectorAll('.shopping-cart .box');
    cartItems.forEach(item => {
        let priceElement = item.querySelector('.price');
        if (priceElement) {
            // Extract numeric value from price string
            let priceText = priceElement.textContent.replace(/[^0-9.-]+/g,"");
            total += parseFloat(priceText);
        }
    });
    document.querySelector('.shopping-cart .total').textContent = `total : $${total.toFixed(2)}/-`;
}
