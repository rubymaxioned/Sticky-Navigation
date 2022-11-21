var header = document.querySelector("header");
var att = document.querySelectorAll(".nav-links a");
console.log(att);
console.log(header);
window.addEventListener('scroll',myFunction);
function myFunction(){
    if (window.scrollY > 500) {
        header.style.backgroundColor = "white";
        att.forEach(function(list){
            list.classList.add('color');
        })
    }  
    else {
        header.style.backgroundColor = "black";
        att.forEach(function(list){
            list.classList.remove('color');
        })
    }
}