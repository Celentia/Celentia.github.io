var slideNow=1,slideCount=$("#slidewrapper").children().length,slideInterval=3e3,navBtnId=0,translateWidth=0;function nextSlide(){$(window).width()>"900"&&(slideCount=$("#slidewrapper").children().length/2),slideNow==slideCount||slideNow<=0||slideNow>slideCount?($("#slidewrapper").css("transform","translate(0, 0)"),slideNow=1):$(window).width()<="900"?(translateWidth=-$("#viewport").width()*slideNow,$("#slidewrapper").css({transform:"translate("+translateWidth+"px, 0)","-webkit-transform":"translate("+translateWidth+"px, 0)","-ms-transform":"translate("+translateWidth+"px, 0)"}),slideNow++):(translateWidth=-$("#viewport").width()*slideNow,$("#slidewrapper").css({transform:"translate("+1.2*translateWidth+"px, 0)","-webkit-transform":"translate("+1.2*translateWidth+"px, 0)","-ms-transform":"translate("+1.2*translateWidth+"px, 0)"}),slideNow++)}function prevSlide(){$(window).width()>"900"&&(slideCount=$("#slidewrapper").children().length/2),(1==slideNow||slideNow<=0||slideNow>slideCount)&&$(window).width()>"900"?(translateWidth=-$("#viewport").width()*(slideCount-1),$("#slidewrapper").css({transform:"translate("+1.2*translateWidth+"px, 0)","-webkit-transform":"translate("+1.2*translateWidth+"px, 0)","-ms-transform":"translate("+1.2*translateWidth+"px, 0)"}),slideNow=slideCount):(1==slideNow||slideNow<=0||slideNow>slideCount)&&$(window).width()<="900"?(translateWidth=-$("#viewport").width()*(slideCount-1),$("#slidewrapper").css({transform:"translate("+translateWidth+"px, 0)","-webkit-transform":"translate("+translateWidth+"px, 0)","-ms-transform":"translate("+translateWidth+"px, 0)"}),slideNow=slideCount):(translateWidth=-$("#viewport").width()*(slideNow-2),$("#slidewrapper").css({transform:"translate("+translateWidth+"px, 0)","-webkit-transform":"translate("+translateWidth+"px, 0)","-ms-transform":"translate("+translateWidth+"px, 0)"}),slideNow--)}$(document).ready(function(){$(".next-btn").click(function(){nextSlide()}),$(".prev-btn").click(function(){prevSlide()}),$(".slide-nav-btn").click(function(){(navBtnId=$(this).index())+1!=slideNow&&(translateWidth=-$("#viewport").width()*navBtnId,$("#slidewrapper").css({transform:"translate("+translateWidth+"px, 0)","-webkit-transform":"translate("+translateWidth+"px, 0)","-ms-transform":"translate("+translateWidth+"px, 0)"}),slideNow=navBtnId+1)})});