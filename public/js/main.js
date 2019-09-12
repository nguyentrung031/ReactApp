/**
 *
 *  sticky navigation
 *
 */

// let navbar = $(".navbar");

// $(window).scroll(function () {
//     // get the complete hight of window
//     let oTop = $(".container-fluid.p-0.header").offset().top - window.innerHeight;
//     if ($(window).scrollTop() > oTop) {
//         navbar.addClass("sticky");
//     } else {
//         navbar.removeClass("sticky");
//     }
// });
// slide two
$(document).ready(function () {
    $('.slide-one').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.slide-btn .next'),
        prevArrow: $('.slide-btn .prev')
    });
    // product new
    $('.product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.product-btn .next'),
        prevArrow: $('.product-btn .prev')
    });
    // product hot
    $('.product-hot').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.product-btn-hot .next'),
        prevArrow: $('.product-btn-hot .prev')
    });
    // logo
    $('.logo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.logo-btn .next'),
        prevArrow: $('.logo-btn .prev')
    });
});