$('a[href*="#"]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
});
$(function() {
	$(window).scroll(function() {
		var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
		if(($(this).scrollTop() != 0) && (scrollBottom != 0)) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});
$('.navbar-toggle').click(function(){
	if($('#navbar-main').hasClass('in')) {
	 	$('.menu').css ({
        	marginBottom: '0'
    	})
	}
	else {
		$('.menu').css ({
	        marginBottom: '80px',
	        height: '10'
	    })
	}
})