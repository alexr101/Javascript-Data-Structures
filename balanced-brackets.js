var bracketPairs = {
	"(" : ")",
  "{" : "}"
}

function isBalanced(brackets){
  var queue = []
  
  for(var i = 0; i < brackets.length; i++) {
  	var bracket = brackets[i]
 
  	if(bracketPairs[bracket] != null){
      queue.push(bracket)
    } else {
       if(bracketPairs[queue.pop()] !== bracket) return false          	
    }
  }
  
  return queue.length === 0
}


/* TEST HERE */
var result = isBalanced("({{})")
console.log(result)