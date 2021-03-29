const hourhand = document.getElementById("hourhand");
const minhand = document.getElementById("minhand");
const sechand = document.getElementById("sechand");

setInterval(function(){
    const d = new Date;
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const hdeg = 30*hour + 0.5*min;
    const mdeg = 6*min;
    const sdeg = 6*sec;

    hourhand.style.transform = `rotate(${hdeg}deg)`;
    minhand.style.transform = `rotate(${mdeg}deg)`;
    sechand.style.transform = `rotate(${sdeg}deg)`;

}, 1000);


