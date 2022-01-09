console.log('😀');

let f = fetch('http://localhost:5502/Jan-09/data.json');

console.log(f);

f.then((a) => {
    // console.log(a.json());
    return a.json(); //This will return a promise.
}).then((r) => {
    console.log(r);
    return new Promise((s, f) => { f(); })
}).then(() =>{
    console.log("New Promise success");
}).then(() => {
    console.log("AAAA");
}).catch((b) => {
    console.log(b);
    console.log("Promise Failed");
})

// fetch().then(() => {
    
// })

//Then chaining.
//Chaining because we are puttung 1 then after the other, like a chain.
//It is possible because we are returning a promise from inside a then. That way we can chain another then.