var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    $('.next-btn').click(function() {
        nextSlide();
    });

    $('.prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
            slideNow = navBtnId + 1;
        }
    });
});

function nextSlide() {
    if ($(window).width() > '900'){
        slideCount = $('#slidewrapper').children().length/2;
    }
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else if ($(window).width() <= '900'){
        translateWidth = -$('#viewport').width() * (slideNow);
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow++;
            }
            else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth*1.2  + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth*1.2  + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth*1.2  + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if ($(window).width() > '900'){
        slideCount = $('#slidewrapper').children().length/2;
    }
    if ((slideNow == 1 || slideNow <= 0 || slideNow > slideCount) && ($(window).width() > '900')) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth*1.2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth*1.2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth*1.2 + 'px, 0)',
        });
        slideNow = slideCount;
    } else if ((slideNow == 1 || slideNow <= 0 || slideNow > slideCount) && $(window).width() <= '900'){
        translateWidth = -$('#viewport').width() * (slideCount - 1);
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow = slideCount;
            }
            else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}