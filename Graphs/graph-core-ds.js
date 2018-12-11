// Adjacency list Graph
class Graph {
  constructor(edges = []){
    this.edges = [];
    this.vertices = [];

    // build vertices from our adjacency list
    edges.forEach((key) => {
      this.vertices.push(key);
    })
  }
}

// using objects instead of nested arrays (where index is the vertex) makes it
// easier for us to insert an initial adjacency list. Otherwise we'd have to fill up a matric with null values for 
// non-existent or isolated vertices.
let graph = new Graph([
  { 0: [1, 2, 3] } 
])

console.log(graph)
