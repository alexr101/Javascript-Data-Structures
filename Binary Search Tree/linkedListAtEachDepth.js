// Cracking the coding interview 4.3 p189
class LinkedList{
    constructor(){

    }
}

class BST{
    constructor(val) {
        this.val = val;
        this.right;
        this.left;
    }

    add(val) {
        if(val > this.val) 
            if(!this.right) this.right = new BST(val);
            else this.right.add(val);
        if(val < this.val) 
            if(!this.left) this.left = new BST(val);
            else this.left.add(val);

    }

    depthList() {
        const leftH = (this.left) 
            ? this.left.depthList() + 1
            : 0;
        const rightH = (this.right) 
            ? this.right.depthList() + 1
            : 0;

        return Math.max(leftH, rightH)
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

// console.log(bst);
console.log(bst.depthList())
