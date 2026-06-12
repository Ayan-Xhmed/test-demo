// genrate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const starChangingColor = function (){
  if(!intervalId){
    intervalId = setInterval(changeBgColor,1000)
  }

  let count=0;
  function changeBgColor(){
    let color = document.querySelector("body").
    style.background = randomColor()
    console.log(color,count)
    count++;
  }
}
function stopChangingColor(){
  console.log('stoped')
  clearInterval(intervalId)
  intervalId = null
}

document.querySelector("#start").
addEventListener('click',starChangingColor)
document.querySelector("#stop").
addEventListener('click',stopChangingColor)
