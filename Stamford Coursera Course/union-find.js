class UnionFind {

	// speed O(n)
	// space O(n)
	constructor(n){
		this.collection = []; // 1
		for(let i = 0; i < n; i++) { // n
			this.collection[i] = i;
		} 
	}

	// speed O(1)
	// space O(1)
	connected(p, q) {
		return this.collection[p] === this.collection[q]; // 1
	}

	// speed O(n)
	// space O(1)
	union(p, q) {
		const pId = this.collection[p]; // speed:1 space:1
		const qId = this.collection[q]; // speed:1 space:1
		for(let i = 0; i < this.collection.length; i++) { // n
			if(this.collection[i] === pId) 
				this.collection[i] = qId // speed:1 space:1
		}
	}

	print() {
		console.log(this.collection);
	}
}

const uf = new UnionFind(10);
uf.union(5, 3);
//  [ 0, 1, 2, 3, 4, 3, 6, 7, 8, 9  ]
uf.union(3, 0)
// [ 0, 1, 2, 0, 4, 0, 6, 7, 8, 9 ]
uf.print()