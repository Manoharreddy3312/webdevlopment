async function productsList() {
    let res  = await fetch("https://dummyjson.com/products")
    let data= await res.json()
    // console.log(v)
    let ouput = ""
    data.productsList.map(()=>{
        ouput +=
        `
        <main>


        </main>
        `

        
    })
    document.getElementById = "root"
    
}
productsList();