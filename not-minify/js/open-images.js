
function FunctionName(elem){    // Событие клика на маленькое изображение
        var img = $(elem).find("img");  // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
                         "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
                         "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
                         "<span id='modal_close'>X</span>"+
                         "</div>"); 
                 
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup").toggleClass('open') ;   
        $(".popup_bg, #modal_close").click(function(){  // Событие клика на затемненный фон    
            $(".popup").fadeOut(800);   // Медленно убираем всплывающее окно
            setTimeout(function() { // Выставляем таймер
             $(".popup").toggleClass('open');
             $(".popup").remove();
            }, 800);
        });
    }