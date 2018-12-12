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

  depthFirstTraversal(vertex) {
    this._depthFirstTraversal(vertex, []);
  }

  _depthFirstTraversal(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    if(!this.edges[vertex]) return;

    this.edges[vertex].forEach((child) => {
      if(!visited[child])
        this._depthFirstTraversal(child, visited);
    })
  }

  breadthFirstTraversal(vertex) {
    let queue = [vertex];
    let visited = [];
    while(queue.length) {
      const current = queue.shift();
      const children = this.edges[current];

      if(visited[current]) continue;
      visited[current] = true;
      console.log(current);

      if(!children) continue;

      children.forEach((child) => {
        if(!visited[child]) 
          queue.push(child);
      })
    }
  }


}
// using this instead of nested arrays makes it
// easier for us to insert an initial adjacency list
let graph = new Graph({ 
  0: [1, 2, 3] 
})
graph.addUndirectedEdge(1, 2)
graph.addDirectedEdge(100, [200])
graph.addDirectedEdge(3, [100])
console.log('\nDFS');
graph.depthFirstTraversal(0);
console.log('\nBFS');

graph.breadthFirstTraversal(0);

console.log(graph)

queue = [1, 2, 3, 2]