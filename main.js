const btn = document.getElementById('btn');
const bar = document.getElementById('bar');
let width = 10;

function clickingButton(){

    bar.classList.toggle('active');

}

function loadingBar(){
    setInterval(loadingBar, 15);
    if(width<=27){
    width++;
    bar.style.width= width+'%';
    let percent = (width*100)/28;
    bar.innerHTML = percent + '%';
    }
}

btn.addEventListener('click', loadingBar);