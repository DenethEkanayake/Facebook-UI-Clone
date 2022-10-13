var navbar = document.getElementById("navbar")
var navleft = document.getElementById("nav-left")


window.onscroll = function(){
    if(window.pageYOffset >= navleft.offsetTop){
        navbar.classList.add("sticky")
    }

    else{
        navbar.classList.remove("sticky")
    }
}