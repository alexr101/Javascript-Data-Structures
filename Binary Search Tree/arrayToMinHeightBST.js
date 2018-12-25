// Cracking the coding interview 4.2 p189

class BST {
    constructor(val){
        this.val = val;
        this.left;
        this.right;
    }
}

const arrayToBST = (a) => {
    if(!a) return null;
    if(!a.length) return new BST(a[0])

    const mid = Math.floor(a.length/2);
    const left = arrayToBST(a.slice(0, mid));
    const right = arrayToBST(a.slice(mid+1, a.length));

    const bst = new BST(a[mid]);
    bst.left = left;
    bst.right = right;

    return bst;
}

const bst = arrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(bst);


