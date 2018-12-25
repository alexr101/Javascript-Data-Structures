class BST {
    constructor(val){
        this.val = val;
        this.left;
        this.right;
        this.parent;
    }

    add(val) {
        if(val > this.val) {
            if(!this.right) {
                this.right = new BST(val);
                this.right.parent = this;
            } 
            else this.right.add(val);
        }
        if(val < this.val) {
            if(!this.left) { 
                this.left = new BST(val);
                this.left.parent = this;
            }
            else this.left.add(val);
        }
    }

    inOrderSuccesor(bst, val) {
        const foundNode = this.depthFirstSearch(bst, val);
        let current = foundNode;

        if(current.right) {
            current = current.right;
            while(current && current.left){
                current = current.left
            }
        } else if (current.parent) {
            while(current.parent) {
                if(current.parent && current.val === current.parent.left.val) break;
                current = current.parent;

            }
            current = current.parent;
            if(current.val < foundNode.val) current = null;
        }

        
        return current;
    }

    depthFirstSearch(bst, val) {
        if(val === bst.val) return bst;

        if(val > bst.val) 
            return this.depthFirstSearch(bst.right, val);
        else
            return this.depthFirstSearch(bst.left, val);
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
console.log(bst);

const inOrderSuccesor = bst.inOrderSuccesor(bst, 9);
console.log(inOrderSuccesor.val);
