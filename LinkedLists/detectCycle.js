class LinkedNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }

    add(val) {
        if(!this.val) return this.val = val

        let current = this;
        while(current.next) {
            current = current.next;
        }
        current.next = new LinkedNode(val);
    }
    // special fn just to add the cycle in. Not real
    addCycle() {
        let cycleStart = this.next;
        let current = this;
        while(current.next) {
            current = current.next;
        }
        current.next = cycleStart;
    }

    detectCycle() {
        let slow = this;
        let fast = this;
        while(fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow.val === fast.val) return true;
        }
        return false;
    }
}

let ll = new LinkedNode(5);
ll.add(1)
ll.add(54)
ll.add(12)
ll.add(121)
ll.add(65)
ll.addCycle()
console.log(ll);
const  hasCycle = ll.detectCycle();
console.log(hasCycle);

