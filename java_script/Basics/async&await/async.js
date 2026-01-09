async function fetchData() {
    let res = await fetch("https://https://dummyjson.com/recipes")
    let v = await res.json();
    console.log(v)
    let data = ""
    v.recipes.map((val)=>{
        data +=`
        <h1>${val.name}</h1>
        
        `
    })

    document.getElementById("root").innerHTML = data
}
fetchData()