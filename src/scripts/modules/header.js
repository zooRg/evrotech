document.addEventListener('DOMContentLoaded', function()
{
	$('.header-menu-item-parent').hover(function()
	{
		$('.header-wrapper').addClass('header-background_dark');
	}, function()
	{
		$('.header-wrapper').removeClass('header-background_dark');
	})
});