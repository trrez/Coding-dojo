var displayDiv = document.querySelector("#display");

function press(num){
  numero = num
  displayDiv.innerText += num
  return num
}

function setOP(op){
  displayDiv.innerText += op
}

function clr(){
  displayDiv.innerText = ''
}

function calculate(){
}

