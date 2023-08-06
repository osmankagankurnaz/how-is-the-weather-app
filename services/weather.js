const OPEN_WEATHER_API_KEY = process.env.API_KEY;
const BASE_URL = 'https://pro.openweathermap.org/data/2.5/';

async function getDailyWeather() {
    const res = await fetch(`${BASE_URL}weather?q=Paris&appid=${OPEN_WEATHER_API_KEY}`);
    const data = await res.json();
    return data;
}

async function getForecastWeather() {
    const res = await fetch(`${BASE_URL}forecast?q=Paris&appid=${OPEN_WEATHER_API_KEY}`);
    const data = await res.json();
    return data;
}

export {
    getDailyWeather,
    getForecastWeather
}