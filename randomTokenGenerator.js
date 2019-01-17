const random = (max) => {
    return Math.ceil(Math.random() * (max));
}

// NUMBERS 48-57 - 10 total
// UPPERCASE 65-90 - 25 total
// LOWERCASE 97-122 - 25 total
const getCharNum = (n) => {
    if (n <= 10) return n + 47;
    else if (n <= 36) return n + 54
    else if (n <= 62) return n + 60
}

const randomCharGenerator = () => {
    return String.fromCharCode(getCharNum(random(62)));
}

const generateChar = (n) => {
    return String.fromCharCode(getCharNum(n));
}

let charToCountMap = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
}
const generateToken = () => {
    let token = '';
    let charsAvailable = 62;
    let increasedCount = false;
    for (let i = 5; i > 0; i--) {
        if(!increasedCount && charToCountMap[i] < charsAvailable) {
            charToCountMap[i]++;
            increasedCount = true;
        }
        token = generateChar(charToCountMap[i]) + token;
    }
    if(!increasedCount) return 'tokens full';
    else return token;
}

// TEST
let tokens = [];
for(let i = 0; i < 1000; i++) {
    tokens.push(generateToken());
}
console.log(tokens);
