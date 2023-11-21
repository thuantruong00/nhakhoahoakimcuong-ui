$(document).ready(function () {
    $("#slider-banner-main").owlCarousel({
        loop: true,
        navText: ['<span>&#x3008;</span>', '<span>&#x3009;</span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        nav: true,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false

    });
});
$(document).ready(function () {
    $("#slider-intro").owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false

    });
});