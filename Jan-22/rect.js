import Shape from './shape.js';

//Base Class / Parent Class
class Rectangle extends Shape {
    constructor(width, height, temp) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    whoAmI() {
        console.log("I am a rectangle");
        //1000 different lines of some logic.
    }
}

export default Rectangle;