import Shape from './shape.js';

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    whoAmI() {
        console.log("I am a circle");
    }
}

export default Circle;