let timer= 60;
let score= 0;
//fn to render Bubble
function renderBubble() {
    let bubbles = "";
    for (let i = 1; i <= 102; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${randomNumber}</div>`
    };
    document.querySelector("#pbtm").innerHTML = bubbles;
};
// fn to run timer
function runTimer(){
    
        let timerId= setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector(".timer").innerHTML= timer;
            }
            else{
                clearInterval(timerId);
                document.querySelector("#pbtm").innerHTML=" Game Over ";
                document.querySelector("#pbtm").classList.add('pbttm')
            }
        },1000);
    
    
};
//fn to get the hit value
function getHit(){
   let rn=  Math.floor(Math.random()*10);
   document.querySelector(".hit").textContent= rn
   
};
//fn to increaseScore
function increaseScore(){
    score+=10;
    document.querySelector('.score').textContent= score;
};
//e-listener for bubble clicks
document.querySelector("#pbtm").addEventListener('click',function(e){
    if(parseInt(e.target.textContent) == document.querySelector('.hit').textContent){
        console.log(e.target);
        increaseScore();
        getHit();
        renderBubble()
    }
});
renderBubble()
runTimer()
getHit()