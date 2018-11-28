$(document).ready(function() {
	for (var i = 0; i < localStorage.length; i++) {
		$(".select_reserved").append("<option>" + localStorage.getItem(localStorage.key(i)) + "</option>");
	}
	$(".reservation_btn").click(function() {
		if ($("#reservation-form").valid()) {
			
			var currentDate = new Date();
			var time = currentDate.getTime();
			var setTable = $("#table_number option:selected").text();
			var setTime = $(".select-time option:selected").text();
			var setDate = $("#date").val();
			localStorage.setItem('keyDate' + time, "№" + setTable + ", " + setTime + " " + setDate); 
			var localValue = localStorage.getItem('keyDate' + time);
			$(".select_reserved").append("<option>" + localValue + "</option>");
			alert("Столик забронирован!");
			for (var i = 0; i < localStorage.length; i++) {
				for (var j = i+1; j < localStorage.length; j++) {
					if (localStorage.getItem(localStorage.key(i)) == localStorage.getItem(localStorage.key(j))) {
						localStorage.removeItem(localStorage.key(j));	
						$(".select_reserved option:last").remove();	
						alert("Столик №" + +$("#table_number option:selected").text() + " на " + $("#reservation_time option:selected").text() + " уже был забронирован");
					}										
				}
			}
		}
	})
})