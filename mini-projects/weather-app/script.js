const API_KEY = '2dee37a6e0ce16dfe0e03f4c795cf48d';

const weatherData = document.getElementById('weather-content');
const city = document.getElementById('city');
const submitBtn = document.querySelector('.custom-btn');

const temperatureContent = document.querySelector('.temperature');
const descriptionContent = document.querySelector('.description');
const detailsContent = document.querySelector('.details');
const iconContent = document.querySelector('.icon');

submitBtn.addEventListener('click', () => {
  const cityValue = city.value;
  getWeatherData(cityValue);
});

const getWeatherData = async (cityValue) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&q=${cityValue}`
    );

    if (!response?.ok) {
      throw new Error('Something went wrong on response');
    }

    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    temperatureContent.innerText = `${temperature}°C`;
    descriptionContent.innerText = description;
    iconContent.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    detailsContent.innerHTML = details
      .map((detail) => `<div class="custom-details p-3 mb-2">${detail}</div>`)
      .join('');
  } catch (error) {
    temperatureContent.textContent = '';
    descriptionContent.textContent =
      'An error happened, please try again later';
    detailsContent.innerHTML = '';
  }
};
