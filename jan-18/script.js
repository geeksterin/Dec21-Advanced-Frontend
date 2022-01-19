const list_ctn = document.querySelector('.list-ctn')
const list = document.querySelector('.list')
const title_text = document.querySelector('.title-text')
const duration_text = document.querySelector('.duration-text')



const form = document.querySelector('.form')
const option = document.querySelector('.options')
const duration = document.querySelector('.duration')
const submit_btn = document.querySelector('.submit')
// console.log(option,duration)
// console.log(form)
var map;
var mapEvent;
let log_data=[]
if(localStorage.getItem('data')){
    log_data= JSON.parse(localStorage.getItem('data')) 
}

const populateList=()=>{
    log_data.forEach(item=>{
        const list_ = document.createElement('div')
        list_.classList.add('list')

        const title = document.createElement('h2')
        title.classList.add('title-text')
        title.innerText=item.title

        const duration = document.createElement('h2')
        duration.classList.add('duration-text')
        duration.innerText=item.time

        list_.append(title,duration)
        list_ctn.append(list_)
        console.log(list_,title,duration)

    })
}



const formHandler =(event)=>{
    event.preventDefault()
    const title = option.value;
    const time = duration.value;
    const data ={
        title:title,
        time:time
    }
    form.classList.add('hidden')
    log_data.push(data)
    localStorage.setItem('data',JSON.stringify(log_data))
    console.log(log_data)
    

}


submit_btn.addEventListener('click',formHandler)

navigator.geolocation.getCurrentPosition(onSuccess,onError)

function onSuccess(event){
    
        // console.log(event)
    
        const coordinates =[event.coords.latitude,event.coords.longitude]
        map = L.map('map').setView(coordinates, 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        map.on('click',function (mapEvent){
            form.classList.remove('hidden')
            console.log(mapEvent)
            const currentLocation = [mapEvent.latlng.lat,mapEvent.latlng.lng]
            L.marker(currentLocation).addTo(map)
            .bindPopup(L.popup(
                {
                    maxWidth:300,
                    minWidth:200,
                    autoClose:false,
                    closeOnClick:false,
                    closeButton:false,
                }
    
            )).setPopupContent("working fine")
            .openPopup();
            console.log(currentLocation)
        })
    
    
    
       
    
    }




function onError(){
    alert("can't fetch the location")
}
// console.log(name)


populateList()