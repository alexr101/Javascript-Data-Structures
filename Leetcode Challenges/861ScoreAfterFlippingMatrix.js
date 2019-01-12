/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let m = A;
    let max = 0;
    const rows = m.length;
    const cols = m[0].length;

    // flip rows that start at 0
    for(let i = 0; i < rows; i++) {
        if(m[i][0] === 0) flipMatrixRow(m, i);
    }

    // flip cols that have more zeros than ones & skip col 0, cause they should all be 1s
    for(let i = 1; i < cols; i++) {
        let zeroesInColCount = 0;
        for(let j = 0; j < rows; j++) {
            if(m[j][i] === 0) zeroesInColCount++;
        }
        if(zeroesInColCount >= Math.ceil(rows/2)) flipMatrixCol(m, i);
    }

    return matrixBinarySum(m)
};

const flipMatrixRow = function(m, r) {
    const cols = m[0].length;
    for(let j = 0; j < cols; j++) {
        if(m[r][j] === 1) m[r][j] = 0;
        else m[r][j] = 1;
    }
    
}
const flipMatrixCol = function(m, c) {
    const rows = m.length;
    for(let i = 0; i < rows; i++) {
        if(m[i][c] === 1) m[i][c] = 0;
        else m[i][c] = 1;
    }
}

const matrixBinarySum = function(m) {
    const rows = m.length;
    const cols = m[0].length;
    let sum = 0;
    
    for(let i = 0; i < rows; i++) {
        let binary = '';
        for(let j = 0; j < cols; j++) {
            binary = binary + m[i][j];
        }
        sum += parseInt(binary, 2);
    }
    return sum;
} 


/*
    MENTAL MODEL
    
    original
    [0011]
    [1010]
    [1100]
    
    flip rows that start with 0
    flip cols that have more zeroes than ones
    
    solution
    [1111]
    [1001]
    [1111]

*/