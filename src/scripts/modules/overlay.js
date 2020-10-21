import $ from 'jquery';

window.showOverlay = () =>
{
	$('.overlay').fadeIn();
	$('body').addClass('is-overflow');
};

window.hideOverlay = () =>
{
	$('.overlay').fadeOut();
	$('body').removeClass('is-overflow');
};