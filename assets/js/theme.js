// Custom theme code

if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("mainNav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Adiciona a classe quando rola
    } else {
        navbar.classList.remove("scrolled"); // Remove a classe quando volta ao topo
    }
});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
