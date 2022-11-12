const btnStart = document.getElementById('btn_start');
const btnReset = document.getElementById('reset');
const bar = document.getElementById('bar');
const elemPercentage = document.getElementById('percentage');

let barWidth = 0;
let percentage;

function loadingBar(){
    if(barWidth <= 60){
        console.log("funcão loading, estou funcionando")
        barWidth += 9;
        bar.style.width = barWidth +'%';

        percentage = Math.round((barWidth * 100)/100);
        elemPercentage.textContent = percentage + '%';
        console.log(barWidth)
    } else if(barWidth > 50 && barWidth < 90){
        console.log("funcão loading, estou funcionando")
        barWidth += 1;
        bar.style.width = barWidth +'%';

        percentage = Math.round((barWidth * 100)/100);
        elemPercentage.textContent = percentage + 10 + '%';
        console.log(barWidth)

    } else {
            btnReset.style.display = 'block'
            console.log("funcão loading, terminei")
            return;
    }
}

function moveBar(){
    for(let i = 0; i < 35; i++){
        setTimeout(loadingBar, 1000)
    }
}

function clearBar(){
    console.log("funcão clear, estou funcionando")
    barWidth = 0;
    for(let i = parseInt(elemPercentage.textContent); i >= 0; i--){
        elemPercentage.textContent = i + "%";
        bar.style.width = i + "%";
    }
    btnReset.style.display = 'none';
    console.log("funcção clear, terminei")
}

if(btnReset !== null && btnStart !== null){
    btnStart.addEventListener('click', moveBar);
    btnReset.addEventListener('click', clearBar);
}