//Approach 1
//factory Approach.
const createBook = (title, author, release_date) => {
    const book = { 
        title, 
        author, 
        release_date,
        getSummary: function() {
            const summary = `The Book ${this.title} is written by ${this.author}`;
            return summary;
        },
    };
    return book;
}

const book1 = createBook("Fault in our stars", "John Doe", 2002);
console.log(book1);
console.log(book1.getSummary());


