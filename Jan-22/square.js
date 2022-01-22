//Child class
import Rectangle from "./rect.js";

class Square extends Rectangle {
    constructor(side) {
        super(side, side); //Super keyword will call the constructor os parent;
    }

    whoAmI() {
        console.log("I am a square");
        //Something completely different.
    }
}

export default Square;
