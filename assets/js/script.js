var header = document.querySelector("header");
console.log(header);
window.addEventListener('scroll',myFunction);
function myFunction(){
    if (window.scrollY > 500) {
        header.style.backgroundColor = "white";
    }  
    else {
        header.style.backgroundColor = "black";
    }
}