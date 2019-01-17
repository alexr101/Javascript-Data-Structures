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

let token = '';
for (let i = 0; i < 20; i++) {
    token += randomCharGenerator();
}
console.log(token);