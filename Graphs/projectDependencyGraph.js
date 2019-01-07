class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addUndirectedEdge(v1, v2) {
        this.addDirectedEdge(v1, v2)
        this.addDirectedEdge(v2, v1)
    }

    addDirectedEdge(v1, v2) {
        if(!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
        this.adjacencyList[v1].push(v2);
    }

    getChildren(v) {
        return this.adjacencyList[v];
    }
}

class Project {
    constructor(projects, dependencies) {
        this.projects = projects;
        this.dependencies = dependencies;
        this.dependencyOrder = [];
    }

    // help note on projectDependencyMap
    // {a:0} this project has 0 dependencies.
    // the way that we're building the graph...dependencies are parents.
    // so a project w 0 dependencies has 0 parents, therefore it is a root node...(assuming each graph has only one "root")
    getDependencyBuildOrder(){
        const graph = new Graph();
        const projectDependencyMap = {};
        // console.log(this);
        
        this.dependencies.forEach((dependencyPair) => {
            const project = dependencyPair[1];
            const dependency = dependencyPair[0];
            graph.addDirectedEdge(dependency, project);

            if(!projectDependencyMap[project]) projectDependencyMap[project] = 1;
            else projectDependencyMap[project]++;
        });
        console.log(projectDependencyMap);
        
        let q = [];
        this.projects.forEach((p) => {
            if(!projectDependencyMap[p])
                q.push(p);
        })

        let projectVisitedMap = {}
        this.dependencyOrder = [];
        while(q.length) {
            const currentProject = q.shift();
            if(projectVisitedMap[currentProject]) continue;
            
            const children = graph.getChildren(currentProject);
            if(children) children.forEach( c => q.push(c) );
            

            
            this.dependencyOrder.push(currentProject)
            projectVisitedMap[currentProject] = true;
        }
        return this.dependencyBuildOrder;
    }

}

const graph = new Graph();

const projects = ['a', 'b', 'c', 'd', 'e', 'f']
const  dependencies = [['a', 'd'], ['f','b'], ['b', 'd'], ['c','a'], ['d','c']];
const project = new Project(projects, dependencies);
const dependencyOrder = project.getDependencyBuildOrder()

console.log(project);

