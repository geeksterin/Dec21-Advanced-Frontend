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

// //Instantiation of the Book Object
// const book2 = new BookCons("Ikigai", "Aayush Sinha", 2022);
// console.log(book2);
// console.log(book2.getSummary());

function Magazine(title, author, release_date, issue_number) {
    BookCons.call(this, title, author, release_date);
    
    this.issue_number = issue_number;
}

Magazine.prototype = Object.create(BookCons.prototype);


Magazine.prototype.checkLatestIssue = function() {
    console.log("This is the latest one");
}

const mag1 = new Magazine("Magazine 1", "Someone", 2022, 14);
console.log(mag1);
mag1.checkLatestIssue();
book2.checkLatestIssue();