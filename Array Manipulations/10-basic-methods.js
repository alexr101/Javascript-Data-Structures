var arr = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

var push = arr.push(5); // adds 5 to end
console.log(push);

var pop = arr.pop(); // removes last el
console.log(pop);


var concat = arr.concat(arr2); // concatenates 2 arrays
console.log(concat);

var join = arr.join(','); // joins into 1 string
console.log(join);

var reverse = arr.reverse(); // !!! affects original array !!!
console.log(reverse);
arr.reverse();
console.log(reverse);


var shift = arr.shift(); // removes first el
console.log(shift);

var unshift = arr.unshift(1); // adds el to first position. returns length
console.log(unshift);
console.log(arr);

var slice = arr.slice(1, 3); // get substring of arr. start, end-1 // eg this gets only el 1
console.log(slice);


// SORT ARR
arr.push(7)
arr.unshift(99);
arr.unshift(99999);
arr.push(-6);
console.log(arr);
var sort = arr.sort(); // NOTE: it sorts as string types. So number sorting dont seem to work.
console.log(sort);


var splice = arr.splice(0, 5); // Affects original arr. Param 1 = starting index. Param2 = number of items to splice off.
console.log(splice); // spliced portion
console.log(arr); // portion that's left








 

