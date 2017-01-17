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
	//Traverses the whole tree
	depthFirstTraversal: function(iteratorFn){
		if(this.left) this.left.depthFirstTraversal(iteratorFn);
		iteratorFn(this.value);
		if(this.right) this.right.depthFirstTraversal(iteratorFn);
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
console.log(binaryST.depthFirstTraversal(function(value){
	console.log(value);
}));