// HAVENT IMPLEMENTED THE MEMO


let memo;
let found;
function abbreviation(a, b) {
    memo = {};
    found = false;
    return _abbreviation(a, b);
}

// Complete the abbreviation function below.
function _abbreviation(a, b) {
    if (found) return 'YES';
    if (a.length < b.length) return 'NO';

    if (!b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === a[i].toUpperCase()) return 'NO';
        }
        found = true;
        return 'YES';
    }
    let remainderA = a.substring(1, a.length);
    let remainderB = b.substring(1, b.length);
    if (a[0] === a[0].toLowerCase()) {
        const left = abbreviation(a[0].toUpperCase() + remainderA, b);
        const right = abbreviation(remainderA, b);

        if (left || right) found = true;
        return (left === 'YES') ? left : right;
    } else {
        if (a[0] === b[0])
            return abbreviation(remainderA, remainderB);
        return 'NO';
    }
}