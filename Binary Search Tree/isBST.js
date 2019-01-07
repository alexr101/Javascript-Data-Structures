class BST {
    constructor(val){
        this.val = val;
        this.left;
        this.right;
    }

    add(val) {
        if(val < this.val) {
            if(!this.left) this.left = new BST(val);
            else this.left.add(val);
        } else if(val > this.val) {
            if(!this.right) this.right = new BST(val);
            else this.right.add(val);
        }
    }

    isBST() {
        return this._isBST(true)
    }

    _isBST(isBST) {
        if(this.left) {
            if(this.left.val > this.val) return false
            else if(this.left.val < this.val) isBST = this.left.isBST(isBST);
        }
        
        if(isBST && this.right) {
            if(this.right.val < this.val) return false
            else if(this.right.val > this.val) isBST = this.left.isBST(isBST);
        }

        return isBST;
    }
}

const bst = new BST(10);
bst.add(4)
bst.add(1)
bst.add(9)
bst.add(15)
bst.add(11)
bst.add(19)
bst.add(43)

const isBST = bst.isBST();
console.log(isBST);
