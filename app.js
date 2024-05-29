const express = require("express");
require('dotenv').config();
const https = require("https");
const favicon = require('serve-favicon');
const bodyParser = require("body-parser");
const path = require('path');
const ejs = require("ejs");
const port = process.env.PORT || 3000;
const { IPinfoWrapper } = require("node-ipinfo");
const { get } = require("http");    

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use((req, res, next) => {
    req.clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    next();
});

app.get('/', async (req, res) => {
    const ip = req.clientIp;
    const request = await fetch(`https://ipinfo.io/${ip}/json?token=${process.env.ip_token}`)
    const jsonResponse = await request.json();
    const userCity = req.query.city || jsonResponse.city;
    const day = new Date().toDateString();
    var apiKey = process.env.weather_api;
    var units = "metric";
    const requestWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=${units}`)
    const weatherData = await requestWeather.json();

    try {
        const icon =  weatherData.weather[0].icon;
        res.render("index",
         {
            errmsg:null,
             usercity: userCity,
             ctry:weatherData.sys.country,
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

    }catch (err) {
            res.render('index', {
                errmsg:weatherData.message,
                usercity: null,
                ctry:null,
                weatherMain: null,
                imageUrl : null,
                temp:  null,
                desc: null,
                mintemp: null,
                maxtemp: null,
                sunrise: null,
                sunset: null,
                longi: null,
                lati: null,
                press: null,
                humi: null,
                day:day,
            });
          } 
    })

 app.post("/", (req, res) => {
      var userCity = req.body.usercity;
        res.redirect(`/?city=${userCity}`)
    })



app.listen(port, function() {
    console.log("server is running on "+ port )
})