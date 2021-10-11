
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

const randomNum = Math.random() * 99;
const precised = Math.floor(randomNum);

        phoneBook.add(precised, "fuad");
        phoneBook.add(precised, "hasan");
        phoneBook.add(precised, "fahad");

        console.log(phoneBook);