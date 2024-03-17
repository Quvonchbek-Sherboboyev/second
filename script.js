const btn = document.querySelector(".btn"),
    ras = document.querySelector(".ras").value,
    we = document.querySelector(".we").value,
    btn1 = document.querySelector(".btn1")
// btn.addEventListener("click", ()=>{

//     if(ras.length << 5 || we.length << 7 )
//     alert("  name Error")
//     else {
//     alert("  name true")
//     }   

// })
btn1.addEventListener("click", ()=>{
    let randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").value = randomNum;
})


