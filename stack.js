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

const listItem = new Stack();
    listItem.add("Hasan");
    listItem.add("Hasan1");
    listItem.add("Hasan2");
console.log(listItem);

const removeItem = listItem.remove();
console.log(removeItem);
console.log(listItem);