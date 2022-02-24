const btnStart = document.getElementById('btn');
const btnReset = document.getElementById('reset');
const bar = document.getElementById('bar');
const elemPercentage = document.getElementById('percentage');

let barWidth = 1;
  
function loadingBar(){
    if(barWidth < 90){

        barWidth+=9;
        bar.style.width= width+'%';

        let percentage = Math.round((barWidth*100)/100);
        elemPercentage.textContent = percentage + 9 + '%';

        if(barWidth == 90){
            btnStart.style.display = 'none'
            btnReset.style.display = 'block'
            return;
        }  
    }
}

function moveBar(){
    setInterval(loadingBar, 100);
}

btnStart.addEventListener('click', moveBar);