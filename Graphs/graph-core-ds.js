class Graph {
  constructor(edges = []){
    this.edges = {};
    this.vertices = [];

    // build vertices from our adjacency list
    for(let vertex in edges) {
      this.vertices.push(vertex);
      const children = edges[vertex];
      this.addDirectedEdge(vertex, children);
    }
  }

  // Todo use same objects for edges
  addUndirectedEdge(vertex1, vertex2) {
    if(!this.edges[vertex1]) this.edges[vertex1] = [];
    this.edges[vertex1].push(vertex2); 
    if(!this.edges[vertex2]) this.edges[vertex2] = [];
    this.edges[vertex2].push(vertex1); 
  }

  addDirectedEdge(vertex, children = []) {
    if(!this.edges[vertex]) this.edges[vertex] = [];
    children.forEach((child) => {
      this.edges[vertex].push(child);
    })
  }


}
// using this instead of nested arrays makes it
// easier for us to insert an initial adjacency list
let graph = new Graph({ 
  0: [1, 2, 3] 
})
graph.addUndirectedEdge(1, 2)
graph.addDirectedEdge(100, [200])

console.log(graph)
