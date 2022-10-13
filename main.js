let weather = {
    apiKey : "6e6496f81b9587201554ab2f7a195d9d",
    fetchWeather: function(city) {
        fetch
        ("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid="
        + this.apiKey)
        .then(response=> response.json())
        .then(data=>this.displayWeather(data))
    },
    displayWeather : function(data){
        let { name } = data
        let {icon ,description}=data.weather[0]
        let {temp,humidity}= data.main
        let { speed }= data.wind
        document.querySelector(".city").innerText=" Weather in "+ name;
        document.querySelector(".temp").innerText=temp+"°C"
        document.querySelector(".weather-icon").src="http://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerText= description;
        document.querySelector(".humidity").innerText= "Humidity: "+ humidity + "%";
        document.querySelector(".wind").innerText="WInd speed: "+ speed + " km/h";
        let URL = "https://source.unsplash.com/1600x900/?"+ name
        document.querySelector("body").style.background = "url('"+ URL +"')";
        document.querySelector(".weather").classList.remove("loading");
    },
    search : function(){
        let val= document.querySelector(".search-bar").value ;
        this.fetchWeather(val);
    } 
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(e){
    if(e.key=="Enter"){
         weather.search();
    }
})
weather.fetchWeather("London");
