
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }

        current.next = newNode;
    }
}

const head = new Node(1400);
const humanChain = new LinkedList(head);
    humanChain.add(300);
console.log(humanChain);