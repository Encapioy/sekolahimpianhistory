var swiper = new Swiper('.slide-content', {
    slidesPerView: 3,

    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

var appendNumber = 4;
var prependNumber = 1;
document
    .querySelector('.prepend-2-slides')
    .addEventListener('click', function(e) {
        e.preventDefault();
        swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    });
document
    .querySelector('.prepend-slide')
    .addEventListener('click', function(e) {
        e.preventDefault();
        swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    });
document
    .querySelector('.append-slide')
    .addEventListener('click', function(e) {
        e.preventDefault();
        swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    });
document
    .querySelector('.append-2-slides')
    .addEventListener('click', function(e) {
        e.preventDefault();
        swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    });