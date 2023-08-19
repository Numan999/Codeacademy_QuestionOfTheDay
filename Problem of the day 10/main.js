const rangeOfArray = (arr, n1, n2) => {
    const range = new Set();
    for (let x = n1; x <= n2; x++) {
        range.add(x);
    }
    for (const number of arr) {
        if (range.has(number)) {
            range.delete(number);
        }
    }
    return range.size === 0;
}

const inputArray = [1, 2, 3, 4, 5, 6]; 
const firstNumber = 3; 
const secondNumber = 5; 

const result = rangeOfArray(inputArray, firstNumber, secondNumber);

if (result) {
    console.log("Yes, the array contains all elements in the range.");
} else {
    console.log("No, it does not contain all the elements in the range.");
}


// let arr = prompt("Enter array elements: ")
// let n = prompt("Enter the first number: ")
// let n2 = prompt("Enter the second number: ")

// const arrRange=(arr,N,Z)=>{
//     const rangeSet = new Set();
//     for (let x = n; x<= n2; x++){
//         rangeSet.add(x);
//     }
//     for(const number of arr){
//         if(rangeSet.has(number)){
//             rangeSet.delete(number)
//         }
//     }
//     return rangeSet.size === 0; 
// }

// result = arrRange(arr,n2,n2+n-1)
// if (result){
//     consolele.log("Yes the array contains all elements in the range")
// }else{
//     console.log("No, Its does not contain all the elements")
// }