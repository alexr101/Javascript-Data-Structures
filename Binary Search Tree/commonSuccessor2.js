class BST {
    constructor(val){
        this.val = val;
        this.left;
        this.right;
    }

    add(val){
        if(!this.val) this.val = val;

        if(val > this.val) {
            if(!this.val.right) this.val.right = new BST(val);
            else this.right.add(val);
        } else {
            if(!this.val.left) this.val.left = new BST(val);
            else this.left.add(val);
        }
    }
    leastCommonAncestor(node1, node2){
        let result = [null, null];

        if(this.left) {
            result[0] = this.left.leastCommonAncestor(node1, node2)
        } 

        if(this.right) {
            result[1] = this.right.leastCommonAncestor(node1, node2);
        }

        if(node1.val === this.val || node2.val === this.val)
            if(result[1]) result[0] = this.val;
            else result[1] = this.val;

// (2, 1)
//              10 [1, null]
//      1 [2, 1]
// 2 [2, null]   5 [null, null]

        if(result[0] && result[1])
            return this.val
        else if(result[0])
            return result[0]
        else if(result[1])
            return result[1]

    }
}

let bst = new BST(14)
bst.add(10)
bst.add(5)
bst.add(13)
bst.add(12)
bst.add(11)
bst.add(1)
bst.add(3)