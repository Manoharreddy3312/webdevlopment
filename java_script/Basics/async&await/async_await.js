//! ASYNC:
//  it is a keyword 
// it is used to before a function to make a function perform asynchronously
// it will return a promise

//! AWAIT:
//  it is a keyword 
// await is used within a async funnction
// without async we cannot use await keyword
// await will wait for the ppromise to get the resolved



async function fetchRecipes() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        const container = document.getElementById("container");

        data.recipes.forEach(recipe => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="card-content">
                    <h3>${recipe.name}</h3>
                    <p class="rating">⭐ Rating: ${recipe.rating}</p>
                    <p>🍴 Cuisine: ${recipe.cuisine}</p>
                    <p>⏱️ Time: ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</p>
                </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}
fetchRecipes();



















