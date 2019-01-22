const biggestDifference = (a) => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    a.forEach((n) => {
        if(n < min) min = n;
        if(n > max) max = n;
    })
    console.log({max,min})
    return max-min;
}

let r = biggestDifference([12,3,412,34,123,4, 9999999]);
console.log(r);
