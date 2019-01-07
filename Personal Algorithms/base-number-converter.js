// Created by Alex Padilla
// www.alexonezero.com
// 8/28/2017
// TODO: 1 & +10 Base conversion

Number.prototype.baseConvertTo = function(base) {
  var baseNumber = 0;
  var thisNum = this;

  if(base <= 1 || base > 9) return;

  while(thisNum > 0) {

    // subtract from num
    var largestPow = findLargestPow(base, thisNum);

    var powNum = Math.pow(base, largestPow); // eg: 8^2
    var powFits = floorDivision(thisNum, powNum);
    thisNum -= (powNum * powFits);
    // add to base number    
    var multiplier = (Math.pow(10, largestPow));
    baseNumber +=  multiplier * powFits;    
    // string alternative
    // baseNumber = baseNumber + powFits;
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

var num = 450;
var results = [];

function loop(i, callback) {
  callback(i);
  if(i === 0) return;
  loop(i-1, callback);
}

loop(9, function(i) {
  results[i] = num.baseConvertTo(i);
  console.log('base ' + i + ':')
  console.log(results[i]);
});






