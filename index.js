let randomNumber1= Math.floor(Math.random()*6)+1;
let randomImg1= "dice"+randomNumber1+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImg1);

//Same for Image 2
let randomNumber2= Math.floor(Math.random()*6)+1;
let randomImg2= "dice"+randomNumber2+".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}