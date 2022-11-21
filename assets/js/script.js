var header = document.querySelector("header");
var att = document.querySelectorAll(".nav-links a");

window.addEventListener('scroll',myFunction);
function myFunction(){
    if (window.scrollY > 500) {
        header.style.backgroundColor = "#fff";
        att.forEach(function(list){
            list.classList.add('color');
        })
    }  
    else {
        header.style.backgroundColor = "#000";
        att.forEach(function(list){
            list.classList.remove('color');
        })
    }
}