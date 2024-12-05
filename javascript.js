const inputel =document.querySelector(".input");
const bodyel=document.querySelector("body");


inputel.checked=JSON.parse
(localStorage.getItem("mode"));

updatebody()

function updatebody() {
    if (inputel.checked) {
        bodyel.style.background = "black";
        
    }else{
        bodyel.style.background ="white";
    }
    
}


inputel.addEventListener("input",()=>{
    updatebody()
    updatelocalstorage()
})


function updatelocalstorage() {
    localStorage.setItem("mode", JSON.stringify(inputel.checked));
    
}