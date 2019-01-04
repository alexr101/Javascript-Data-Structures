const compoundProbability = (probability, times) => {
    let compound = 1;
    for(let i = 0; i < times; i++) {
        compound = compound * probability;
    }
    return compound
}

const probability = (p, n) => {
    return n/p;
}


const compound = compoundProbability(probability(6, 1), 2);
console.log(compound);

/*
11 12 13 14 15 16
21 22 23 24 25 26
31 32 33 34 35 36
41 42 43 44 45 46
51 52 53 54 55 56
61 62 63 64 65 66


1/36
*/