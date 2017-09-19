var createMatrix = function(d1, d2){
  var m = []
  for(var i = 0; i < d1; i++){
    m[i] = new Array(d2);
  }
  return m;
}

var longestCommonSubstring = function(str1, str2){
  var matrix = createMatrix(str1.length, str2.length);
  var max = 0;
  
  for(var i = 0; i < str1.length; i++) {
    var char1 = str1[i];

    for(var j = 0; j < str2.length; j++){
      var char2 = str2[j];
          matrix[i][j] = 0;
      var d1 = ((i-1) >= 0) ? i-1 : 0; // make sure you index valid value
      var d2 = ((j-1) >= 0) ? j-1 : 0;

      if(char1 === char2){
        var streak = matrix[d1][d2] + 1;
        if(streak > max) max = streak;
        matrix[i][j] = streak;
      }
    }
  }
  console.log(max);
  return max;
}

longestCommonSubstring('acer', 'pacer');
longestCommonSubstring('abcd', 'bcd');
longestCommonSubstring('produce', 'introduce');
longestCommonSubstring('string', 'why');
longestCommonSubstring('ononon', 'nonono');