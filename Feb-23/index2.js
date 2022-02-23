const arrowfunobj = {
  number: 2,
  name: "vaishali",
  fn: function () {
    // console.log(this);
    setTimeout(() => {
      console.log(this);
    }, 0);
  },
};

arrowfunobj.fn();

const x = () => {
  console.log(this);
};

x();

// context of execution is a temp palce/space which is created when a function is running
// it has its own local memory and the function is run line by line
