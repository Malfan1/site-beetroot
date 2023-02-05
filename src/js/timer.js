const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const sec = document.getElementById("sec");

const days2 = document.getElementById("days2");
const hours2 = document.getElementById("hours2");
const mins2 = document.getElementById("mins2");
const sec2 = document.getElementById("sec2");

const days3 = document.getElementById("days3");
const hours3 = document.getElementById("hours3");
const mins3 = document.getElementById("mins3");
const sec3 = document.getElementById("sec3");

const days4 = document.getElementById("days4");
const hours4 = document.getElementById("hours4");
const mins4 = document.getElementById("mins4");
const sec4 = document.getElementById("sec4");

const days5 = document.getElementById("days5");
const hours5 = document.getElementById("hours5");
const mins5 = document.getElementById("mins5");
const sec5 = document.getElementById("sec5");

const currectYear = new Date().getFullYear();
const newYear = new Date(`20 Feb${currectYear} 00:00:00`);


function countDownTimer(){
    const todayDate = Date.now();
    const gap = newYear - todayDate;

    const d = Math.floor(gap / 1000 / 60 / 60 / 24); 
    const h = Math.floor((gap / 1000 / 60 / 60 / 24) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60 );
    const s = Math.floor((gap / 1000) % 60 );

    days.innerHTML =  d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h; 
    mins.innerHTML =  m < 10 ? "0" + m : m;
    sec.innerHTML =  s < 10 ? "0" + s : s;
} setInterval(countDownTimer, 100);

function countDownTimer2(){
    const todayDate = Date.now();
    const gap = newYear - todayDate;

    const d = Math.floor(gap / 1000 / 60 / 60 / 24); 
    const h = Math.floor((gap / 1000 / 60 / 60 / 24) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60 );
    const s = Math.floor((gap / 1000) % 60 );

    days2.innerHTML =  d < 10 ? "0" + d : d;
    hours2.innerHTML = h < 10 ? "0" + h : h; 
    mins2.innerHTML =  m < 10 ? "0" + m : m;
    sec2.innerHTML =  s < 10 ? "0" + s : s;
} setInterval(countDownTimer2, 100);

function countDownTimer3(){
    const todayDate = Date.now();
    const gap = newYear - todayDate;

    const d = Math.floor(gap / 1000 / 60 / 60 / 24); 
    const h = Math.floor((gap / 1000 / 60 / 60 / 24) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60 );
    const s = Math.floor((gap / 1000) % 60 );

    days3.innerHTML =  d < 10 ? "0" + d : d;
    hours3.innerHTML = h < 10 ? "0" + h : h; 
    mins3.innerHTML =  m < 10 ? "0" + m : m;
    sec3.innerHTML =  s < 10 ? "0" + s : s;
} setInterval(countDownTimer3, 100);

function countDownTimer4(){
    const todayDate = Date.now();
    const gap = newYear - todayDate;

    const d = Math.floor(gap / 1000 / 60 / 60 / 24); 
    const h = Math.floor((gap / 1000 / 60 / 60 / 24) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60 );
    const s = Math.floor((gap / 1000) % 60 );

    days4.innerHTML =  d < 10 ? "0" + d : d;
    hours4.innerHTML = h < 10 ? "0" + h : h; 
    mins4.innerHTML =  m < 10 ? "0" + m : m;
    sec4.innerHTML =  s < 10 ? "0" + s : s;
} setInterval(countDownTimer4, 100);

function countDownTimer5(){
    const todayDate = Date.now();
    const gap = newYear - todayDate;

    const d = Math.floor(gap / 1000 / 60 / 60 / 24); 
    const h = Math.floor((gap / 1000 / 60 / 60 / 24) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60 );
    const s = Math.floor((gap / 1000) % 60 );

    days5.innerHTML =  d < 10 ? "0" + d : d;
    hours5.innerHTML = h < 10 ? "0" + h : h; 
    mins5.innerHTML =  m < 10 ? "0" + m : m;
    sec5.innerHTML =  s < 10 ? "0" + s : s;
} setInterval(countDownTimer5, 100);