//Approach 2
//Constructor Approach. (Using functions)
function BookCons(title, author, release_date) {
    this.title = title;
    this.author = author;
    this.release_date = release_date;
}

BookCons.prototype.getSummary = function() {
    const summary = `The Book ${this.title} is written by ${this.author}`;
    return summary;
}

//Instantiation of the Book Object
const book2 = new BookCons("Ikigai", "Aayush Sinha", 2022);
console.log(book2);
console.log(book2.getSummary());