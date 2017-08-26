function HashTable(size) {
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

function HashNode(key, val, next) {
	this.key = key;
	this.val = val;
	this.next = next || null;
}

// hash a string (key)
HashTable.prototype.hash = function(key) {
	var total = 0;

	for( var i = 0; i < key.length; i++) {
		total += key.charCodeAt(i); // iterate through each char in the arr;
	}

	var bucket = total % this.numBuckets;
	return bucket;
}

HashTable.prototype.insert = function(key, value) {
	var index = this.hash(key);

	if(!this.buckets[index])
		this.buckets[index] = new HashNode(key, value);
	else if(this.buckets[index].key === key) {
		this.buckets[index].val = value;
	} else {
		var currentNode = this.buckets[index];

		while(currentNode.next) {
			if(currentNode.next.key === key)
				currentNode.next.val = value;

			currentNode = currentNode.next;
		}

		currentNode.next = new HashNode(key, value);
	}
}

HashTable.prototype.get = function(key) {
	var index = this.hash(key);

	if(!this.buckets[index]) return null;
	else {
		var currentNode = this.buckets[index];
		while(currentNode) {
			if(currentNode.key === key) return currentNode.val;
			currentNode = currentNode.next;
		}
		return null;
	}
}

HashTable.prototype.retrieveAll = function() {
	var result = [];

	for(var i = 0; i < this.numBuckets; i++) {
		var currentNode = this.buckets[i];

		while(currentNode) {
			result.push(currentNode);
			currentNode = currentNode.next;
		}
	}

	return result;
}

HashTable.prototype.delete = function(key) {
	var index = this.hash(key);

	if(this.buckets[index]) {
		var currentNode = this.buckets[index];

		if(currentNode.key === key) {
			var currentNode
		}
	}
}

var myHT = new HashTable(30);

myHT.insert('Alex', '970-319-0000');
myHT.insert('Bob', '970-319-0001');
myHT.insert('Peter', '970-319-0002');
myHT.insert('Amigo', '970-319-0001');
myHT.insert('King Cho', '970-319-9999');
myHT.insert('King Cho II', '970-123-9999');
myHT.insert('Patricio', '970-123-1234');


myHT.insert('Alex', '970-319-1234');

console.log(myHT)

var peterKey = myHT.get('Peter');
var alexKey = myHT.get('Alex');
var kingKey = myHT.get('King Cho');
var patricioKey = myHT.get('Patricio');
var allResults = myHT.retrieveAll();


console.log(peterKey);
console.log(alexKey);
console.log(kingKey);
console.log(patricioKey);
console.log(allResults);




