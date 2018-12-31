class ListNode {
    constructor(val){
        this.val = val;
        this.next;
    }

    add(val){
        if(!this.val) return;

        let current = this;
        while(current.next) {
            current = current.next;
        }
        current.next = new ListNode(val);
    }
}

// Runtime O(n logn)
// Space O(n)
 var mergeKLists = function(lists) {
    if(!lists.length) return [];
    
    let combinedArr = [];
    
    for(let i = 0; i < lists.length; i++) {
        const ll = lists[i];
        let current = ll;
        while(current) {
            combinedArr.push(current.val);
            current = current.next;
        }
    }
    combinedArr.sort( (a, b) =>  a - b)
    
    let sortedList = new ListNode(combinedArr[0])
    let current = sortedList;

    
    for(let i = 1; i < combinedArr.length; i++) {
        current.next = new ListNode(combinedArr[i]);
        current = current.next
    }
    
    return sortedList
};

// Compare the head of all linked lists
// Keep an array of currents
// keep min current
const mergeKLists2 = (lists) => {
    let heads = [];
    // k runtime
    for(let i = 0; i < lists.length; i++) {
        heads.push(lists[i]);
    }

    // 
    let newList = new ListNode();
    let current = newList;
    let listCount = lists.length;
    
    while(listCount) {
        let min = Number.MAX_SAFE_INTEGER;
        let minHeadIndex = Number.MAX_SAFE_INTEGER;
        
        // (k/k)n / (k-1/k)n / (k-2/k)n
        for(let i = 0; i < heads.length; i++) {
            if(heads[i] && heads[i].val < min) {
                minHeadIndex = i;
                min = heads[i].val;
            }
        }
        heads[minHeadIndex] = heads[minHeadIndex].next;
        if(!heads[minHeadIndex]) listCount--;

        if(!current.val) current.val = min
        else {
            current.next = new ListNode(min);
            current = current.next;
        }
     }
     return newList;
}

const l1 = new ListNode(1);
l1.add(2)
l1.add(3)
l1.add(4)
l1.add(99)

const l2 = new ListNode(8);
l2.add(9)
l2.add(10)
l2.add(11)
l2.add(1200)

const l3 = new ListNode(15);
l3.add(17)
l3.add(199)
l3.add(200)
l3.add(201)

const result = mergeKLists2([l1, l2, l3])
console.log(result);