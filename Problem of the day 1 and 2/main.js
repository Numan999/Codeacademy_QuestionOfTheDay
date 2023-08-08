//1 - Problem of the day 1
var num1 = prompt("Enter number 1");
var num2 = prompt("Enter number 2");
var num3 = prompt("Enter number 3");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

 
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}




//2 - Problem of the day 2


var arr = [2,1,6,8,3,9,3,4,6];
function Sum(n){
for(i=0;i<=8;i++){
    for(j=0;j<=8;j++){
    if(arr[i]+arr[j] == n){
        console.log(arr[i]+" and "+arr[j])
    }
}
}
}

Sum(4)