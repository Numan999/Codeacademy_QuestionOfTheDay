const countUpperAndLower = (S) => {
    let counter = 0;

    for (let start = 0; start < S.length; start++) {
        let upperCount = 0;
        let lowerCount = 0;

        for (let end = start; end < S.length; end++) {
            if (S[end] >= 'A' && S[end] <= 'Z') {
                upperCount++;
            } else if (S[end] >= 'a' && S[end] <= 'z') {
                lowerCount++;
            }

            if (upperCount === lowerCount) {
                counter++;
                console.log(`substring: ${S.substring(start, end + 1)}`);
            }
        }
    }

    return counter;
}

let word = "WomensDAY";
console.log(countUpperAndLower(word));
