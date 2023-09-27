let second = document.querySelector('#second');
let minute = document.querySelector('#minute');
let heur = document.querySelector('#heur');



setInterval(() =>{
    let day = new Date();
let hr = day.getHours() * 30;
let mn = day.getMinutes() * 6;
let sd = day.getSeconds() * 6;

second.style.transform = `rotateZ(${hr +(mn/12)}deg)`;
minute.style.transform = `rotateZ(${mn}deg)`;
heur.style.transform = `rotateZ(${sd}deg)`;
})