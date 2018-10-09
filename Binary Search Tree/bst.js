class Node {
    constructor(val){
        this.val = val;
        this.left;
        this.right
    }
}

class BST {
    constructor(val){
        this.root = new Node(val)
    }

    add( val){        
        if(val < this.root.val) 
            if(!this.root.left) this.root.left = new BST(val);
            else this.root.left.add(val);
        else 
            if(!this.root.right) this.root.right = new BST(val);
            else this.root.right.add( val);
    }

    breadthFirstTraversal(){
        let queue = [this];

        while(queue.length) {
            let current = queue.shift();
            console.log(current.root.val);
            // console.log(current.root);
            
            if(current.root.left) {
                queue.push(current.root.left);
            }
            if(current.root.right) {
                queue.push(current.root.right);
            }
        }
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

// console.log(bst);

