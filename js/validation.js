var phoneMask = new IMask(
  document.getElementById('phone'), {
  mask: '+{38} (000) 000-00-00'
});
var dateMask = new IMask(
  document.getElementById('date'), {
    mask: Date,
    min: new Date(2018, 0, 1),
    max: new Date(2018, 12, 31),
});
$.validator.addMethod("valueNotEquals", function(value, element, arg){
  return arg !== value;
 }, "Value must not equal arg.");

$(function(){
$("#reservation-form").validate({
    rules:{
        name:{
            required: true,
        },
        phone:{
            required: true,
        },
        email:{
        	required: true,
            email: true,
        },
        date:{
            required: true,
        },
        table_number: { 
            valueNotEquals: "default", 
        },
        reservation_time: {
            valueNotEquals: "default", 
        }
    },
    messages:{
        name:{
            required: "Это поле обязательно для заполнения",
        },
        phone:{
            required: "Это поле обязательно для заполнения",
        },
        email:{
            email: "Необходим формат адреса email",
            required: "Это поле обязательно для заполнения",
        },
        date:{
            required: "Это поле обязательно для заполнения",
        },
        table_number: {
            valueNotEquals: "Выберите время бронирования", 
        },
        reservation_time: {
            valueNotEquals: "Выберите номер столика", 
        }
    },
})
})