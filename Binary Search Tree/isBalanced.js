class BST {
    constructor(val) {
        this.val = val;
        this.right;
        this.left;
    }

    add(val) {
        if(val > this.val) {
            if(!this.right) this.right = new BST(val);
            else this.right.add(val);
        } else if(val < this.val) {
            if(!this.left) this.left = new BST(val);
            else this.left.add(val);
        }
    }

    isBalanced() {
        console.log(this);
        
        const leftH = (this.left) 
            ? this.left.depth()
            : 0;
        const rightH = (this.right) 
            ? this.right.depth()
            : 0; 

        console.log(leftH);
        console.log(rightH);

        
            
        return Math.abs(leftH - rightH) <= 1;
    }

    depth() {
        const leftH = (this.left) 
            ? this.left.depth() + 1 
            : 0;
        const rightH = (this.right) 
            ? this.right.depth() + 1
            : 0;

        return Math.max(leftH, rightH);
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

const isBalanced = bst.isBalanced();
console.log(isBalanced);

