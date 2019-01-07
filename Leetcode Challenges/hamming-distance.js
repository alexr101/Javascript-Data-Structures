// https://leetcode.com/problems/hamming-distance/description/
function toBinary(x, length) {
  var x = (x).toString(2);
  var loopLimit = (length) ? length - x.length : x.length%4;

  for(var i = 0; i < loopLimit; i++) {
      x = "0" + x;
  }
  
  return x;
}

function binaryLength(x) {
  return (x).toString(2) + (x).toString(2)%3;
}

var hammingDistance = function(x, y) { 
  var distance = 0;
  var xLength = binaryLength(x);
  var yLength = binaryLength(y);
  var maxLength = (xLength > yLength) ? xLength : yLength;

  var x  = toBinary(x, maxLength);
  var y = toBinary(y, maxLength);
  
  console.log(x);
  console.log(y);
  for(var i = 0; i < maxLength; i++) {
    if(x[i] !== y[i]) distance++;
  }
  return distance;
};

var distance = hammingDistance(1, 40);

console.log(distance);

