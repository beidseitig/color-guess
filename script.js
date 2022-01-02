const rgbColor = document.querySelector('#rgb-color');



function backgroundColor () {
    const r = (Math.round(Math.random() * 255)).toString();
    const g = (Math.round(Math.random() * 255)).toString();
    const b = (Math.round(Math.random() * 255)).toString();
    return ('(' + r + ', ' + g + ', ' + b + ')');
}

rgbColor.innerHTML = backgroundColor();