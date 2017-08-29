// Created by Alex Padilla
// www.alexonezero.com
// 8/28/2017
// TODO: 2-10 Base conversion

Number.prototype.baseConvertTo = function(base) {
  var baseNumber = 0;
  var thisNum = this;

  while(thisNum > 0) {

    // subtract from num
    var largestPow = findLargestPow(base, thisNum);

    var powNum = Math.pow(base, largestPow);
    var powFits = floorDivision(thisNum, powNum);
    thisNum -= (powNum * powFits);
    // add to base number    
    var multiplier = (Math.pow(10, largestPow));
    baseNumber +=  multiplier * powFits;    
  }

  return baseNumber;
}

function floorDivision(dividend, divisor) {
  return Math.floor(dividend/divisor);
}

function findLargestPow(base, num) {
  if(base === 0 || num === 0) return 0;

  var largestPow = 0;
  var powNumber = 0;

  while(true) {
    powNumber = Math.pow(base, largestPow);

    if(powNumber > num) {
      largestPow--;
      break;
    }
    largestPow++; 
  }
  return largestPow;
}

var num = 100;
var results = [];
console.log(num.baseConvertTo(1)); // ERROR!

// function loop(i, callback) {
//   callback(i);
//   if(i === 0) return;
//   loop(i-1, callback);
// }

// loop(10, function(i) {
//   results[i] = num.baseConvertTo(i);
//   console.log(results[i]);
//   console.log(i);
// })



// // works
// function loop(i, callback) {
//   console.log(i);
//   if(i === 0) return;
//   return loop(i-1, callback);
// }

// loop(10);




