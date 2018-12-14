// ADJACENCY LIST
// List based node class - No edges required

class Graph {
    constructor(){
        this.nodes = [];
    }

    addChildren(node, nodes){
        node.children = nodes
    }

    addChild(node) {
        node.children.push(node);
    }
}

class Node {
    constructor(value, children = []){
        this.value = value;
        this.children = children;
    }
}

const node1 = new Node(5)
const node2 = new Node(4)
const node2 = new Node(43)
const node2 = new Node(12)
const node2 = new Node(9)
const node2 = new Node(2)

const nodes = []
