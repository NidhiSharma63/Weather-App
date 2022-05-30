const temperatureValue = document.querySelector('.temperature-value');
const humidityValue = document.querySelector('.humidity-value');
const windValue = document.querySelector('.wind-value');
const searchBtn = document.querySelector('.search-icon');

const api_key = {
	'apiKey':'5ae69beae2bd9f4df5e460c7e94fca3f',
};
const fetchData = async () =>{
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=muradnagar&appid=${api_key.apiKey}`);
	const data = await response.json();
	console.log(data);
	return data;
};
const displayData = async () =>{
	const data = await fetchData();
	const {temp, humidity} = data.main;
	const {speed} = data.wind;
	const {description} = data.weather[0];
	temperatureValue.innerHTML = `${(temp - 273.15).toFixed(1)}&deg;C`;
	humidityValue.innerHTML = `${humidity}%`;
	windValue.innerHTML = `${speed}m/s`;
}
displayData();
searchBtn.addEventListener('click',()=>{
	// displayData();
})