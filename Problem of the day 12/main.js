//Problem of the day 12

function alternative(arr) {
    const posNums = arr.filter(num => num > 0);
    const negNums = arr.filter(num => num < 0);

    const result = [];
    let posIdx = 0, negIdx = 0;

    for (const num of arr) {
        if (num > 0) {
            result.push(posNums[posIdx]);
            posIdx++;
        } else {
            result.push(negNums[negIdx]);
            negIdx++;
        }
    }

    return result;
}

 

//The input 
const Arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
const result = alternative(Arr);
console.log(result);