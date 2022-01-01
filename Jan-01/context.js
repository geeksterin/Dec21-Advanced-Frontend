console.log('🎉');

const fn = function() {
    console.log(this);
}

const arrow_fn = _ => {
    console.log(this);
}

// fn();
// arrow_fn();


const obj = {
    key: "ABCD",
    fn: function() {
        console.log(this);
    },
    arrow_fn: _ => {
        console.log(this);
    }
}

// obj.fn();
// obj.arrow_fn();


const obj1 = {
    outerKey: "Outer Value",
    k1: {
        innerKey: "Inner Value",
        fn: function () {
            console.log(this);
        }
    }
}

// obj1.k1.fn();


const obj_timeout = {
    key: "ABCD",
    fn: function() {
        setTimeout(function() {
            console.log(this.key);
        }, 1000);
        setTimeout(_ => {
            console.log(this.key);
        }, 1000);
    },
}

// obj_timeout.fn();