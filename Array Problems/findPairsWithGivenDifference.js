// PRAMP interview challenge
// https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnpZ

function findPairsWithGivenDifference(arr, k) {  
    if(k === 0) return [];
    
    var matchingPairs = [];
    var map = {};
    
    for(var i = 0; i < arr.length; i++) {
      var x = arr[i];
      map[x - k] = x;
    }
    
    for(var i = 0; i < arr.length; i++) {
      var y = arr[i]
      
      if(typeof map[y] !== 'undefined') {
        console.log('push');
        matchingPairs.push([map[y], y])
      }    
    }
  
    return matchingPairs;
}