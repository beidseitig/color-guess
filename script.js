const rgbColor = document.querySelector('#rgb-color');
const ball = document.getElementsByClassName('ball');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game')


// const ball1 = document.querySelector('#ball1');
// const ball2 = document.querySelector('#ball2');
// const ball3 = document.querySelector('#ball3');
// const ball4 = document.querySelector('#ball4');
// const ball5 = document.querySelector('#ball5');
// const ball6 = document.querySelector('#ball6');

// function backgroundColor () {
//     const r = (Math.round(Math.random() * 255)).toString();
//     const g = (Math.round(Math.random() * 255)).toString();
//     const b = (Math.round(Math.random() * 255)).toString();
//     return ('(' + r + ', ' + g + ', ' + b + ')');
// }

// ball1.style.backgroundColor = "rgb" + backgroundColor();
// ball2.style.backgroundColor = "rgb" + backgroundColor();
// ball3.style.backgroundColor = "rgb" + backgroundColor();
// ball4.style.backgroundColor = "rgb" + backgroundColor();
// ball5.style.backgroundColor = "rgb" + backgroundColor();
// ball6.style.backgroundColor = "rgb" + backgroundColor();


//Requisito 4
function backgroundColor () {
    //https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript
    let r = () => Math.random() * 256 >> 0;
    let randomColor = `rgb(${r()}, ${r()}, ${r()})`;
    return randomColor;
}

function ballColor () { 
    for (let i of ball) {
        i.style.backgroundColor = backgroundColor();
    }
}

ballColor();

//Requisito 2
function choosenColor () {
    let color = ball[Math.floor(Math.random() * ball.length)];
    rgbColor.innerText = color.style.backgroundColor;
}

choosenColor();

//Requisito 5
function answerCheck (event) {
    if (event.target.style.backgroundColor === rgbColor.innerText) {
        answer.innerText = "Acertou!";
        ballColor();
        choosenColor();
    } else {
        answer.innerText = "Errou! Tente novamente!";
    }
}

for (let i of ball) {
    i.addEventListener('click', answerCheck);
}

//Requisito 6

function resetGame() {
    answer.innerText = "Escolha uma cor"
    ballColor();
    choosenColor();
}

resetButton.addEventListener('click', resetGame);

//Referências
//Código de Matheus Gomes: https://github.com/tryber/sd-019-c-project-color-guess/pull/2/files