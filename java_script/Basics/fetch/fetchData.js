// !FETCH:
// =======
// it IS THE PROMISE BASED INBUILT METHOD WHICH IS USED TO GET THE DATA FROM THE SERVER.(backend)

fetch("https://dummyjson.com/recipes").then((res) => {
    return res.json()
}).then((val) => {
    console.log(val.recipes);
    let output = ""
    val.recipes.map((v) => {
        output += `
        <main>
        <img src = "${v.image}"/>
        <h2>${v.name}</h2>
        <h3>servings: ${v.servings}</h3>
        <ul>
        ${v.mealType.map((meal) => `<li>${meal}</li>`).join("")}
        cuisine: ${v.cuisine}

        </ul>
        <h4 class="tags">Tags:</h4>
        <ul>
        ${v.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        <h3>rating: ${v.rating} ⭐</h3>



        </main>
        `
    })
    document.getElementById("container").innerHTML = output
}).catch((err) => {
    console.log(err.message);
    document.getElementById("container").innerHTML = `<h2 style="color:red;">${err.message}</h2>`

})

