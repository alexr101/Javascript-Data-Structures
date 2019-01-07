class BST {
    constructor(val, parent){
        this.val = val;
        this.left;
        this.right;
        this.parent = parent;
    }

    add(val){        
        if(val < this.val) 
            if(!this.left) this.left = new BST(val, this);
            else this.left.add(val);
        else 
            if(!this.right) this.right = new BST(val, this);
            else this.right.add(val);
    }

    getLeftMostNode() {
        if(this.left) {
            return this.left.getLeftMostNode();
        } else {
            return this.root;
        }
    }

    getRightMostNode() {
        if(this.right) {
            return this.right.getRightMostNode();
        } else {
            return this;
        }
    }



    remove(val) {

        if(val === this.val) {
            // 3 scenarios
            // 1 leaf node
            if(!this.left && !this.right) {
                // remove node
                return null;
            // 2 child
            } else if (!this.left || !this.right) {
                // parent.right or parent.left === existing child
                if(this.right) {
                    this.right.parent = this.parent;
                    return this.right
                } else {
                    this.left.parent = this.parent;
                    return this.left
                }
            // 3 two children
            } else if (this.left && this.right){
                // get smallest child of this.right
                nextSmallest = this.right.getLeftMostNode();
                
                // parent.right or parent.left === existing child operation ^
                if(nextSmallest.right) {
                    nextSmallest.parent.left = nextSmallest.right;
                    nextSmallest.right.parent = nextSmallest.parent;
                } else {
                    this.val = null;
                }

                this.val = nextSmallest.val;
                

                return this
            }

            return null
        }

        if(val < this.val && this.left) 
            this.left = this.left.remove(val);
        if(val > this.val && this.right)
            this.right = this.right.remove(val);

        return this
    }

    remove(root, val) {
        
    }

    breadthFirstTraversal(){
        let queue = [this];

        while(queue.length) {
            let current = queue.shift();
            console.log(current.val);
            // console.log(current);
            
            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
        }
    }

    convertToArr(){
        let arr = [];

        if(this.left) {
            arr = arr.concat( this.left.convertToArr() );
        }

        arr.push(this.val);

        if(this.right) {
            arr = arr.concat( this.right.convertToArr() );
        }
        return arr;
    }
}

var bst = new BST(5);
bst.add(2);
bst.add(3)
bst.add(7);
bst.add(6)
bst.add(9);
bst.add(10);
bst.add(12);

bst.breadthFirstTraversal();
let arr = bst.convertToArr();
console.log(arr);

bst.remove(10);
console.log(bst);

