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
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    
    if(root.val >= L && root.val <= R) 
        sum += root.val
    if(root.left)
        sum += rangeSumBST(root.left, L, R);
    if(root.right)
        sum += rangeSumBST(root.right, L, R);
    
    return sum
};