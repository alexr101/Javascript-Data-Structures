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
        this.balance(this.heap.length-1);
    }

    balance(index) {
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

}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(100);
maxHeap.insert(200);
maxHeap.insert(20);
console.log(maxHeap);
