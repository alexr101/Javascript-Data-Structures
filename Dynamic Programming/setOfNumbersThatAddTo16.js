

let memo = {};
const setOfNumbersThatAddTo = (a, n) => {
    return _setOfNumbersThatAddTo(a, n, a.length-1);
}

const _setOfNumbersThatAddTo = (a, n, i) => {
    if(n === 0) return 1;
    else if(i < 0) return 0;
    else if(n < 0) return 0;
    
    return _setOfNumbersThatAddTo(a, n-a[i], i-1) +
        _setOfNumbersThatAddTo(a, n, i-1)
}

const setOfNumbersThatAddToDP = (a, n) => {
    return _setOfNumbersThatAddToDP(a, n, a.length-1, {});
}

const _setOfNumbersThatAddToDP = (a, n, i, mem) => {
    let key = n + ':' + i;
    if(mem[key]) return mem[key];

    if(n === 0) return 1;
    else if(i < 0) return 0;
    else if(n < 0) return 0;
    
    let result = _setOfNumbersThatAddToDP(a, n-a[i], i-1, mem) +
        _setOfNumbersThatAddToDP(a, n, i-1, mem)
    
    mem[key] = result;
    return mem[key];
}

const nSets = setOfNumbersThatAddToDP([2, 4, 6, 10], 16);
console.log(nSets);


/*
                                [2,4] 0                [6] 0
                [2,4,6] 6                   [2,6] 2
                                [2,4,6] 6
16 [2,4,6,10]                  

                                                
                                [2,4,10] 10
                [2,4,6,10]16
                                [2,4,6,16] 16



Mental Model

    1) iterate through array by adding an i param
    2) in each recursion do i--     
        a) run 1 by subtracting a[i] to total
        b) run 1 by not subtracting a[i] to total (ignore val)
    3) return 1 if sum === 0
    4) return 0 if sum < 0 
    5) return 0 if i < 0
    


*/
