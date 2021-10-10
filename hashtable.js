
class Dictionary {
    constructor(){
        this.dictionary = [];
    }

    add(key, value) {
        this.dictionary[key] = value;
    }

    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();

        phoneBook.add("Fuad", 01232322304);
        phoneBook.add("Fahad", 01232322304);
        phoneBook.add("Farhana", 012232304);

        console.log(phoneBook);

    const findNumber = phoneBook.get("Fahad");

            console.log(findNumber);