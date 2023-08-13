const dice1 = Math.ceil(Math.random() * 6 + 1);
const dice2 = Math.floor(Math.random() * 6 + 1);

console.log(dice1)

if(dice1+dice2 > 6 ){
    console.log("the turn was good");
}else{
    console.log("the turn was bad");
 
    
}




