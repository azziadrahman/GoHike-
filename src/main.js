function buttonClicked(){

    var city = document.getElementById("city_input").value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
      
        
          console.log(data); //output the API into console.
          console.log("Hiking Location : " + data.name);
          console.log("Temperature in Celsius: " + (data.main.temp - 273.15)); 
          console.log("Weather :" + data.weather[0].main);
          console.log("Weather Description :" + data.weather[0].description);
          console.log("Visibility :" + data.visibility);


          document.getElementById("demo").innerHTML="City: " + data.name + "<br/>Temperature in Celsius: " + (data.main.temp - 273.15) + "<br/>Humidity: " + data.main.humidity +  "<br/>Pressure: " + data.main.pressure + "<br/> Weather: " + data.weather[0].main + "<br/> Weather Condition: " + data.weather[0].description + "<br/> Visibility: " + data.visibility;
    } )
  
  }