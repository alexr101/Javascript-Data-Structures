// Key value min heap
class MinHeap {
    constructor(){
        this.heap = [null];
    }

    add(key, value) {
        const node = { key: key, value: value };
        this.heap.push(node);
        
        this.balanceUpwards(this.heap.length-1);
    }

    removeRoot() {
        swap(this.heap, 1, this.heap.length-1);
        let min = this.heap.pop();
        this.balanceDownwards(1)
        return min;
    }

    balanceDownwards(index) {
        let i = index;
        let current = this.heap[i];
        let left = this.heap[Math.floor(i*2)];
        let right = this.heap[Math.floor(i*2)+1];

        while( (left && current.value > left.value) || (right && current.value > right.value) ){
            if(!right || ((left && right) && (left.value < right.value)) ) {
                swap(this.heap, i, Math.floor(i*2));
                i = Math.floor(i*2);
            } else if(!left || ((left && right) && (right.value < left.value)) ) {
                swap(this.heap, i, Math.floor(i*2)+1);
                i = Math.floor(i*2)+1;
            }
            current = this.heap[i];
            left = this.heap[Math.floor(i*2)];
            right = this.heap[Math.floor(i*2)+1];
        }
    }

    balanceUpwards(i){
        if(this.heap.length <= 2) return;

        let current = this.heap[i];
        let parent = this.heap[Math.floor( i/2 )];
        while(parent && current.value < parent.value) {
            swap(this.heap, i, Math.floor(i/2));
            current = parent;
            i = Math.floor(i/2);
            parent = this.heap[Math.floor( i/2 )];
        }
    }
}

function swap(a, i ,j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const minHeap = new MinHeap();
minHeap.add('A', 5);
minHeap.add('F', 1);
minHeap.add('Z', 7);
minHeap.add('G', 14);
minHeap.add('L', 2);
minHeap.add('I', 7);
console.log(minHeap);

minHeap.removeRoot()
// minHeap.removeRoot()
console.log(minHeap);

