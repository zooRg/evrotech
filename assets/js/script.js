(function()
{
	'use strict';
	
	const mainSwiper = new Swiper('.main-slider', {
		autoplay: {
			delay: 5000
		},
		speed: 3000,
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
	
	const recommendationSwiper = new Swiper('.recommendation-slides', {
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.recommendation-bottom .button-prev',
			prevEl: '.recommendation-bottom .button-next'
		},
		breakpoints: {
			640: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 4
			},
			1500: {
				slidesPerView: 5
			}
		}
	});
	
	
	const partnerAboutSwiper = new Swiper('.partner-about-slides', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.partner-about-right',
			prevEl: '.partner-about-left'
		},
		breakpoints: {
			1024: {
				slidesPerView: 2
			}
		}
	});
	
	
	const aboutSertificatSwiper = new Swiper('.about-sertificat-slides', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			prevEl: '.about-sertificat-left',
			nextEl: '.about-sertificat-right'
		},
		breakpoints: {
			650: {
				slidesPerView: 2
			},
			900: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	});
	
	
	const membersSwiper = new Swiper('.contact-members-sliders', {
		init: false,
		direction: 'horizontal',
		slidesPerView: 1,
		spaceBetween: 30,
		mousewheel: true,
		centeredSlides: false,
		pagination: {
			el: '.contact-members-pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: 'awards-pagination-item',
			bulletActiveClass: 'awards-pagination-item_active',
			renderBullet: function(index, className)
			{
				return `<span class="${ className }" data-index="0${ index + 1 }"></span>`;
			}
		},
		breakpoints: {
			320: {
				mousewheel: false
			},
			1000: {
				slidesPerView: 2,
				mousewheel: false
			},
			1200: {
				slidesPerView: 2,
				direction: 'vertical',
				centeredSlides: true
			}
		}
	});
	if (window.matchMedia('(min-width: 1200px)').matches)
	{
		membersSwiper.init();
	}
	
	$('.awards-pagination-item').each(function()
	{
		const $item = $(this);
		$item.height($('.contact-members-sliders').height() / $('.awards-pagination-item').length);
	});
})();