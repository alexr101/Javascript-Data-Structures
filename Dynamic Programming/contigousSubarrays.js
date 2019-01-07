/* 
    Optimal contingous subarrays
    a = [001100110110]
    n = 12
    k = 3
    min = n/2k
    max = 3n/2k

    eg
    [001][1001][10110]
    Break this array into a max of k contiguous subarrays.

    Get the combination that provides the maximum value given that one element from each subarray will be randomly selected. So get avg sum.
    1/3 + 2/4 + 3/5 = 10/30 + 15/30 + 18/30 = 43/30 = 1.43333 (NOT OPTIMAL)
*/

const maxContigousSubArray = (a, n, k) => {
    return _maxContigousSubArray(a, n, k, []);
}

const arrSum = (a) =>{
    if(!a.length) return 0;
    return a.reduce((a, b) => a+b);

}

const _maxContigousSubArray = (a, n, k, sub) => {

    if(sub.length === k) {
        if(a.length) return 0
        let totalSum = 0;
        for(let i = 0; i < k; i++) {
            let sum = arrSum(sub[i]);
            let arrAvgValue = (sum/sub[i].length)
            totalSum += arrAvgValue;
        } 
        return totalSum;
    }

    const min = n/(2*k);
    const max = (3*n)/(2*k);
    let maxSum = 0;

    for(let i = 0; i < a.length; i++) {
        if(i >= min-1 && i < max) {
            const subArr = a.slice(0, i+1);
            const remainingArr = a.slice(i+1, a.length);
            sub.push(subArr);
            maxSum = Math.max(maxSum, _maxContigousSubArray(remainingArr, n, k, sub));
            sub.pop();
        }
    }
    return maxSum;
}

const max = maxContigousSubArray([0,0,1,1,0,0,1,1,0,1,1,0], 12, 3);
console.log(max);
