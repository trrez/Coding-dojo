const cookie = document.getElementById('cookie');
const btn = document.getElementById('button');


btn.addEventListener('click', hideCookie)

function hideCookie(){
    cookie.remove()
}

function showCity(){
    alert("Loading weather report...")
}

function changeTemp(element){
    let tempetures = document.querySelectorAll('.high, .low')
    for(let i = 0; i < tempetures.length; i++){
        let currentTemp = Number(tempetures[i].textContent)

        if(element.value === "celcius"){
            let celciusResult = (currentTemp - 32) / 1.8
            tempetures[i].textContent = parseInt(celciusResult) 
        }else{
            let farenheitResult = (9/5) * currentTemp + 32
            tempetures[i].textContent = parseInt(farenheitResult) 
        }
    }
}