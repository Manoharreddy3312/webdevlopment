document.addEventListener('DOMContentLoaded', () => {
    fetchData();

    // Logout and User Info
    const loggedInUser = localStorage.getItem("loggedInUser");
    const welcomeUserEl = document.getElementById("welcomeUser");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loggedInUser && welcomeUserEl) {
        welcomeUserEl.textContent = `Welcome, ${loggedInUser}`;
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to logout?")) {
                localStorage.removeItem("loggedInUser");
                window.location.href = "../Registration/Register.html";
            }
        });
    }

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// ---------Fetching API----------

let product = [];

function fetchData() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((val) => {
      product = val.products;
      console.log(product);
      localStorage.setItem("allProducts", JSON.stringify(product));
      displayProducts(product);
    })
    .catch((err) => console.error(err));
}

// -------display Products----------

function displayProducts(prod) {
  console.log(prod, "displayProducts")
  let output = "";
  prod.map((val) => {
    output += `
  <main>
  <div class="image">
  <img src="${val.thumbnail}">
  </div>
  <h3>${val.title}</h3>
  <div class="info">
    <span class="rating">${val.rating} ★</span>
    <p class="price">₹${(val.price * 90).toFixed(2)}</p>
  </div>
  <div class="actions">
    <p class="stock">Stock: ${val.stock}</p>
    <button onclick="details(${val.id})">Details</button>
  </div>

  </main>

  `
  })
  document.getElementById("product_container").innerHTML = output;
}

// ------- SERCH ITEMS ---------

document.getElementById("search_bar").addEventListener("input", function searchItems(e) {
  let searchTerm = e.target.value.toLowerCase();
  let filteredProduct = product.filter((v) => {
    return v.title.toLowerCase().includes(searchTerm) ||
      v.category.toLowerCase().includes(searchTerm.toLowerCase());
  })
  displayProducts(filteredProduct);
})

// -------- ViewDetails page ----------

function details(productId){
  console.log(productId);
  localStorage.setItem("productId",productId);
  window.location.href = "../viewDetails/viewDetail.html"
}
