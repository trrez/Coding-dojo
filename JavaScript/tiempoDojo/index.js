const cookie = document.getElementById('cookie');
const btn = document.getElementById('button');
const city = document.getElementById('show-city');
const temp = document.getElementById('temp');
const temp1 = document.getElementById('temp1');
const temp2 = document.getElementById('temp2');
const temp3 = document.getElementById('temp3');
const tempLow = document.getElementById('temp-low');
const tempLow1 = document.getElementById('temp-low1');
const tempLow2 = document.getElementById('temp-low2');
const tempLow3 = document.getElementById('temp-low3');

btn.addEventListener('click', hideCookie)

function hideCookie(){
    cookie.remove()
}

city.addEventListener('click', showCity)

function showCity(){
    alert("Loading weather report...")
}

function changeTemp(){
    temp.innerText = '75°';
    temp1.innerText = '80°'
    temp2.innerText = '69°'
    temp3.innerText = '78°'
    tempLow.innerText = '65°';
    tempLow1.innerText = '66°';
    tempLow2.innerText = '61°';
    tempLow3.innerText = '70°';
}