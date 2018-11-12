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

  depthFirsttraverse(node) {
    console.log('Depth First Traverse', node);
    if(!this.graph[node]) return console.log('node does not exist');

    let visited = [];
    let stack = [];
    stack.push(node);
    while(stack.length) {
      const currentNode = stack.pop();
      if(visited[currentNode]) continue;
      console.log(currentNode);
      visited[currentNode] = true;

      if(!this.graph[currentNode]) continue;
      for(var i = 0; i < this.graph[currentNode].length; i++) {
        const child = this.graph[currentNode][i];
        stack.push(child);
      }
    }


  }

  // [1, 2]
  // [1]
  // 0, 2, 3, 1 

  

  breadthFirstTraverse(node) {
    console.log('Breadth First Traverse', node);
    if(!this.graph[node]) return console.log('node does not exist');

    let visited = [];
    let queue = [];
    queue.push(node);

    while(queue.length) {
      const currentNode = queue.shift();
      if(visited[currentNode]) continue; // already visited
      console.log(currentNode);
      visited[currentNode] = true;

      if(!this.graph[currentNode]) continue; // no children
      for(var i = 0; i < this.graph[currentNode].length; i++) {
        const child = this.graph[currentNode][i];
        queue.push(child);
      }


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
graph.addEdge(4, 6);
graph.addEdge(5, 1000);
graph.addEdge(6, 9);
graph.addEdge(9, 12);
// graph.addEdge(5, 4);

graph.printAll();
graph.breadthFirstTraverse(1);
graph.depthFirsttraverse(1);

