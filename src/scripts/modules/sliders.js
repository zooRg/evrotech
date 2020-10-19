const mainSwiper = new Swiper('.main-slider', {
    autoplay: {
        delay: 5000,
    },
    speed: 3000,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let $prev = $('.recommendation-bottom').find('.button-prev');
let $next = $('.recommendation-bottom').find('.button-next');

const recommendationSwiper = new Swiper('.recommendation-slides', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: $next,
        prevEl: $prev,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 5,
        }
    }
});

let $prev = $('.partner-about-button').find('.button-prev');
let $next = $('.partner-about-button').find('.button-next');

const partnerAboutSwiper = new Swiper('.partner-about-slides', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: $next,
        prevEl: $prev,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 5,
        }
    }
});