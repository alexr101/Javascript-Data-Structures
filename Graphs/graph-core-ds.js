class Graph {
  constructor(edges = []){
    this.edges = [];
    this.vertices = [];

    // build vertices from our adjacency list
    edges.forEach((key) => {
      this.vertices.push(key);
    })
  }

  // Todo use same objects for edges
  addBidirectionalEdge(vertex1, vertex2) {
    if(!this.edges[vertex1]) this.edges[vertex1] = [];
    this.edges[vertex1].push(vertex2); 
    if(!this.edges[vertex2]) this.edges[vertex2] = [];
    this.edges[vertex2].push(vertex1); 
  }

  addDirectionalEdge(vertex, children = []) {
    if(!this.edges[vertex]) this.edges[vertex] = [];
    children.forEach((child) => {
      this.edges[vertex].push(child);
    })
  }


}
// using this instead of nested arrays makes it
// easier for us to insert an initial adjacency list
let graph = new Graph([
  { 0: [1, 2, 3] } 
])
graph.addBidirectionalEdge(1, 2)
graph.addDirectionalEdge(100, [200])

console.log(graph)
