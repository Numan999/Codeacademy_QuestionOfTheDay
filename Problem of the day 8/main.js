const no = Number(prompt("Enter numbers of elements in the array: "))

const array=[];

for ( let i = 0 ; i < no ; i++){
    const element = prompt("Enter item "+ (i+1) + " :");
    array.push(element)
}
const reverse = array.reverse();

console.log(reverse)