const API_KEY = "a19e83f0166783d213dbabb84ed2dc69";
//#8.0 Geolocation
function onGeoOk(position){
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log("You live in",lat,long);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
        console.log(url);
}
function onGeoError(){
        alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);