var randomNumber1=Math.floor(Math.random()*6)+1;


var ranndomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="C:/Users/archa/OneDrive/Documents/Dicee Challenge - Starting Files/images/"+ranndomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="player1"
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="player2"
}
else{
    document.querySelector("h1").innerHTML="draw"
}