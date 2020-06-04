window.onload = getMyLocation; //Вызываем функцию, которую создадим чуть ниже, она срабатывает сразу же после загрузки нашего сайта.
 
function getMyLocation () { //собственно наша функция для определения местоположения
	if (navigator.geolocation) { //для начала надо проверить, доступна ли геолокация, а то еще у некоторых браузеры то древние. Там о таком и не слышали.
		navigator.geolocation.getCurrentPosition(displayLocation); //если все ок, то вызываем метод getCurrentPosition и передаем ей нашу функцию displayLocation, реализую ее ниже.
	}
	else {
		alert("Упс, геолокация не поддерживается"); //выведем сообщение для старых браузеров.
	}
}
 
function  displayLocation(position) { //передаем в нашу функцию объект position - этот объект содержит ширину и долготу и еще массу всяких вещей.
	var	latitude = position.coords.latitude; // излвекаем широту
	var	longitude = position.coords.longitude; // извлекаем долготу
	//Теперь пришло время все это записать в наш  DOM
	var div = document.getElementById("location");//получаем доступ к нашему элементу location в DOM
	div.innerHTML = "Ваша широта: 89 " + latitude + 89", Ваша долгота: " + 89 longitude; //Вставляем нужнные данные в DOM.
}