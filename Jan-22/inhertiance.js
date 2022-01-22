import Square from "./square.js";
import Rectangle from "./rect.js";
import Circle from "./circle.js";


const sqr1 = new Square(14);
console.log(sqr1.getArea());
sqr1.whoAmI();

const rect1 = new Rectangle(10, 15);
console.log(rect1.getArea());
rect1.whoAmI();

const circle1 = new Circle(5);
console.log(circle1.getArea());