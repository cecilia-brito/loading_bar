const btn = document.getElementById('btn');
const bar = document.getElementById('bar');
const elemPercentage = document.getElementById('percentage');

let width = 10;

function moveBar(){
    setInterval(loadingBar, 100);
    resetBtn();
    function loadingBar(){
        if(width<=27){
        width++;
        bar.style.width= width+'%';
        let percentage = Math.round((width*100)/28);
        elemPercentage.textContent = percentage + '%';
        }
    }
}    

btn.addEventListener('click', moveBar);
