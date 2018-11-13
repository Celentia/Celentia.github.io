$('.menu_icon').click (function(){
  	$(this).toggleClass('open');
  	$('.logo').toggle();
  	$('.header__nav').toggleClass("open_menu");
  	$('.header__content').toggleClass("close_menu");
});
