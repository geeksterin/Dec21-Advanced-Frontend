class Square {
    #side = 0;
    static API_KEY = "SOMETHING";
    
    constructor(side) {
        this.#side = side;
    }

    getArea() {
        return Math.pow(this.#side, 2);
    }

    getPerimeter() {
        return this.#side * 4;
    }

    static whoAmI() {
        console.log("I am a square");
    }
}

Square.API_KEY = "SOMETHING ELSE OUTSIDE THE CLASS";
console.log(Square.API_KEY);

const sqr = new Square(5);
console.log(sqr.getArea());
console.log(sqr.getPerimeter());
console.log(Square);

// //Invoking a static method.
// Square.whoAmI();
// console.log(Square.API_KEY);