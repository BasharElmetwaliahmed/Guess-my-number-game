//select elements
let guessValue=document.getElementById("inputValue");
let guessButton=document.querySelector(".check");
let trueValue=document.querySelector(".trueValue")
let stateText=document.querySelector(".state")
let score=document.querySelector(".score")
let againbutton=document.querySelector(".again")
let highscoreText=document.querySelector(".highScore");
let currentScore=20;
let highscore=0;
let guessVal=Math.floor(Math.random()*20)+1;

guessButton.addEventListener("click",function(){

 if(currentScore>0){
    if(guessValue.value){
                document.querySelector(".message").innerHTML=""

  if(guessValue.value>guessVal){
  stateText.innerHTML="Too High";
  currentScore--;
  score.innerHTML=currentScore;
  if(currentScore==0){
        document.body.style.backgroundColor="red";
    stateText.innerHTML="Failed"
  }
  

}
 
  
  else if(guessValue.value<guessVal){
   stateText.innerHTML="Too Low";
     currentScore--;

   score.innerHTML=currentScore;
    if(currentScore==0){
        document.body.style.backgroundColor="red";
    stateText.innerHTML="Failed"
  }
}
  
  else{
    stateText.innerHTML="Success Guess"
    document.body.style.backgroundColor="chartreuse";
    if(currentScore>highscore){
        highscore=currentScore;
        highscoreText.innerHTML=highscore
        trueValue.innerHTML=guessVal;

    }
  }
 
}
    else{
        document.querySelector(".message").innerHTML="Empty!"
    }

}}


)
againbutton.addEventListener("click",function(){
    document.body.style.backgroundColor="black";
    stateText.innerHTML="start guessing";
    currentScore=20;
    score.innerHTML=currentScore;
    guessValue.value="";
     guessVal=Math.floor(Math.random()*20)+1
     trueValue.innerHTML="?";


})