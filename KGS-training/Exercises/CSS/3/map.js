function goFullScreen(){

    var elem = document.getElementById("mapholder");

    if(elem.requestFullscreen){
        elem.requestFullscreen();
    }
    else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }
    else if(elem.webkitRequestFullscreen){
        elem.webkitRequestFullscreen();
    }
    else if(elem.msRequestFullscreen){
        elem.msRequestFullscreen();
    }
}

async function showPosition(position) {
    let latitude = position.coords.latitude;
    let longtitude = position.coords.longitude;
    let latlon = {
        lat: latitude,
        lng: longtitude,
    }
    let mapholder = document.getElementById('mapholder');

    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at users location
    let map = new Map(mapholder, {
        zoom: 15,
        center: latlon,
        mapId: "DEMO_MAP_ID",
        fullscreenControl: false
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map: map,
        position: latlon,
        title: "You are here!",
    });
}

navigator.geolocation.getCurrentPosition(showPosition);