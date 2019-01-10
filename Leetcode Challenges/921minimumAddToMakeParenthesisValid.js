/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let total = 0;
    let stackCount = 0;
    for(let i = 0; i < S.length; i++) {
        if(S[i] === '(')
            stackCount++;
        else {
            console.log(stackCount === 0)
            if(stackCount === 0) { 
                total++;
                continue;
            }
            stackCount--;
        }
    }
    total += stackCount;
    return total
};

/*

MENTAL MODEL

create a stack
    for every opening add a 1
    for every closing
        check if stack is empty
            if empty add 1 to total
        remove 1 from stack
    
    At the end of the loop get stray symbols through q.length
    add this to the total   
*/