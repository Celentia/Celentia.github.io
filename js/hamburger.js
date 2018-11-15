$('.menu_icon').click (function(){
  	$(this).toggleClass('open');
  	$('.logo').toggleClass('open');
  	$('.header__nav').toggleClass("open_menu");
});
$('.header__nav-item').click (function(){
	$('.header__nav').toggleClass("open_menu");
	$('.logo').toggleClass('open');
})