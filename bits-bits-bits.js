const getBit = (bit, i) => {
    return bit&(1 << i) ? 1 : 0;
}
// 1010
let n = 10;
console.log(getBit(n, 2))


// 10001
// 00100
const setBit = (bit, i) => {
    return bit | (1 << i);
}

console.log(setBit(n, 0));

// 11111
// 11011
const clearBit = (bit, i) => {
    return bit & ~(1<<i);
}

console.log(clearBit(n, 1));

//.     32168421 
// 111111
// 111000

const clearBitThruI = (bit, i) => {
    return bit & (-1<<i+1);
}

console.log((63>>>0).toString(2));
console.log(clearBitThruI(63, 4));


// 111111
// 000111
const clearBitUntilI = (bit, i) => {
    return bit&(1<<i+1)-1;
}

console.log(clearBitUntilI(63, 3))


