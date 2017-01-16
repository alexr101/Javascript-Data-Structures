function LinkedList(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}

LinkedList.prototype = {

	addToHead : function(value){
		var newNode = new Node(value, this.head, null);

		if(!this.isEmpty()) this.head.prev = newNode;
		else this.tail = newNode;

		this.head = newNode;		
		this.count = this.count + 1;
	},

	addToTail : function(value){
		var newNode = new Node(value, null, this.tail);
		
		if(!this.isEmpty()) this.tail.next = newNode;
		else this.head = newNode;

		this.tail = newNode;
		this.count = this.count + 1;
	},

	removeFirst : function(){
		var nodeCopy = this.head ;

		if(!this.isEmpty()){
			this.head = this.head.next;
			this.count = this.count - 1;

			if(this.head){
				this.head.prev = null;	
			} 
			else 
				this.tail = null; //null the tail as well if it's empty
		}

		return nodeCopy ? nodeCopy.value : null;
	},

	removeLast : function(){
		var nodeCopy = this.tail;

		if(!this.isEmpty()){
			this.tail = this.tail.prev;
			this.count = this.count - 1;

			if(this.tail){
				this.tail.next = null;	
			} 
			else 
				this.head = null; //null the head as well if it's empty
			
		}

		return nodeCopy ? nodeCopy.value : null;
	},

	length : function(){
		return this.count;
	},

	getFirst : function(){
		return this.head;
	},

	getLast : function(){
		return this.tail;
	},

	search : function(value){
		var nodeCopy = this.head;
		var array = [];

		while(nodeCopy){

			if (nodeCopy.value.includes(value)){
				array.push(nodeCopy.value);
			} 

			nodeCopy = nodeCopy.next
		}

		return array;
	},

	getContents : function(){
		var nodeCopy = this.head;
		var array = [];

		while(nodeCopy){
			array.push(nodeCopy.value);
			nodeCopy = nodeCopy.next
		}

		return array;
	},

	getReverseContents : function(){
		var nodeCopy = this.tail;
		var array = [];

		while(nodeCopy){
			array.push(nodeCopy.value);
			nodeCopy = nodeCopy.prev;
		}

		return array;
	},

	isEmpty : function(){
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
console.log(userList);

//userList.removeFirst();
//userList.removeLast();

var searchResults = userList.search("101");
console.log(searchResults);
