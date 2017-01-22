function Node(value, next, previous){
	this.value = value;
	this.next = next || null;
	this.previous = previous || null;
}

function DoublyLinkedList(){
	this.first = null;
	this.last = null;
}

DoublyLinkedList.prototype ={

	insertFirst : function(value){
		var newNode = new Node(value);

		if(!this.first) this.last = newNode;
		else this.first.previous = newNode;
		
		newNode.next = this.first;
		this.first = newNode;

		console.log(this);		
	},

	insertLast: function(value){
		var newNode = new Node(value);

		if(!this.first) this.first = newNode;
		else this.last.next = newNode;

		newNode.previous = this.last;
		this.last = newNode;
	},

	deleteFirst: function(){
		var tempData = this.first.value;
		
		if(this.first.next == null) this.last = null;

		this.first = this.first.next;
		this.first.previous = null;

		return tempData;
	},

	deleteLast: function(){
		var tempData = this.last.value;

		if(!this.last.previous) this.first = null;

		this.last = this.last.previous;
		this.last.next = null;

		return tempData;
	},

	displayList: function(){
		var contents = [];
		var tempNode = this.first;

		while(tempNode.next){
			contents.push(tempNode.value);
			tempNode = tempNode.next;
		}

		return contents;
	},

	insertAfter: function(key, value){
		var currentNode = this.first;

		while(currentNode && currentNode.value !== key){
			currentNode = currentNode.next;
		}

		if(currentNode){
			var newNode = new Node(value, currentNode.next, currentNode);

			if(currentNode === this.last){
				this.last = newNode;
			} 
			else{
				currentNode.next.previous = newNode;
			}

			currentNode.next = newNode;
		} else 
			return null;

	},

	deleteKey: function(key){
		var currentNode = this.first;

		while(currentNode && currentNode.value !== key){
			currentNode = currentNode.next;
		}

		if(currentNode){
			var tempData = currentNode.value;

			//We only care for middle nodes, for first and last node we dont
			//have to worry about neighbour node's references
			if(currentNode === this.first) this.first = currentNode.next;
			else if (currentNode === this.last) this.last = currentNode.previous;
			else{
				currentNode.previous.next = currentNode.next;
				currentNode.next.previous = currentNode.previous;
			}

			currentNode = null;

			return currentNode;
		} else 
			return null;
	},

	displayForward: function(){
		var currentNode = this.first;
		var array = [];

		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return array;
	},

	displayBackward: function(){
		var currentNode = this.last;
		var array = [];
		while(currentNode){
			array.push(currentNode.value)
			currentNode = currentNode.previous;
		}

		return array;
	},


}

var doublyLL = new DoublyLinkedList();
doublyLL.insertFirst(44);
doublyLL.insertFirst(45);
doublyLL.insertLast(55);
doublyLL.insertLast(66);

console.log(doublyLL.displayForward());

doublyLL.deleteLast();
doublyLL.deleteFirst();

console.log(doublyLL.displayForward());

doublyLL.insertLast(102);
doublyLL.deleteKey(44);

console.log(doublyLL.displayForward());

doublyLL.insertAfter(55, 9999);

console.log(doublyLL.displayForward());