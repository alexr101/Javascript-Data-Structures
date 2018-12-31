class BST {
    constructor(val){
        this.val = val;
        this.right;
        this.left;
    }

    add(val) {
        if(val < this.val) {
            if(!this.left) this.left = new BST(val)
            else this.left.add(val)
        } else if(val > this.val) {
            if(!this.right) this.right = new BST(val)
            else this.right.add(val)
        }
    }

    checkBalanced() {
        const leftH = (this.left) 
            ? this.left.height() + 1
            : 0;
        const rightH = (this.right)  
            ? this.right.height() + 1
            : 0; 
        console.log(leftH)
        console.log(rightH)
        
        return Math.abs(leftH - rightH) <= 1;
        
    }

    height(){
        const leftH = (this.left) 
            ? this.left.height() + 1
            : 0;

        const rightH = (this.right)
            ? this.right.height() + 1
            : 0; 

        return Math.max(leftH, rightH);
    }
}

let bst = new BST(5)
bst.add(4)
// bst.add(6)
// bst.add(7)
bst.add(8)

console.log(bst.checkBalanced())