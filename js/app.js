$(document).ready(function () {
    new WOW().init();

})

$(function () {
	$('.toggle-menu').on('click', function () {
		$('.ba-nav').toggleClass('open');
		$('.toggle-menu').toggleClass('toggle-menu-open');
		$('.toggle-menu__btn').toggleClass('toggle-menu-open__btn');
		$('.toggle-menu__lines').toggleClass('toggle-menu-open__lines');
	});
});
