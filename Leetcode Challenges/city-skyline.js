/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    // build row & columns maximums map
    let rowMaxMap = {}
    let colMaxMap = {}
    for(let i = 0; i< grid.length; i++) {
        rowMaxMap[i] = 0;
        for(let j = 0; j < grid[i].length; j++) {
            if(!colMaxMap[j]) colMaxMap[j] = 0;
            rowMaxMap[i] = Math.max(grid[i][j], rowMaxMap[i]);
            colMaxMap[j] = Math.max(grid[i][j], colMaxMap[j]);
        }
    }
    
    // calculate the max increase
    let maxIncrease = 0;
    for(let i = 0; i< grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let n = grid[i][j]
            let max = Math.min(rowMaxMap[i], colMaxMap[j]);
            maxIncrease += max-n;
            grid[i][j] = max;
        }
    }
    
    return maxIncrease;
};