// -------------start os async discussion---------------------------

// const btn = document.querySelector('.btn')



// setTimeout(()=>{
//     console.log("waiting")
// },5000)


// console.log("hi")
// ------------------------------end of asyc concept----------------------



//----------------------start of AJAX-----------------------



// const request = new XMLHttpRequest()
// request.open('GET',"https://restcountries.com/v3.1/name/india")
// request.send()

// request.addEventListener('load',function(){
//     // console.log(this.responseText)

// })

// setTimeout(()=>{
//     console.log("this is the 1s second")
//     setTimeout(()=>{
//         console.log("this is the 2nd second")
//         setTimeout(()=>{
//             console.log("this is the 3s second")
//         },1000)
//     },1000)
// },5000)
// console.log(setTimeout(()=>{
//     console.log("hi")
// }),1000)
// -----------------end of AJAX discussion------------------------------



//---------------------start of promises discussion--------------------------


// let p = new Promise((resolved,rejected)=>{
//     const value=3
//     if(value==3){
//         resolved('success')
//     }else{
//         rejected('failure')
//     }
// })


// p.then((message)=>{
//     console.log(message)
// }).catch((message)=>{
//     console.log(message)
// })

// const data = fetch("https://restcountries.com/v3.1/name/india")
// console.log(data)

// data.then((response)=> {
//     return response.json()
// }).then((response) => {
//     console.log(response)
// })
// .catch((error)=> {
//     console.log(error)
// })


//  async , ajax , xmlHttpRequest , callback hell , promise , state of promise ,fetch, async await


async function doJob(){
    const data = await fetch("https://restcountries.com/v3.1/name/india")
    console.log(data)
    
}
doJob()
console.log("Hi")
