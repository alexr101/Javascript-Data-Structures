// Created by Alex Padilla
// www.alexonezero.com
// 8/29/2017
// Recursive Range Iterator

function rangeIterator(num, limiter, callback) {
  limiter = limiter || 0;
  adder = (num > limiter) ? -1 : 1;

  callback(num);

  if(num === limiter) return num;

  rangeIterator(num + adder, limiter, callback);
}

rangeIterator(0, 100, function(num) {
  console.log(num);
});
