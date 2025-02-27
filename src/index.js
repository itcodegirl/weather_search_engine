function showWeather(response) {
	let temperatureElement = document.querySelector("#current-temperature-value");
	let temperature = Math.round(response.data.temperature.current);
	let cityElement = document.querySelector("#current-city");
	cityElement.innerHTML = response.data.city;
	temperatureElement.innerHTML = temperature;
}
function search(event) {
	event.preventDefault();
	let searchInputElement = document.querySelector("#search-input");

	let city = searchInputElement.value;
	let apiKey = "98f12063t8f0b4be43fb6oa12441998c";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
	axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

function formatDate(date) {
	let minutes = date.getMinutes();
	let hours = date.getHours();
	let day = date.getDay();

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (hours < 10) {
		hours = `0${hours}`;
	}

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let formattedDay = days[day];
	return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);