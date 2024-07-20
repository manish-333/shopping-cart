var isstatus = document.querySelector("h5")
var add = document.querySelector("#add")
var check=0

add.addEventListener("click" ,function(){
    if(check == 0){

    
    isstatus.innerHTML = "Friends"
    isstatus.style.color = "green"
check = 1
    }
    else{
isstatus.innerHTML = "Strager"
    isstatus.style.color = "red"
    }
})
