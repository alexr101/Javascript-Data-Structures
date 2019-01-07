class BST {
    constructor(val, parent){
        this.val = val;
        this.left;
        this.right;
        this.parent = parent;
    }

    add(val){     
        if(!this.val) {
            this.val = val;
        } else if(val < this.val) {
            if(!this.left) this.left = new BST(val, this);
            else this.left.add(val);
        } else {
            if(!this.right) this.right = new BST(val, this);
            else this.right.add(val);
        }
    }

    rotateRight() {
        const tempParent = this.parent;
        const tempLeft = this.left;
        const tempLeftRight = this.left.right;
        
        // move this.left to top
        this.left.right = this;
        this.parent = this.left;

        // move this.left.right to this.left
        this.left = tempLeftRight;
        tempLeftRight.parent = this;

        if(tempParent) {
            if(tempParent.val.right === this.val) {
                tempParent.right = tempLeft;
            } else {
                tempParent.left = tempLeft;
            }

            tempLeft.parent = tempParent;
            console.log(tempLeft)
        }

        // return oldLeft to assign as new root (BST)
        return tempLeft;
    }
}

let bst = new BST()

bst.add(50);
bst.add(10);
bst.add(20);
bst.add(5);
bst.add(6);
bst.add(60);
// console.log(bst);

bst.left = bst.left.rotateRight();
console.log(bst);
