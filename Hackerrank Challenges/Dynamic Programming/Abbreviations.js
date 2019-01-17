let memo;
function abbreviation(a, b) {
    console.log(a + '-' + b);
    memo = {};
    let result = _abbreviation(a, b);
    // console.log(memo);
    return result;
}

// Complete the abbreviation function below.
function _abbreviation(a, b) {
    if (memo[a+'-'+b]) return memo[a+'-'+b];
    if (a.length < b.length) return 'NO';

    if (!b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === a[i].toUpperCase()) return 'NO';
        }
        found = true;
        return 'YES';
    }
    let result = '';
    let remainderA = a.substring(1, a.length);
    let remainderB = b.substring(1, b.length);
    if (a[0] === a[0].toLowerCase()) {
        const left = _abbreviation(a[0].toUpperCase() + remainderA, b);
        const right = _abbreviation(remainderA, b);
        if (left || right) found = true;
        result = (left === 'YES') ? left : right;
    } else {
        console.log('-----')
        console.log({a,b})
        if (a[0] === b[0]) result = _abbreviation(remainderA, remainderB);
        else result = 'NO';
    }
    memo[a + '-' + b] = result;
    return memo[a + '-' + b]
}