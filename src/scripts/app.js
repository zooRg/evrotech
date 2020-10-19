import $             from 'jquery';
import { gsap }      from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

import './modules/header'
import './modules/menu';
import './modules/overlay';
import './modules/sliders';
import toggle        from './modules/toggle';
import fixedMenu     from './modules/fixedMenu';
import popupHelper   from './modules/popupHelper';

document.addEventListener('DOMContentLoaded', function()
{
	$('[data-fancybox="gallery"]').fancybox({});
	$('.js-phone').inputmask({ mask: '+7 (999) 999-99-99', showMaskOnHover: false });
});

document.addEventListener('DOMContentLoaded', () =>
{
	let popup = document.querySelector('.popup');
	window.modal = {};
	window.modal = new popupHelper(popup);
});

const HeaderToFixedEnum = {
	fixedItemsEnum: {
		MAIN_WRAPPER: document.querySelector(`.js-addFixed`)
	}
};

document.addEventListener('DOMContentLoaded', () =>
{
	if (document.querySelectorAll(`.js-addFixed`).length)
	{
		new fixedMenu(HeaderToFixedEnum);
	}
});


window.initToggle = () =>
{
	$('[data-toggle="init"]').each(function()
	{
		let button = $(this).find('[data-toggle="button"]').first();
		let area = $(this).find('[data-toggle="area"]').first();
		let text = Boolean(button.data('otext') || button.data('ctext'));
		new toggle(button, area, text);
	});
};

document.addEventListener('DOMContentLoaded', () =>
{
	window.initToggle();
});