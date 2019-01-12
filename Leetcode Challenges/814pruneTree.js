/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    _pruneTree(root)
    return root;
};

var _pruneTree = function(root) {
    let rightValid;
    let leftValid;
    
    if(root.right) rightValid = _pruneTree(root.right);
    if(!rightValid) root.right = null;

    if(root.left) leftValid = _pruneTree(root.left);
    if(!leftValid) root.left = null;
    
    if(root.val || rightValid || leftValid) return true;
    return false
}

/*
MENTAL MODEL

return true if root or right or left is valid. 
else return false
if right or left is invalid prune.
    
    
    if(root.right)
        rightValid = pruneTree(root.right);
    if(root.left)
        leftValid = pruneTree(root.left);
        
    if(!rightValid)
        root.right = null;
    if(!leftValid)
        root.left = null;
        
    if(root.val || rightValid || leftValid) return true;
    return false

*/