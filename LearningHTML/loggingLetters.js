var n=27;
var result=3;

if (n % 2 == 0){
  result+=10;
}
else {
    result-=n;
  }
console.log(n, result);


var k=25;
var sum=0;

for (k; k>0; k--){
  console.log(sum+=k);
}

var likesCake = confirm("Do you like cake?");
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
      alert("Your favorite cake is: " + favoriteCake);
} else {
    alert("The cake is a lie anyhow.");
}
