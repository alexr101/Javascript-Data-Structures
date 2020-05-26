class UnionFind {

	constructor(n){
		this.collection = [];
		for(let i = 0; i < n; i++) {
			this.collection[i] = i;
		} 
	}

	connected(p, q) {
		return this.collection[p] === this.collection[q];
	}

	union(p, q) {
		const pId = this.collection[p];
		const qId = this.collection[q];
		for(let i = 0; i < this.collection.length; i++) {
			if(this.collection[i] === pId) 
				this.collection[i] = qId
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