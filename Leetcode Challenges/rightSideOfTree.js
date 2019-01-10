/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    let rightView = [];
    const q = [root];
    let levelChildMap = { 0: 1 }
    let depth = 0;
    
    while(q.length) {
        const c = q.shift();
        levelChildMap[depth]--;
        
        if(!levelChildMap[depth+1]) levelChildMap[depth+1] = 0;
        if(c && c.left) {
            q.push(c.left);
            levelChildMap[depth+1]++
        }
        if(c && c.right) {
            q.push(c.right);
            levelChildMap[depth+1]++
        } 

        if(!levelChildMap[depth]) { 
            rightView.push(c.val)
            depth++;                     
        }
    }
    return rightView;
};


/*

    MENTAL MODEL 2 (SUCCESS)
        BFS And get the rightmost node at every level
    
    MENTAL MODEL 1 (FAILED)
        Attempted a greedy approach. But what is left side is deeper

*/