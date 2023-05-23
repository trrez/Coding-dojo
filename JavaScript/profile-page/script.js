const name = document.getElementById('change-name')
const close = document.querySelector('.card-list-item')
const close2 = document.querySelector('.card-list-item2')
const numConnect = document.querySelector('.badge2')
const numReq = document.querySelector('.badge1')
const more = document.querySelector('#more')
const card = document.querySelector('.card-list')


function changeName(){
    name.innerHTML = 'Tatiana Gutierrez'
}

function removePerson(){
    let req = numReq.textContent
    let num = numConnect.textContent
    close.remove()
    num--
    req--
    numReq.innerHTML = req
    numConnect.innerHTML = num
}

function removePerson2(){
    let req = numReq.textContent
    let num = numConnect.textContent
    console.log(num)
    close2.remove()
    num--
    req--
    numReq.innerHTML = req
    numConnect.innerHTML = num
}

