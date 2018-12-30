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
const mergeKLists2 = (lists) => {

}

const l1 = new ListNode(5);
l1.add(4)
l1.add(2)
l1.add(12)
l1.add(1)

const l2 = new ListNode(15);
l2.add(41)
l2.add(22)
l2.add(112)
l2.add(31)

const l3 = new ListNode(95);
l3.add(13)
l3.add(51)
l3.add(12)
l3.add(8)

const result = mergeKLists([])
console.log(result);