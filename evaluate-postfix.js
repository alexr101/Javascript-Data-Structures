// https://www.youtube.com/watch?v=MeRb_1bddWg

String.prototype.isNumeric = function() {
	return !isNaN(parseFloat(this)) && isFinite(this);
}

function evaluatePostfix(postfix) {
	var operands = [];

	for(var i = 0; i < postfix.length; i++) {
		var token = postfix[i];

		if(token.isNumeric())
			operands.push(token);
		else {
			var operand1 = operands.pop();
			var operand2 = operands.pop();
			var result = eval(operand1 + token + operand2);
			operands.push(result)
		}
	}

	return operands[0];
}

var result = evaluatePostfix('12+3*9+');

console.log(result);