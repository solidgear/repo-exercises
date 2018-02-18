
var POSSIBLE_WEATHERS = [
    'Sol',
    'Nubes y claros',
    'Niebla',
    'Tormenta',
    'Ola de calor',
    'Ciclogénesis explosiva'
];

function getRandomElement(items) {
    return items[Math.floor(Math.random()*items.length)];
}

exports.getTomorrowsWeather = function() {
    return getRandomElement(POSSIBLE_WEATHERS);
}