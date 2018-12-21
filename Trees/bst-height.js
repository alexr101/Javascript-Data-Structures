class BST {
    constructor(val){
        this.val = val;
        this.right;
        this.left;
    }

    add(val) {
        if(val < this.val) {
            if(this.left) this.left.add(val);
            else this.left = new BST(val);
        }
        else if (val > this.val) {
            if(this.right) this.right.add(val);
            else this.right = new BST(val);
        }
    }

    getBranchCount() {
        if(this.left && this.right) return 2
        else if(this.right || this.left) return 1
        else return 0;
    } 

    // Runtime O(n)
    // Space (1)
    getHeight(){
        if(!this.val) return -1;
        
        const left = (this.left) ? this.left.getHeight() : -1; 
        const right = (this.right) ? this.right.getHeight() : -1;

        if(left > right) return left + 1
        else return right + 1
    }

    // BAD dont use BFS
    getHeightBad(){
        let queue = [this];
        let levelChildMap = { 0:1 }
        let currentLevel = 0;
        
        while(queue.length) {
            const curr = queue.shift();
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right)
            
            // tricky...make sure you add the children to currentLevel+1
            if(!levelChildMap[currentLevel+1]) 
                levelChildMap[currentLevel+1] = curr.getBranchCount();
            else 
                levelChildMap[currentLevel+1] += curr.getBranchCount();

            levelChildMap[currentLevel]--;
            if(levelChildMap[currentLevel] === 0 && queue.length) 
                currentLevel++;
        }
        
        return currentLevel;

    }
}

const bst = new BST(5);
bst.add(111);
bst.add(1);
// bst.add(4);
// bst.add(123)
// bst.add(223)

h = bst.getHeight()
console.log(h);
