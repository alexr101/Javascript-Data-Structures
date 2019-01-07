const compoundProbability = (probability, times) => {
    let compound = 1;
    for(let i = 0; i < times; i++) {
        compound *= probability;
    }
    return compound
}

// p = probabilities (imagine a die w 6 faces)
// n = denominator. How many chances of getting your result
const probability = (n, p) => {
    return n/p;
}


console.log(probability(1, 2));

const compound = compoundProbability(probability(1, 6), 3);
console.log(compound);

/*
11 12 13 14 15 16
21 22 23 24 25 26
31 32 33 34 35 36
41 42 43 44 45 46
51 52 53 54 55 56
61 62 63 64 65 66

111
1/36
*/

/*

ttt
tth
tht
htt
hth
hhh
hht
thh


*/