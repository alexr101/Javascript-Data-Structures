class Graph {
    constructor(){
        this.adjacencyMatrix = [];
        this.matrixSize = 0;
    }

    add(nodeIndex) {
        if(this.adjacencyMatrix[nodeIndex]) return

        this.adjacencyMatrix[nodeIndex] = [];
        this.matrixSize++;

        for(let i = 0; i < this.matrixSize; i++) {
            // fill the new row
            this.adjacencyMatrix[nodeIndex][i] = 0;
            // fill the new col on every row
            if(i === this.matrixSize-1) {
                this.adjacencyMatrix.forEach((r) => {
                    r[i] = 0;
                })
            }
        }
    }

    addDirectedEdge(n1, n2) {
        if(n1 === n2) return;
        this.adjacencyMatrix[n1][n2] = 1;
    }

    removeDirectedEdge(n1, n2) {
        if(n1 === n2) return;
        this.adjacencyMatrix[n1][n2] = 0;
    }
}

const graph = new Graph();
graph.add(0)
graph.add(1)
graph.add(2)
graph.add(3)
graph.add(4)
graph.addDirectedEdge(0, 1)
graph.addDirectedEdge(0, 2)
graph.addDirectedEdge(0, 3)
graph.addDirectedEdge(1, 4)
graph.addDirectedEdge(1, 2)
graph.addDirectedEdge(3, 4)
graph.addDirectedEdge(1, 4)
graph.addDirectedEdge(2, 1)
graph.addDirectedEdge(3, 1)
graph.addDirectedEdge(4, 2)
console.log(graph);


