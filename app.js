 let gameSeq= [];
let userSeq= [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function() {
    if(started===false){    
        console.log("Game Started");
        started=true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 600);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 400);
}

function levelup(){
    userSeq = [];   
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIndx = Math.floor(Math.random() * 4);  
    let randcolor = btns[randIndx];
    let randBtn = document.querySelector(`.${randcolor}`);  
    
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randBtn);  
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length === gameSeq.length){
        setTimeout(levelup, 1000);
       } 
          
    } else {
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        }, 200);
        reset();
    }
}

function btnPress(){  
    let btn = this; 
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {

    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
     gameSeq=[];
     userseq=[];
     level=0; 
}   