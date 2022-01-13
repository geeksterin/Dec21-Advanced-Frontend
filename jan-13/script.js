
navigator.geolocation.getCurrentPosition(function(event){
    console.log(event)

    const coordinates =[event.coords.latitude,event.coords.longitude]
    var map = L.map('map').setView(coordinates, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  


    map.on('click',function (mapEvent){
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


},function(){
    alert("could not get your location")
})


console.log(name)