/* JS SLIDER */
function slides() {
    $('.owl-carousel-slides').owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: true
    })
}
function tabs() {
    $('.owl-carousel-tabs').owlCarousel({
        items:1 ,
        nav: true,
        dots: true
    })
}
function slidelogo() {
    $('.owl-carousel-logo').owlCarousel({
        loop: false,
        margin: 10,
        autoplay: true,
        nav: false,
        navigation: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
}



