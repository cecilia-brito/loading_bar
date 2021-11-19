const btnStart = document.getElementById('btn');
const btnReset = document.getElementById('reset');
const bar = document.getElementById('bar');
const elemPercentage = document.getElementById('percentage');

let width = 10;

function moveBar(){
    setInterval(loadingBar, 100);
    function loadingBar(){
        if(width<=27){
        width++;
        bar.style.width= width+'%';
        let percentage = Math.round((width*100)/28);
        elemPercentage.textContent = percentage + '%';
        }
    }

    if(width>=26){
        btnStart.classList.toggle('active');
        btnReset.classList.toggle('active');
   }
}    

btnStart.addEventListener('click', moveBar);