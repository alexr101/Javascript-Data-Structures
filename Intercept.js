// Intercept functions
// Assumes that data in documents is ordered

var Intercept = (list1, list2) => {
    var result = [];
    var p1 = 0;
    var p2 = 0;
    
    while(typeof list1[p1] !== 'undefined' && typeof list2[p2] !== 'undefined') {
        
        if(list1[p1] === list2[p2]) {
            result.push( list1[p1] );
            p1 += 1;
            p2 += 1;
        } else {
            if(list1[p1] < list2[p2])
                p1 += 1;
            else 
                p2 += 1;
        }
    }

    return result;
}

// TEST
const list1 = [1, 43, 52, 100];
const list2 = [4, 32, 33, 43, 41, 54, 100];

const intercepts = Intercept(list1, list2);
console.log(intercepts);
