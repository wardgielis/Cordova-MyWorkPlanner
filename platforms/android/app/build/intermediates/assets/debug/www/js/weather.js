$(document).ready(function() {
  // geolocation enabled
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showcityname);

    function showcityname(position) {
      var lat = position.coords.latitude;
      var longit = position.coords.longitude;
      var altitude = position.coords.altitude;
      var latitude_text = document.getElementById("latitude-val");
      var altitude_text = document.getElementById("altit");
      var city_name;
      var temp;
      var pressure;
      var wind_speed;
      var country_name;
      var weather_description;
      var icon;
      var apiKey = "47f5509d304ae752dcbfa70043775fe9";

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey, function(data) {

        city_name = data["name"];
        country_name = data["sys"]["country"];
        weather_description = data["weather"][0]["description"];
        temp = data["main"]["temp"];
        humidity = data["main"]["humidity"];
        wind_speed = data["wind"]["speed"];

        var gradenCelcius = Math.round(temp - 273.15);


        $(".preloader-wrapper").hide();
        $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description);
        $(".temp").html("<i class=" + "\"fas fa-thermometer-half\"" + "></i> " + gradenCelcius + " °C");
        $(".humidity").html("<i class=" + "\"fas fa-tint\"" + "></i> " + humidity + " %");
        $(".wind-spd").html("<i class=" + "\"fas fa-thermometer-half\"" + "></i> " + wind_speed + " m/s");

      })

    }

  }

})
