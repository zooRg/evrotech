import { Swiper, Pagination, Navigation, EffectFade, Lazy } from 'swiper/js/swiper.esm';

Swiper.use([Pagination, Navigation, EffectFade, Lazy]);

import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', function()
{
	$('.header-menu-item-parent').hover(function()
	{
		$('.header-wrapper').addClass('blur');
	}, function()
	{
		$('.header-wrapper').removeClass('blur');
	})
	
	var swiper = new Swiper('.header-slider', {
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
	
	var swiper2 = new Swiper('.recommendation-slides', {
		slidesPerView: 5,
		spaceBetween: 30,
		navigation: {
			nextEl: $next,
			prevEl: $prev,
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
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
});