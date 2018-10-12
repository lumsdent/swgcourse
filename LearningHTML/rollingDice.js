/*function rollDice(){
return(Math.floor((Math.random()*6)+1));
}
for (var i=0; i<100; i++){
  console.log(rollDice());
}
var result=0;
function addTwoNumbers(firstNumber, secondNumber){
  result=firstNumber+secondNumber;
}
addTwoNumbers(177,6);
console.log(result);
*/

var numSet= new Array();

for (var i=0; i<10; i++){
  numSet[i]=Math.floor((Math.random()*6)+1);

}

console.log(numSet);
console.log(Math.max(...numSet));
<!DOCTYPE html>
