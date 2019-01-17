/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if(!root) return null;

    if(root.val < L || root.val > R) {
        if(root.val < L)
            return trimBST(root.right, L, R);
        else
            return trimBST(root.left, L, R);
    } else {
        if(root.left) root.left = trimBST(root.left, L, R);
        if(root.right) root.right = trimBST(root.right, L, R);
    }
    
    return root;
};

/*

1-1

if(!root) return;

if(root.val < L || root.val > R) {
    if(root.val < L)
        root = root.right
    else
        root = root.left
        
    trimBST(root, L, R)
} else {
    if(root.left) trimBST(root.left, L, R);
    if(root.right) trimBST(root.right, L, R)
}

        *3
        
    *1       *4

        *2



*/