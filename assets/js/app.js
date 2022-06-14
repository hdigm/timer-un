
// Часов
let timeMinut = parseInt(1) * 60 * 60 * 24;

timer = setInterval(function () {
    seconds = timeMinut % 60 // Получаем секунды
    minutes = timeMinut / 60 % 60 // Получаем минуты
    hour = timeMinut / 60 / 60 % 60 // Получаем часы
    if (timeMinut <= 0) {
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else { // Иначе
        hour = Math.trunc(hour);
        minutes = Math.trunc(minutes);
        seconds = Math.trunc(seconds);
    
        const zeroLength = 2;
        // String(hour).padStart(zeroLength, '0');
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)
