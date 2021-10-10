class Stack {
    constructor(){
        this.stack = [];
    }
    add(item){
        return this.stack.push(item);
    }

    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const itemList = new Stack();

itemList.add("Fuad");
itemList.add("Fahad");
itemList.add("Farhana");

console.log(itemList);

const removedItem = itemList.remove();
        console.log(removedItem);

    console.log(itemList);