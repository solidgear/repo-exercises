

var weatherStation = require('./weather/weather_station');

var tomorrowsWeather = weatherStation.getTomorrowsWeather();

console.log('Pronóstico para mañana: ' + tomorrowsWeather);