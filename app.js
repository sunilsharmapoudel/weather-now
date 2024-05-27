const express = require("express");
require('dotenv').config();
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");
const { dirname } = require("path");
const ejs = require("ejs");
const port = process.env.port;
const { IPinfoWrapper } = require("node-ipinfo");
const { get } = require("http");
const apiKey = process.env.weather_api;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     res.render("index",{
//         usercity: "userCity",
// userregion: "region",
// weatherMain:"main",
// imageUrl : "@4x.png",
// temp: "main.temp",
// desc: "description",
// mintemp: "temp_min",
// maxtemp: "temp_max",
// sunrise: "sunrise",
// sunset: "sunset",
// longi: "lon",
// lati: "lat",
// press: "main.pressure",
// humi: "main.humidity",
// day:"day",
//     })
                            
// } )

app.get('/', async (req, res) => {
    const request = await fetch(`https://ipinfo.io/json?token=${process.env.ip_token}`)
    const jsonResponse = await request.json()
    let region = jsonResponse.region;
    const userCity = req.query.city || jsonResponse.city;
    const day = new Date().toDateString();
    var apiKey = process.env.weather_api;
    var units = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+userCity+"&appid="+apiKey+"&units="+units+""  
     https.get(url, function(response) {
            console.log(response.statusCode);
            response.on('data', function(data) {
                var  weatherData = JSON.parse(data);
                const icon =  weatherData.weather[0].icon; 
                console.log( )
                res.render("index",
                    {
                        usercity: userCity,
                        userregion: region,
                        weatherMain: weatherData.weather[0].main,
                        imageUrl : "https://openweathermap.org/img/wn/"+ icon + "@4x.png",
                        temp:  weatherData.main.temp,
                        desc: weatherData.weather[0].description,
                        mintemp: weatherData.main.temp_min,
                        maxtemp: weatherData.main.temp_max,
                        sunrise: weatherData.sys.sunrise,
                        sunset: weatherData.sys.sunset,
                        longi: weatherData.coord.lon,
                        lati: weatherData.coord.lat,
                        press: weatherData.main.pressure,
                        humi: weatherData.main.humidity,
                        day:day,
                    }
                )

                
            })
        })
 
    })

 app.post("/", (req, res) => {
      var userCity = req.body.usercity;
        res.redirect(`/?city=${userCity}`)
    })



app.listen(port, function() {
    console.log("server is running on "+ port )
})