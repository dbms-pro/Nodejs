(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);
  // listen for the submit event on the form
  document.getElementById('login-form').addEventListener('submit', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // redirect the user to the login page
    window.location.href = '/login';
  });
  document.getElementById('home').addEventListener('submit', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // redirect the user to the other page
    window.location.href = '/home';
  });
  document.getElementById('recipe').addEventListener('submit', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // redirect the user to the other page
    window.location.href = '/recipe';
  });
  document.getElementById('contact').addEventListener('submit', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // redirect the user to the other page
    window.location.href = '/contact';
  });
  document.getElementById('about').addEventListener('submit', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // redirect the user to the other page
    window.location.href = '/about';
  });