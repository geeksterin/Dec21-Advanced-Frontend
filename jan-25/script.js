
//------------------------start of async await----------------------------

// const key ='PWYSk64OkgCrXYKfw5fWdg1UDs6Cnt7QQdrvfKws7mg'
// const url =`https://api.unsplash.com/photos/?client_id=${key}`

// const ctn=document.querySelector('.ctn')



// async function getPhotos(){
//    try{
//         const response = await fetch(url);
//         console.log(response)
//         const data =await response.json()
//         console.log(data)
//         const img = document.createElement('img')
//         img.setAttribute('src',data[2].urls.regular)
//         ctn.append(img)
//         console.log(img)
//    }catch(error){
//        console.log(error)
//    }
// }

// getPhotos()

// window.innerHeight + window.scrollY >=document.body.offsetHeight


//-----------------end of async await--------------------------------
// call(), apply(), bind()



// const test_obj ={
//     printInfo: function(food,times){
//         console.log(`${this.name} eat ${food} ${times} times a day`)
        
//     }
// }
// const rabbit1 ={
//     name:"pablo",
//     age:"9 months",
// }


// const rabbit2={
//     name:"escobar",
//     age:"6 months"
// }


// test_obj.printInfo.call(rabbit1,"cauiflower","2")
// test_obj.printInfo.apply(rabbit1,["cauiflower","2"])


const testingBind ={
    x:42,
    printX:function(name,x){
        // console.log(x)
        // console.log(name)
        return this.x
    }
}
console.log(testingBind.printX())
const result =testingBind.printX.bind(testingBind,"sudhanshu kumar","rahul")
console.log(result())



// const displayInfo = (name,batch="ADV FE DEC",placemenetStatus)=>{
//     placemenetStatus = placemenetStatus || "placed"
//     const info ={
//         name,
//         batch,
//         placemenetStatus
//     }
//     console.log(info)
// }

// displayInfo("sudhanshu")
// displayInfo("shatakshi","Jan FE","pending")