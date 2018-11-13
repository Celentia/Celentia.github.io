
var Imtech = {};
Imtech.Pager = function() {

    //this.paragraphsPerPage = 9;
    //this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls';
    this.pagingContainerPath = '.content';
    // число страниц
    this.numPages = function() {
        var numPages = 0;
        //          ('div.z')                               5
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
        // метод ceil - возвращает наименьшее целое
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }

        return numPages;
    };
   
// page - текущая (открытая - номер) страница, то есть в ф-ю передаем номер текущий страницы, контент котор впоследствии выводим
    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';
// slice - Данный метод не изменяет исходный массив, а просто возвращает его часть.
// то есть выводит тот контент, котор соответствует текущей странице
        this.paragraphs.slice((page-1) * this.paragraphsPerPage,
            ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
                if ($(window).width() > '550') {
                    html += '<div class="img-wrapper" onclick="FunctionName(this)">' + $(this).html() + '</div>';
                }
                else html += '<div class="img-wrapper">' + $(this).html() + '</div>';
            
        });
// вставляем контент
        $(this.pagingContainerPath).html(html);
//                          #pagingControls,  текущая страница(по умолч. 1), общее число страниц     
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
 
// блок с навигацией
    var renderControls = function(container, currentPage, numPages) {
// разметка с навигацией
        var pagingControls = 'Страница: <ul>';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls += '<li><a href="#" onclick="pager.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls += '<li>' + i + '</li>';
            }
        }

        pagingControls += '</ul>';

        $(container).html(pagingControls);
    }
}
var pager = new Imtech.Pager();
$(document).ready(function() {
    // кол-во выводимых параграфов () или div )
    // на одной странице
    //function windowSize(){
    if ($(window).width() >= '1500'){
        pager.paragraphsPerPage = 8; 
    } 
    else if ($(window).width() >= '1200'){
        pager.paragraphsPerPage = 9; 
    }
    else if ($(window).width() > '550'){
        pager.paragraphsPerPage = 6; 
    }
    else {
        pager.paragraphsPerPage = 4; 
    }
//}
    //pager.paragraphsPerPage = 9; 
    // основной контейнер
    pager.pagingContainer = $('.content'); 
    // обозначаем требуемый блок ('div.z')
    pager.paragraphs = $('.img-wrapper', pager.pagingContainer); 
    pager.showPage(1);
});
