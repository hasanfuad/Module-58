class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(item) {
        return this.queue.push(item);
    }

    dequeue() {
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const itemList = new Queue();

    itemList.enqueue("fuad");
    itemList.enqueue("fahad");
    itemList.enqueue("hasan");

    console.log(itemList);

    const dequeueItem = itemList.dequeue();

    console.log(dequeueItem);
    console.log(itemList);