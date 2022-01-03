const rgbColor = document.querySelector('#rgb-color');
const ball = document.getElementsByClassName('ball');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const score = document.querySelector('#score');

let points = 0;
let pontuacion = score.innerText = "Score: " + points;


function backgroundColor () {
    const r = (Math.round(Math.random() * 255)).toString();
    const g = (Math.round(Math.random() * 255)).toString();
    const b = (Math.round(Math.random() * 255)).toString();
    return ('(' + r + ', ' + g + ', ' + b + ')');
}

//Requisito 4
// function backgroundColor () {
//     //https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript
//     let r = () => Math.random() * 256 >> 0;
//     let randomColor = `rgb(${r()}, ${r()}, ${r()})`;
//     return randomColor;
// }

function ballColor () { 
    for (let i of ball) {
        i.style.backgroundColor = "rgb" + backgroundColor();
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
        points += 3;
        let pontuacion = score.innerText = "Score: " + points;
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
    // points = 0;
    // let pontuacion = score.innerText = "Score: " + points;
}

resetButton.addEventListener('click', resetGame);


//Referências
//Código de Matheus Gomes: https://github.com/tryber/sd-019-c-project-color-guess/pull/2/files