const allPermutations = (s) => {
    return _allPermutations(s, '');
}

const _allPermutations = (s, partial) => {
    if(!s.length) return partial;

    for(let i = 0; i < s.length; i++) {
        const newPartial = partial + s[i];
        const newString = s.substring(0, i) + s.substring(i+1, s.length);
        const permutation = _allPermutations(newString, newPartial);
        permutations.push(permutation);
    }
}

const permutations = allPermutations('HELLO');
console.log(permutations);
