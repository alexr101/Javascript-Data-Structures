var bracketPairs = {
	"(" : ")",
  "{" : "}"
}

function isBalanced(brackets){
  var stack = []
  
  for(var i = 0; i < brackets.length; i++) {
  	var bracket = brackets[i]
 
  	if(bracketPairs[bracket] != null){
      stack.push(bracket)
    } else {
       if(bracketPairs[stack.pop()] !== bracket) return false          	
    }
  }
  
  return stack.length === 0
}


/* TEST HERE */
var result = isBalanced("({{})")
console.log(result)


var brackets = {
  '(': ')',
  '{': '}'
}

var stack = ['('];

var isBalanced = (brackets) => {
  var stack = [];

  brackets.forEach((bracket) => {
    if(brackets[bracket] !== null){
      stack.push(bracket);
    } else {
      for(var k)
    }
  })

}

isBalanced('(()');