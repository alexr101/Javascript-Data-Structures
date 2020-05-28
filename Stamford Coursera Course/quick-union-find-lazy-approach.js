// DS is an array
// Unions are represented by a tree parent relationship 
// If collection[i] !== i collection === parent
// break condition is collection[i] === i

/*

0 1 2 3
0 1 2 3

union(1, 2)
collection[2] = 1
0 1 3
	2

union(0, 1)
collection[1] = 0
0 3 4 5
1
2

union(3, 4)
union(3, 5)
collection[4] = 3
collection[5] = 3
0   3    6
1 4   5
2

union(5, 6)
collection[5] = 6
3  5
4  6

union(3, 5)
collection[3] = 5
	3
4   5
			6
			
connected(4, 6)


*/

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
	/*
		Implementation
			Find if root of p === root of q
			Store vars for both roots
			Find root of p
			Find root of q

			Compare
			
	*/
	connected(p, q) {
		console.log(this.findRoot(p) === this.findRoot(q));
		return this.findRoot(p) === this.findRoot(q);
	}

	findRoot(i) {
		while(this.collection[i] !== i) {
			i = this.collection[i];
		}
		return i;
	}

	// speed O(n)
	// space O(1)
	union(p, q) {
		this.collection[q] = p
	}

	print() {
		console.log(this.collection);
	}
}

const uf = new UnionFind(10);
uf.union(5, 3);
uf.union(3, 0)
uf.print()
uf.union(5, 4)
uf.print()

uf.connected(5, 2)
uf.connected(5, 3)
uf.connected(0, 3)
uf.connected(4, 0)
uf.connected(4, 3)
uf.connected(4, 5)
uf.connected(0, 5)