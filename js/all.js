const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    
});
const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2.5,
    spaceBetween: 5,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2.5,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 5.5,
            spaceBetween: 5,
        },
        1280: {
            slidesPerView: 10,
            spaceBetween: 5,
        },
    },

   
});


$(document).ready(function () {
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        $('.hamburger').toggleClass('active');
        $('.aside').toggleClass('open');
    });




    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },300);
    });
});