$(function ()
{
	$('.menu-toggle, .fa-times').on('click', function () {
		$('nav').toggleClass('active');
		$('.overlay').toggleClass('menu-open');
});

	S('overlay').on('click', function () {
		$('nav').removeClass('activate');
		$(this).removeClass('menu-open');
	});
});	
	