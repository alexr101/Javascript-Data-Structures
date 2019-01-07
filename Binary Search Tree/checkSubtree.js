class Node {
    constructor(val){
        this.val = val;
        this.right;
        this.left;
    }
}
class BST {
    constructor(val) {
        this.root = new Node(val);
    }

    add(root, val) {
        if(val > root.val) {
            if(!root.right) root.right = new Node(val);
            else this.add(root.right, val)
        } else if(val < root.val) {
            if(!root.left) root.left = new Node(val);
            else this.add(root.left, val);
        }
    }

    // O(n+n+n)
    checkSubtree(t1, t2) {
        const t1Height = this.height(t1);
        const t2Height = this.height(t2);
        const smallerHeight = Math.min(t1Height, t2Height);
        let smallerTree = (t1Height === smallerHeight) 
            ? t1
            : t2;
        let largerTree = (t1Height !== smallerHeight) 
            ? t1
            : t2;

        while(largerTree && smallerTree.val !== largerTree.val) {
            if(smallerTree.val > largerTree.val) 
                largerTree = largerTree.right
            else 
                largerTree = largerTree.left
        }

        // not subtree because root not found in other tree
        if(!largerTree) return false;
        
        let q1 = [smallerTree];
        let q2 = [largerTree];
        while(q1.length && q2.length) {
            let c1 = q1.shift();
            let c2 = q2.shift();
            if(c1.val !== c2.val) return false;

            if(c1.left) q1.push(c1.left)
            if(c1.right) q1.push(c1.right)
            if(c2.left) q2.push(c2.left)
            if(c2.right) q2.push(c2.right)
        }

        if(q1.length || q2.length) return false;

        return true;
    }

    height(t) {
        const leftH = (t.left) 
            ? this.height(t.left) + 1
            : 0
        const rightH = (t.right) 
            ? this.height(t.right) + 1
            : 0
        return Math.max(leftH, rightH);
    }

}

const bst = new BST(10);
bst.add(bst.root, 4)
bst.add(bst.root, 1)
bst.add(bst.root, 9)
bst.add(bst.root,15)
bst.add(bst.root,11)
bst.add(bst.root,19)
bst.add(bst.root,43)

const bst2 = new BST(4);
bst2.add(bst2.root, 1)
bst2.add(bst2.root, 9)

const bst3 = new BST(4);
bst3.add(bst3.root, 2)
bst3.add(bst3.root, 9)

const isSubtree = bst3.checkSubtree(bst.root, bst3.root);
console.log(isSubtree);


