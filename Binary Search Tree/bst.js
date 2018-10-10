class Node {
    constructor(val){
        this.val = val;
        this.left;
        this.right
    }
}

class BST {
    constructor(val){
        this.val = val;
        this.left;
        this.right
    }

    add( val){        
        if(val < this.val) 
            if(!this.left) this.left = new BST(val);
            else this.left.add(val);
        else 
            if(!this.right) this.right = new BST(val);
            else this.right.add( val);
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

/*
    5
1       7

*/
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
console.log(arr)
// console.log(bst);

