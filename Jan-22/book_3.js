//Approach 3
//Class Approach. (ES6)
class Book {
    #API_KEY = "VERY VERY SECRET!";
    #counter = 0;


    //Getter -> Get the value from the private data member.
    getCounter() {
        return this.#counter;
    }

    //Setter -> Set the value of private data member.
    setCounter(val) {
        this.#counter = val;
    }

    incrementCounter() {
        this.#counter++;
    }

    constructor(title, author, release_date) {
        this.title = title;
        this.author = author;
        this.release_date = release_date;
    }

    getSumamry() {
        const summary = `The Book ${this.title} is written by ${this.author}`;
        return summary;
    }

    showSomeData() {
        console.log("Call the API key");
        return "API Response";
    }

    showApi() {
        let new_api = this.#API_KEY + "Something";
        return new_api;
    }

}
//Instantiation
const book3 = new Book("Harry Potter", "JK Rowling", 1993);
// console.log(book3);
// console.log(book3.getSumamry());
// console.log(book3.showSomeData());

// console.log(book3.#API_KEY);
// console.log(book3.showApi());
//Approach 3 is syntactical sugar of approach 2.


console.log(book3.getCounter());
console.log(book3.incrementCounter());
console.log(book3.getCounter());
console.log(book3);















//Class with NO CONSTRUCTOR!
class Empty {

}
const empty = new Empty();
console.log(empty);