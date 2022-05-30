const temperatureValue = document.querySelector('.temperature-value');
const humidityValue = document.querySelector('.humidity-value');
const windValue = document.querySelector('.wind-value');
const searchCity = document.querySelector('.searchCity');
const searchBtn = document.querySelector('.search-icon');
const input = document.getElementById('input');
const DayAndDate = document.querySelector('.col2');
const time = document.querySelector('.time');

// api key
const api_key = {
	'apiKey':'5ae69beae2bd9f4df5e460c7e94fca3f',
};
// fetching data
const fetchData = async (inputValue) =>{
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_key.apiKey}`);
	const data = await response.json();
	console.log(data);
	return data;
};
// displayingData
const displayData = async (inputValue) =>{
	const data = await fetchData(inputValue);
	const {temp, humidity} = data.main;
	const {speed} = data.wind;
	const {description} = data.weather[0];
	temperatureValue.innerHTML = `${(temp - 273.15).toFixed(1)}&deg;C`;
	humidityValue.innerHTML = `${humidity}%`;
	windValue.innerHTML = `${speed}m/s`;
	searchCity.innerHTML=`${data.name}`
};
// runing function on click
searchBtn.addEventListener('click',()=>{
	let inputValue = input.value;
	displayData(inputValue);
	input.value='';
});
// displaying current Date and Current Day
const gettingCurrentDateAndTime = () =>{
	let date = new Date();
	let day = '';
	let m = '';
	switch(new Date().getDay()){
	case 0:
		day = "Sunday";
		month= "Jan";
		break;
	case 1:
		day = "Monday";
		month= "Feb";
		break;
	case 2:
		day = "Tuesday";
		month= "Mar";
		break;
	case 3:
		day = "Wednesday";
		month= "Apr";
		break;
	case 4:
		day = "Thursday";
		month= "May";
		break;
	case 5:
		day = "Friday";
		month= "Jun";
		break;
	case 6:
		day = "Saturday";
		month= "Jul";
	};
	switch (date.getUTCMonth()+1) {  
		case 1: m = 'Jan'; break;
		case 2: m = 'Feb'; break;
		case 3: m = 'Mar'; break;
		case 4: m = 'Apr'; break;
		case 5: m = 'May'; break;
		case 6: m = 'Jun'; break;
		case 7: m = 'Jul'; break;
		case 8: m = 'Aug'; break;
		case 9: m = 'Sep'; break;
		case 10: m = 'Oct'; break;
		case 11: m = 'Nov'; break;
		case 12: m = 'Dec'; break;
		default: break;
	}
	
	DayAndDate.innerHTML=
	`
		<div class="day">
			${day}
		</div>
		<div class="date">
			${date.getDate()}-${m}-${date.getFullYear()}
		</div>
	`;

	time.innerHTML=`${date.getUTCHours()}:${date.getMinutes()}`;
	requestAnimationFrame(gettingCurrentDateAndTime);
}
gettingCurrentDateAndTime();