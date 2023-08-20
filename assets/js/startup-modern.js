(function() {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict

// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll('nav ul li a');

// Adiciona um ouvinte de evento para cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe 'active' de todos os itens
        menuItems.forEach(item => item.classList.remove('active'));
        
        // Adiciona a classe 'active' apenas ao item clicado
        this.classList.add('active');
    });
});
