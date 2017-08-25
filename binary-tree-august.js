function Bst (val) {
	this.val = val;
	this.left;
	this.right;
}

Bst.prototype.add = function(val) {

	var bst = new Bst(val);

	if(bst.val < this.val) {
		if(this.left) 
			this.left.add(val);
		else
			this.left = bst;
	} else {
		if(this.right)
			this.right.add(val);
		else
			this.right = bst;
	}	
}

Bst.prototype.contains = function(val) {
	var found = false;

	if (this.val === val) {
		found = true;
	} else if(val < this.val && this.left != null) {
		found = this.left.contains(val);
	} else if (val > this.val && this.right != null) {
		found = this.right.contains(val);
	}

	return found;
}

Bst.prototype.invert = function() {
	
	if(!this.val) return;

	var right;
	var left;

	if(this.right)
		right = this.right.invert();
	if(this.left)
		left = this.left.invert();

	this.right = left;
	this.left = right;

	return this;
}

Bst.prototype.traverse = function(callback, order) {
	if(!this.val) return;

	if(order == "pre-order") 
		callback(this); // current node

	if(this.left)
		this.left.traverse(callback, order);
	
	if(order == "in-order")
		callback(this); // current node

	if(this.right)
		this.right.traverse(callback, order);

	if(order == "post-order")
		callback(this); // current node
}

Bst.prototype.minNodeUnsorted = function() {
	var currentMin = this.val;

	this.traverse(function(node) {
		if(node.val < currentMin)
			currentMin = node.val;
	}, "in-order");

	return currentMin;
}

Bst.prototype.maxNodeUnsorted = function() {
	var currentMax = this.val;

	this.traverse(function(node) {
		if(node.val > currentMax)
			currentMax = node.val
	}, "in-order");

	return currentMax;
}

Bst.prototype.maxNode = function() {
	//if(!this) return;

	if(this.right) 
		this.right.maxNode();
	else
		return this.val;
}

Bst.prototype.minNode = function() {
	if(!this) return;

	if(this.left) 
		this.left.minNode();

	return this.val;
}

Bst.prototype.sumEquals = function(val) {
	var found = false;
	var tree = this;

	tree.traverse(function(outerNode) {
		var val1 = outerNode.val;

		tree.traverse(function(innerNode) {
			var val2 = innerNode.val;

			if(outerNode != innerNode ) {
				if( val1 + val2 === val ) {
					found = true;
				}
			}
				
		}, "in-order");

	}, "in-order");

	return found;
}

var tree;
function setup() {
	tree = new Bst(15);

	tree.add(5);
	tree.add(10);
	tree.add(3);
	tree.add(6);
	tree.add(19);


	tree.traverse(function(node) {
		console.log(node.val);
	}, "in-order");

	// tree.invert();

	tree.traverse(function(node) {
		console.log(node.val);
	}, "in-order");

	console.log('sum found? ' + tree.sumEquals(26));

	console.log('max node is ' + tree.maxNode());
}

setup();

function invertTree(node) {
	if(!node) return;

	var left = invertTree(node.left);
	var right = invertTree(node.right);
	node.left = left;
	node.right = right;

	return node;
}

var fakeBst = {
	var: 5,
	right: {
		val: 7,
		right: 8,
		left: 6
	},
	left: {
		val: 3,
		right: 4,
		left: {
			val: 1,
			left: 10 // wrong
		}
	}
}

var correctBst = {
	var: 5,
	right: {
		val: 7,
		right: 8,
		left: 6
	},
	left: {
		val: 3,
		right: 4,
		left: {
			val: 1,
			left: -1 // right
		}
	}
}

console.log (isBst(fakeBst) );
console.log (isBst(correctBst) );

// Wront because it only checks the immediate node, but it won't compare different
// levels
function isBst(node) {
	if(!node) {
		return true;
	}

	if( node.left && node.left > node.val) {
		return false;
	}

	if( node.right && node.right < node.val) {
		return false;
	}

	if( !isBst(node.left) || !isBst(node.right) ) {
		return false;
	}

	return true;
}

















