var randomnumber1=Math.floor(6*Math.random())+1;
var randomimagesource="images/"+"dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);
var randomnumber2=Math.floor(6*Math.random())+1;
var randomimagesource="images/"+"dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource);
if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if (randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
