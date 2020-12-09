let i = 1;
let item = document.querySelectorAll(".anim")

function anim(){
    setInterval(function(){
        item[i].style.backgroundColor = "red";
        item[i-1].style.backgroundColor = "white";
        i++;
        
        if  ( i > 9){
            item[i-1].style.backgroundColor = "white";
            i = 1
           }
            
    }, 500)
}
anim()