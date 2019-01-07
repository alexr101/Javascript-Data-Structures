const MinHeap = require('./helpers/keyValueMinHeap');
const WeightedGraph = require('./helpers/weightedGraph');


function DijkstraShortestPath(rootN, destN, graph) {
    const shortestPaths = {}
    const nodeList = graph.getList();
    const visited = [rootN];
    const notVisited = nodeList.map( n => {
        if(n.node!==rootN) return n
    })
    let minHeap = new MinHeap();
    
    nodeList.forEach( n => {
        const value = (n === rootN) ? 0 : Infinity;
        minHeap.add(n, value)
    })

    let currentNode = minHeap.removeRoot();
    while(currentNode.key !== destN) {
        const children = graph.getChildren(currentNode.key);
        children.forEach((c) => {
            const childNode = c.node;
            const newWeight = graph.getWeight(currentNode.key, childNode);
            const currentWeight = minHeap.getValue(childNode);
            if(currentNode.value + newWeight < currentWeight) 
                minHeap.update(childNode, currentNode.value + newWeight);
        })
        shortestPaths[currentNode.key] = currentNode.value;
        currentNode = minHeap.removeRoot();
    }
    shortestPaths[currentNode.key] = currentNode.value;

    return shortestPaths;
}


const weightedGraph = new WeightedGraph();
weightedGraph.addNode('A');
weightedGraph.addNode('B');
weightedGraph.addNode('C');
weightedGraph.addNode('D');
weightedGraph.addNode('E');
weightedGraph.addNode('F');
weightedGraph.addNode('G');
weightedGraph.addNode('H');
weightedGraph.addDirectionalEdge('A', 'B', 5);
weightedGraph.addDirectionalEdge('A', 'C', 12);
weightedGraph.addDirectionalEdge('A', 'H', 1);
weightedGraph.addDirectionalEdge('C', 'A', 2);
weightedGraph.addDirectionalEdge('D', 'G', 6);
weightedGraph.addDirectionalEdge('C', 'E', 1);
weightedGraph.addDirectionalEdge('E', 'B', 2);
weightedGraph.addDirectionalEdge('E', 'H', 1);
weightedGraph.addDirectionalEdge('F', 'G', 3);
weightedGraph.addDirectionalEdge('A', 'G', 6);
weightedGraph.addDirectionalEdge('G', 'B', 3);
weightedGraph.addDirectionalEdge('B', 'D', 1);
weightedGraph.addDirectionalEdge('H', 'F', 1);
weightedGraph.addDirectionalEdge('F', 'A', 5);
weightedGraph.addDirectionalEdge('D', 'C', 10);

const shortestPath = DijkstraShortestPath('H', 'C', weightedGraph);
console.log(shortestPath);





