const API_KEY = "a19e83f0166783d213dbabb84ed2dc69";
//#8.1 Weather API
function onGeoOk(position){
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log("You live in",lat,long);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                if (data.weather[0].main == "Clear"){
                        weather.innerText = "☀" // ⛈⛅☁🌩🌨🌥🌦🌞
                }else{
                        weather.innerText = `${data.weather[0].main}`;
                }
                
                city.innerText = `${data.name}`;
        });
}
function onGeoError(){
        alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);