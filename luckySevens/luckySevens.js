function runGame(){
var startingBet=parseInt(document.getElementById("bet").value);
var rollCount=0;
var rollArray=[startingBet];
var gameMoney=startingBet;

if(startingBet>500)
  alert("This may take a few minutes")
if(startingBet<=0){
  alert("You need to bet more money");
}

while(gameMoney>0){
  rollCount++
  var die1= Math.floor(Math.random()*6+1);
  var die2= Math.floor(Math.random()*6+1);
  var sum=die1+die2;
  if(sum===7){
    gameMoney+=4;

  }else{
    gameMoney-=1;

  }
  rollArray.push(gameMoney);

  console.log(gameMoney);
  console.log(rollArray);

}

console.log(rollCount);
//Results table
var maxWon= Math.max(...rollArray);
var whenMaxWon=rollArray.indexOf(maxWon);

document.getElementById("reveal").style.display="block";
document.getElementById("startBet").innerText = "$" + startingBet + ".00";
document.getElementById("rollsBeforeBroke").innerText = rollCount;
document.getElementById("highestAmountWon").innerText = "$" + maxWon + ".00";
document.getElementById("rollCountAtHighest").innerText = whenMaxWon;
return false;
}
