// 1) Parent node is always larger than its 2 children
// 2) Parent = n/2
// 3) Left child = n*2
// 4) Right child = (n*2) + 1
// If index 0 is not null...then remember to add 1 to n in all operations

const swap = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

class MaxHeap {
    constructor(){
        this.heap = [undefined];
    }

    insert(val){
        this.heap[this.heap.length] = val;
        this.balanceUpwards(this.heap.length-1);
    }

    balanceUpwards(index) {
        if(this.heap.length === 1) return;
        
        let parent = this.heap[ Math.floor(index/2) ];
        let child = this.heap[index];
        
        while(parent && parent < child) {
            swap(this.heap, index, Math.floor(index/2));
            index = Math.floor(index/2);
            parent = this.heap[ Math.floor(index/2) ];
            child = this.heap[index];
        }
    }

    balanceDownwards(index) {
        let current = this.heap[index];
        let leftChild = this.heap[index*2];
        let rightChild = this.heap[(index*2) + 1];
        let maxChild = Math.max(leftChild, rightChild);
        let childIndex;

        // edge case no right or left child
        if(!leftChild) maxChild = rightChild;
        if(!rightChild) maxChild = leftChild;
        
        // get the index of the maxChild
        if(maxChild === leftChild) childIndex = index*2;
        else if(maxChild === rightChild) childIndex = (index*2) + 1;
        
        if(maxChild > current) {
            swap(this.heap, index, childIndex);
            this.balanceDownwards(childIndex)
        }
    }

    deleteHead() {
        swap(this.heap, 1, this.heap.length-1);
        this.heap.pop();
        this.balanceDownwards(1);
    }

}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(100);
maxHeap.insert(200);
maxHeap.insert(20);
maxHeap.insert(50);
maxHeap.insert(120);
maxHeap.deleteHead();
maxHeap.deleteHead();
console.log(maxHeap);

// deleteHead leaves >
// 10
// 20 100

// 100
// 20 10

// deleteHead again leaves >
// 10
// 20