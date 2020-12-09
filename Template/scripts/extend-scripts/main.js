window.onscroll = function () { navbarFunction() };

var navbar = document.getElementById("navbar-1");
var sticky = navbar.offsetTop;

function navbarFunction() {
    if (window.pageYOffset >= 75) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}