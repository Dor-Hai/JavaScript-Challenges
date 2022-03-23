const hourPin = document.querySelector('.hour');
const minutesPin = document.querySelector('.minutes');
const secondsPin = document.querySelector('.seconds');

const date = new Date;

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

function setDate() {
    const date = new Date;

    hourPin.style.transform = `rotate(${date.getHours() * 30}deg)`;
    minutesPin.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
    secondsPin.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
}

setInterval(setDate, 1000);


