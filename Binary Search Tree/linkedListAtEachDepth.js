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

    nodesAtDepth(bst, depth){
        let bsts = [];
        const q = [bst];
        let currentDepth = 0;
        let levelMap = {0:1}
        while(q.length) {
            const c = q.shift();

            if(c.left) {
                q.push(c.left);
                if(!levelMap[currentDepth+1]) levelMap[currentDepth+1] = 1;
                else levelMap[currentDepth+1] += 1
            }
            if(c.right) {
                q.push(c.right);
                if(!levelMap[currentDepth+1]) levelMap[currentDepth+1] = 1;
                else levelMap[currentDepth+1] += 1
            }

            levelMap[currentDepth]--;
            
            if(currentDepth === depth) bsts.push(c);
            if(levelMap[currentDepth] === 0) currentDepth++;
        }

        return bsts;

    }

    depth() {
        const leftH = (this.left) 
            ? this.left.depth() + 1
            : 0;
        const rightH = (this.right) 
            ? this.right.depth() + 1
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
const depth = bst.depth()
const bsts = bst.nodesAtDepth(bst, 0);
console.log(bsts);
