function lcs(s1, s2) {
    let result = '';
    const m = generateLcsMatrix(s1, s2);
    let i = m.length-1;
    let j = m[0].length-1;

    while(i > -1 && j > -1) {
        const current = m[i][j];
        const prevRow = m[i-1];
        const prevDiagonal = (prevRow) ? m[i-1][j-1] : 0;
        const oneLeft = m[i][j-1]
        const oneUp = (prevRow) ? m[i-1][j] : 0;
        let matches = false;

        if(oneUp === current) {
            i--;
        } else if(oneLeft === current) {
            j--;
        } else if(prevDiagonal !== current) {
            result = s1[i] + result;
            i--;
            j--;
            matches = true;
        } 
    }

    return result;    
}

const generateLcsMatrix = (s1, s2) => {
    m = [];

    for(let i = 0; i < s2.length; i++) {
        m[i] = [];
    }

    for(let i = 0; i < s2.length; i++) {
        for(let j = 0; j < s1.length; j++) {
            m[i][j] = 0;
            const prevRow = m[i-1];
            const oneUp = (prevRow) ? m[i-1][j] : 0;
            const oneLeft = m[i][j-1];

            if(s1[i] === s2[j])
                m[i][j] = 1;
            
            if(prevRow && oneLeft)
                m[i][j] += Math.max(oneLeft, oneUp);
            else if(oneLeft)
                m[i][j] += oneLeft;
            else if(oneUp)
                m[i][j] += oneUp;
        }
    }
    return m;
}

let result = lcs('zxabcye', 'abopcte');
console.log(result);
