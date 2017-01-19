function BST(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

BST.prototype = {
	//O(log n)
	//Insert a value into the tree
	insert: function(value){
		if(value <= this.value){
			if(!this.left) this.left = new BST(value);
			else this.left.insert(value);
		} else {
			if(!this.right) this.right = new BST(value);
			else this.right.insert(value);
		}
	},

	contains: function(value){
		if(this.value == value) return true;	  

		if(value <= this.value){
			if(!this.left) return false;
			else return this.left.contains(value); 

		} else {
			if(!this.right) return false;
			else return this.right.contains(value);
		}
	},

	//O(n)
	//Traverses the whole tree IN ORDER
	depthFirstTraversal: function(visit, depth){

		if(depth === "pre-order"){ 
			visit(this); 
		}

		if(this.left) this.left.depthFirstTraversal(visit, depth);

		if(depth === "in-order"){ 
			visit(this); 
		}

		if(this.right) this.right.depthFirstTraversal(visit, depth);

		if(depth === "post-order"){ 
			visit(this); 
		}

		// or
		// if(this){
		// 	this.left.depthFirstTraversal(iteratorFn, depth);
		// 	this.right.depthFirstTraversal(iteratorFn, depth);
		// }
	},

	//Unsorted tree
	getMaxVal: function(){
		var currentMax = 0;

		this.depthFirstTraversal(function(node){
			
			if(node.value > currentMax){ currentMax = node.value; }

		}, "in-order")

		return currentMax;
	},

	//Unsorted tree
	getMinVal: function(){
		var currentMin = 0;

		this.depthFirstTraversal(function(node){

			if(node.value > currentMax){ currentMax = node.value; }

		}, "in-order")

		return currentMax;
	},




}

var binaryST = new BST(50);

binaryST.insert(30);
binaryST.insert(75);
binaryST.insert(15);
binaryST.insert(20);
binaryST.insert(60);

console.log(binaryST)
console.log(binaryST.contains(15));
console.log(binaryST.depthFirstTraversal(logNode, "post-order"));
console.log(binaryST.getMaxVal());

function logNode(node){
	if(typeof node !== undefined){
		console.log(node.value);
	}
}







