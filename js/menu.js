$(function() {
	//FIXED MENU
    if ($(window).width() > '1185'){
        var nav = $('.header__navbar'),
    	navTopPosition = nav.offset().top;
        $(window).scroll(function () {
            if ($(this).scrollTop() >= navTopPosition) {
                nav.addClass("header__nav_sticky");
                $('.header__content').css({
                    'height': '95vh'
                });
                $('.submenu-item').css({
                    'background': 'black'
                })
            } else {
                nav.removeClass("header__nav_sticky");
                $('.header__content').css({
                    'height': '80vh'
                });
                $('.submenu-item').css({
                    'background': 'transparent'
                })
            }
        });
        
    }
    $(".item-menu").hover(function(){
        $(".header__submenu").toggleClass("close");
    })
});