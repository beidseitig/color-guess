const rgbColor = document.querySelector('#rgb-color');
const colors = document.querySelector('#colors');
const ball1 = document.querySelector('#ball1');
const ball2 = document.querySelector('#ball2');
const ball3 = document.querySelector('#ball3');
const ball4 = document.querySelector('#ball4');
const ball5 = document.querySelector('#ball5');
const ball6 = document.querySelector('#ball6');



function backgroundColor () {
    const r = (Math.round(Math.random() * 255)).toString();
    const g = (Math.round(Math.random() * 255)).toString();
    const b = (Math.round(Math.random() * 255)).toString();
    return ('(' + r + ', ' + g + ', ' + b + ')');
}

rgbColor.innerHTML = backgroundColor();

ball1.style.backgroundColor = "rgb" + backgroundColor();
ball2.style.backgroundColor = "rgb" + backgroundColor();
ball3.style.backgroundColor = "rgb" + backgroundColor();
ball4.style.backgroundColor = "rgb" + backgroundColor();
ball5.style.backgroundColor = "rgb" + backgroundColor();
ball6.style.backgroundColor = "rgb" + backgroundColor();