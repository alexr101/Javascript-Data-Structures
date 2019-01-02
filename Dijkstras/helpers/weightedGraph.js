class WeightedGraph {
    constructor(){
        this.list = {};
    }

    addNode(n) {
        if(this.list[n]) return;
        else this.list[n] = [];
    }

    addDirectionalEdge(n1, n2, weight) {
        if(!this.list[n1] || !this.list[n2]) return;

        const edge = {
            node: n2,
            weight: weight
        }
        this.list[n1].push(edge);
    }

    getChildren(n) {
        return this.list[n];
    }
}

// // test the weighted graph
// const weightedGraph = new WeightedGraph();
// weightedGraph.addNode('A');
// weightedGraph.addNode('B');
// weightedGraph.addNode('C');
// weightedGraph.addNode('D');
// weightedGraph.addNode('E');
// weightedGraph.addNode('F');
// weightedGraph.addNode('G');
// weightedGraph.addNode('H');

// weightedGraph.addDirectionalEdge('A', 'B', 5);
// weightedGraph.addDirectionalEdge('A', 'C', 12);
// weightedGraph.addDirectionalEdge('C', 'A', 2);
// weightedGraph.addDirectionalEdge('D', 'G', 6);
// weightedGraph.addDirectionalEdge('C', 'E', 1);
// weightedGraph.addDirectionalEdge('E', 'B', 2);
// weightedGraph.addDirectionalEdge('E', 'H', 1);
// weightedGraph.addDirectionalEdge('F', 'G', 3);
// weightedGraph.addDirectionalEdge('A', 'G', 6);
// weightedGraph.addDirectionalEdge('G', 'B', 3);
// weightedGraph.addDirectionalEdge('B', 'D', 1);
// console.log(weightedGraph);

module.exports = WeightedGraph;
