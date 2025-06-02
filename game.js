let started=false;
let colseq=[];
let userseq=[];
let level=0;
let btns=["yellow","red","purple","green"];
let h=document.querySelector("h3");
let key=document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelup();
    }
});
function btnFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    },250);
 }
function levelup(){
    userseq=[];
    level++;
    h.innerText=`Level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomidx];
    colseq.push(randomcolor);
    let randombtn=document.querySelector(`.${randomcolor}`);
    btnFlash(randombtn);
}
function reset(){
    
    started=false;
    colseq=[];
    userseq=[];
    level=0;
}
function checkans(idx){
   
    if(userseq[idx]==colseq[idx]){
       if(userseq.length==colseq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        
        h.innerHTML=`Game over! Your score was<br><b> <h1>${level}<h1><b> <br>press any key to start the Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
           },150);
        reset();
    }
}
function buttonpress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonpress);
}