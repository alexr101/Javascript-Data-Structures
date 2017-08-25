function LinkedList(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}

LinkedList.prototype = {

	//O(1)?
	//Add a Node to the beginning of this list
	addToHead: function(value){
		var newNode = new Node(value, this.head, null);

		if(!this.isEmpty()) this.head.prev = newNode;
		else this.tail = newNode;

		this.head = newNode;		
		this.count = this.count + 1;
	},

	//O(1)?
	//Add a Node to the end of this list
	addToTail: function(value){
		var newNode = new Node(value, null, this.tail);
		
		if(!this.isEmpty()) this.tail.next = newNode;
		else this.head = newNode;

		this.tail = newNode;
		this.count = this.count + 1;
	},

	// O(n)
	// Remove the first node of this list
	removeFirst: function() {
		var nodeHead = this.head;

		if(!nodeHead) return null;

		this.head = this.head.next; // might be null
		this.count = this.count - 1;

		if(this.head) {
			this.head.prev = null;
			if(this.head.next == null) // if the count is now 1
				this.tail = this.head;
		} else {
			this.tail = null;
		}

		return nodeHead.value;

	},
	
	// O(n)
	// Remove tail
	removeLast: function() {
		var nodeTail = this.tail;

		if(!nodeTail) return null;

		this.tail = this.tail.prev;
		this.count = this.count - 1;

		if(this.tail) {
			this.tail.next = null;
			if(!this.tail.prev) 
				this.head = this.tail;
		} else {
			this.head = null
		}

		return nodeTail.value;

	},

	//O(1)
	//return the length of this list
	length: function(){
		return this.count;
	},

	//O(1)
	//return the first Node of this list
	getFirst: function(){
		return this.head;
	},

	//O(1)
	//return the last Node of this list
	getLast: function(){
		return this.tail;
	},

	//O(n)
	//Search for a Node value that is an exact match of the passed in parameters
	//return the result
	search: function(value){
		var nodeCopy = this.head;

		while(nodeCopy){

			if(nodeCopy.value === value){ return nodeCopy };

			nodeCopy = nodeCopy.next;
		}

		return null;
	},

	//O(n)
	//Search all Node values that match or partially match the passed in parameter, 
	//and return an array containing the results
	contains: function(value){
		var nodeCopy = this.head;
		var array = [];

		while(nodeCopy){

			if(nodeCopy.value.includes(value)){
				array.push(nodeCopy.value);
			} 

			nodeCopy = nodeCopy.next
		}

		return array;
	},

	//O(n)
	//Get the index position in the Linked List
	getIndex: function(value){
		var nodeCopy = this.head;
		var currentIndex = -1;

		while(nodeCopy){

			currentIndex = currentIndex + 1;

			if(nodeCopy.value === value){ break; }

			nodeCopy = nodeCopy.next;
		}

		if(!nodeCopy){
			return null;
		}

		return currentIndex;	

	},


	//O(n)
	//Return all the contents of this list in an array
	getContents: function(){
		var nodeCopy = this.head;
		var array = [];

		while(nodeCopy){
			array.push(nodeCopy.value);
			nodeCopy = nodeCopy.next
		}

		return array;
	},

	//O(n)
	//Return all the reverse contents of this list in an array
	getReverseContents: function(){
		var nodeCopy = this.tail;
		var array = [];

		while(nodeCopy){
			array.push(nodeCopy.value);
			nodeCopy = nodeCopy.prev;
		}

		return array;
	},

	//O(1)
	//Verify if list is empty
	isEmpty: function(){
		return (this.count === 0);
	},

}

function Node(value, next, prev){
	this.value = value;
	this.next = next;
	this.prev = prev;
}

var userList = new LinkedList();

userList.addToHead("alexonezero");
userList.addToHead("bubba101");
userList.addToHead("the101s");
userList.addToHead("heyhey101hey");
console.log(userList.getContents());

console.log(userList.getIndex("alexonezero"));

//userList.removeFirst();
//userList.removeLast();

var searchResults = userList.search("101");
console.log(searchResults);
