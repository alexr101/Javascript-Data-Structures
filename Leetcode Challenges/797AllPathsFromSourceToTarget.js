/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    return DFS(graph, 0)
};

const DFS = function(g, n) {
    const paths = [];
    
    if(n === g.length-1) { 
        paths.push([n]);
        return paths;
    }
    
    g[n].forEach((child) => {
        subPaths = DFS(g, child);
        subPaths.forEach((subPath) =>{
            subPath.unshift(n);
            paths.push(subPath);
        })
    })
    return paths;
}

