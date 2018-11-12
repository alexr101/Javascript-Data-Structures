class Graph{
  constructor(){
    this.graph = [];
  }

  addEdge(i, j) {
    if(!this.graph[i]) this.graph[i] = [];
    this.graph[i].push(j);
  }

  // print all vertices, even if disconnected. ie graph = [1, 2], [100, 101]
  printAll() {
    let visited = [];

    this.graph.forEach( (list, i) => {
      if(visited[i]) return;
      console.log(`vertex: ${i}. Connected to:`);
      list.forEach((node) => {
        console.log(node);
      })
      visited[i] = true;
    })
  }  

  traverse(node) {
    console.log('traverse', node);
    if(!this.graph[node]) return console.log('node does not exist');

    let visited = [];
    let queue = [];
    queue.push(node);

    while(queue.length) {
      const currentNode = queue.shift();
      
      if(visited[currentNode]) continue; // already visited
      if(!this.graph[currentNode]) continue; // no children

      for(var i = 0; i < this.graph[currentNode].length; i++) {
        const child = this.graph[currentNode][i];
        console.log(child);
        queue.push(child);
      }

      visited[currentNode] = true;
    }
  }

}

let graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 5);
graph.addEdge(1, 4);
graph.addEdge(4, 3);
graph.addEdge(4, 1);
// graph.addEdge(5, 4);

graph.printAll();
graph.traverse(1);

