setInterval(()=>{
    let randomCode = Math.floor(Math.random()*1000000);
    document.body.style.backgroundColor = `#${randomCode}`
    document.body.style.transitionDuration = "2s"
},2000)
