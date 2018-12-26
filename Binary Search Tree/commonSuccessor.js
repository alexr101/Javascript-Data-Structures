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

    findCommonSuccessor(bst, v1, v2) {
        const min = Math.min(v1, v2);
        const max = Math.max(v1, v2);

        const minNode = this.depthFirstSearch(bst, min);

        let parent = minNode.parent;
        let searching = true;
        
        while(searching) {
            if(max < parent.val)
                searching = false;
            else 
                const hasParent = parent.parent;
                const lessThanMax = max > parent.parent.val;
                const rightChildOfParent = parent.val !== parent.parent.right.val;
                const isMaxNode = max === parent.val;

                if(hasParent && lessThanMax && rightChildOfParent )
                    parent = parent.parent;
                else if(hasParent && isMaxNode)
                    parent = parent.parent
                else 
                    searching = false;
        }

        return parent;
    }

    depthFirstSearch(bst, val) {
        if(val === bst.val) return bst;
        else if(val > bst.val) return this.depthFirstSearch(bst.right, val);
        else if(val < bst.val) return this.depthFirstSearch(bst.left, val);
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

const commonParent = bst.findCommonSuccessor(bst, 1, 9);
console.log(bst);
console.log(commonParent.val);
