/* 
Given items where each item has x possibilities calculate the possibility of "probabilityOf" to show up "repeat" number of times.

ie 
items = 2
x (possibilities) = 4
probabilityOf = 1
repeating = 2

All possiblities for 1n are
n=1, n=2, n=3, n=4

Since there are 2 ns possibilities are
11 12 13 14 15
21 22 23 24 25
31 32 33 34 35
41 42 43 44 45
51 52 53 54 55


Calculate the possibility of the number 1 (probabilityOf=1) being in the combined numbers 2 times (repeat=2)
*/

function possibilities(items, possibilities, probablityOf, repeating) {
    let state = '';
    for(let i = 1; i <= items; i++) {
        state += '1';
    }
    return _possibilities(state, possibilities, probablityOf, repeating, 0);
}

let memo = {};
function _possibilities(state, possibilities, probabilityOf, repeating, count) {
    if(memo[state]) return count;
    memo[state] = true;
    let charFound = 0;
    for(let i = 0; i < state.length; i++) {
        if(parseInt(state[i]) === probabilityOf) { 
            charFound++
        }
    }
    if(parseInt(charFound) === repeating) { 
        console.log('found!', state)
        count++;
    }

    for(let i = 0; i < state.length; i++) {
        if(state[i] < possibilities) {
            let num = parseInt(state[i])
            num++;
            const newState = state.substring(0, i) + num + state.substring(i+1, state.length);
            console.log({
                state: state,
                newState: newState
            })
            count = _possibilities(newState, possibilities, probabilityOf, repeating, count);
        }
    }
    return count;
}


const p = possibilities(
    items = 3, 
    possibilities = 5, 
    probabilityOf = 2, 
    repeating = 3); 
console.log(p)