import { Swiper, Pagination, Navigation, EffectFade, Autoplay, Thumbs } from 'swiper/js/swiper.esm';

Swiper.use([Pagination, Navigation, EffectFade, Autoplay, Thumbs]);

const indexPicture = new Swiper('.index-picture__slider', {
    grabCursor: 'true',
    autoplay: {
        delay: 5000,
    },
    speed: 2000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.index-picture-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'pagination-item',
        bulletActiveClass: 'pagination-item_active',
        renderBullet: function (index, className) {
            return `<span class="${className}" data-index="0${index + 1}"></span>`;
        }
    }
});

const awardsSlider = new Swiper('.awards-slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    autoplay: {
        delay: 5000,
    },
    speed: 2000,
    grabCursor: 'true',
    pagination: {
        el: '.awards-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'awards-pagination-item',
        bulletActiveClass: 'awards-pagination-item_active',
        renderBullet: function (index, className) {
            return `<span class="${className}" data-index="0${index + 1}"></span>`;
        }
    },

    breakpoints: {
        480: {
            slidesPerView: 2,
        }
    }
});

const productsSlider = new Swiper('.products-slider', {
    slidesPerView: 1,
    grabCursor: 'true',
    autoplay: {
        delay: 5000,
    },
    speed: 2000,
    watchSlidesProgress: false,
    disableOnInteraction: true,
    breakpoints: {
        1024: {
            slidesPerView: 'auto',
            watchSlidesProgress: true,
            disableOnInteraction: false,
        },
        780: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        }
    }
});

const articlesSlider = new Swiper('.articles-slider', {
    slidesPerView: 1,
    grabCursor: 'true',
    autoplay: {
        delay: 5000,
    },
    speed: 2000,
    watchSlidesProgress: false,
    disableOnInteraction: true,
    breakpoints: {
        1024: {
            slidesPerView: 'auto',
            watchSlidesProgress: true,
            disableOnInteraction: false,
        },
        780: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
        }
    }
});

const certificateSlider = new Swiper('.certificate-slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    autoplay: {
        delay: 5000,
    },
    speed: 2000,
    grabCursor: 'true',

    breakpoints: {
        1366: {
            slidesPerView: 5,
        },
        1180: {
            slidesPerView: 4,
        },
        780: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        }
    }
});


const productsDetailThumb = new Swiper('.products-detail-thumb', {
    spaceBetween: 10,
    slidesPerView: 3,
    direction: 'horizontal',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    freeMode: true,
    breakpoints: {
        480: {
            spaceBetween: 30,
            direction: 'vertical',
        }
    }
});

const productsDetailSlider = new Swiper('.products-detail-slider', {
    slidesPerView: 1,
    thumbs: {
        swiper: productsDetailThumb
    }
});

const placeSlider = new Swiper('.products-place-slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    autoplay: {
        delay: 5000,
    },
    speed: 2000,
    grabCursor: 'true',
    pagination: {
        el: '.products-place-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'products-place-pagination-item',
        bulletActiveClass: 'products-place-pagination-item_active',
        renderBullet: function (index, className) {
            return `<span class="${className}" data-index="0${index + 1}"></span>`;
        }
    },

    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        }
    }
});

const teamSlider = new Swiper('.team-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.team-slider-next',
        prevEl: '.team-slider-prev',
    },
    breakpoints: {
        1240: {
            slidesPerView: 4,
        },
        980: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        }
    }
});

