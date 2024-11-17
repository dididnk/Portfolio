$(document).ready(function(){
    var $window = $(window);
    var $html = $('html');
    var $navbar = $('.navbar');
    var $scrollUpBtn = $('.scroll-up-btn');
    var $menuItems = $('.navbar .menu li a');
    var $menu = $('.navbar .menu');
    var $menuBtn = $('.menu-btn');
    
    // Scroll event handler
    $window.scroll(function(){
        // Sticky navbar on scroll
        if ($window.scrollTop() > 20) {
            $navbar.addClass("sticky");
        } else {
            $navbar.removeClass("sticky");
        }
        
        // Scroll-up button show/hide
        if ($window.scrollTop() > 500) {
            $scrollUpBtn.addClass("show");
        } else {
            $scrollUpBtn.removeClass("show");
        }
    });

    // Scroll-up button click handler
    $scrollUpBtn.click(function(){
        $html.animate({scrollTop: 0});
        // Remove smooth scroll on slide-up button click
        $html.css("scrollBehavior", "auto");
    });

    // Menu item click handler
    $menuItems.click(function(){
        // Apply smooth scroll on menu items click
        $html.css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $menuBtn.click(function(){
        $menu.toggleClass("active");
        $menuBtn.find('i').toggleClass("active");
    });

    // Typing text animation script
    var myBio = [" Développeur de logiciels ", " Aspirant professionnel DevSecOps ", " Spécialisé en cybersécurité et cloud "];
    var typed = new Typed(".typing", {
        strings: myBio,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
