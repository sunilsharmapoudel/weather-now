# WeatherNow - Platform to get current weather information of yor city.
Get instant weather updates for any city with WeatherNow: EJS-powered project, leveraging OpenWeatherAPI and IPinfo.io for accurate data and location detection

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Overview
### Screenshots

Desktop Screenshot

![Desktop](/public/images/weathernow_desktop.webp)
Moile Screenshot

![Mobile](/public/images/weathernow_mob.webp)

### Links

- Live Site URL: [https://sunilsharmapoudel.github.io/dogmate/](https://sunilsharmapoudel.github.io/dogmate/)

### Built with

- Semantic HTML5 markup
- EJS
- CSS custom properties
- Express.js
- Node.js

### What I learned

## What I Learned

- **Backend Development**: Used Node.js and Express.js for server-side logic, routing, and middleware.
- **Frontend Templating**: Utilized EJS for generating dynamic HTML content.
- **API Integration**: Integrated OpenWeather API and IPinfo.io for weather data and user location.
- **Responsive Design**: Implemented responsive design with CSS for cross-device compatibility.
- **User Experience**: Handled user input, error messages, and personalized content based on geolocation.
- **Project Management**: Utilized Git for version control and collaborated effectively with teammates.

```html
    <div class="container">
        <div class="header">
            <div class="header-wrapper">
                <div class="brand">WeatherNow</div>
                <div class="navbar">
                    <div  id="ham-icon" class="mobile-nav" onclick="myFunction()">
                        <div class="ham-icon" ><span class="iconify" data-icon="solar:hamburger-menu-bold-duotone"></span></div>
                    </div>
                    <div class="desktop-nav">
                        <ul class="nav-list"> 
                        <li class="nav-links"><a href="#weather">Weather</a></li>
                        <li class="nav-links"><a href="#desc">Description</a></li>
                        <li class="nav-links"><a href="#all-info">All Information</a></li>
                        <li class="nav-links"><a href="sunil-sharma.com.np">Contact Developer</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="drawer" class="mob-drawer">
                <div class="navitems">
                    <ul class="nav-links-mob nav-list"> 
                        <li class="nav-links mobnav-link"><a href="#weather">Weather</a></li>
                        <li class="nav-links mobnav-link"><a href="#desc">Description</a></li>
                        <li class="nav-links mobnav-link"><a href="#all-info">All Information</a></li>
                        <li class="nav-links mobnav-link"><a href="sunil-sharma.com.np">Contact Developer</a> </li>
                        </ul>
                </div>
            </div>
        </div>
        <div class="loc-container">
            <div class="user-location">
                <%if(errmsg == null) { %>
                    <p>It looks like you are looking weather for <%= usercity %> city. Not Exactly!</p>
                    <%} else {%>
                    <p> <%= errmsg.toUpperCase() %> !</p>
                    <% } %>
            </div>
                <form class="search-form" action="/" method="post">
                    <input class="user-city" type="search" name="usercity" placeholder="Search for your city" autocomplete="off"/>
                    <button class="search-botton" type="submit">
                        <span class="iconify" data-icon="ic:baseline-search"></span>
                    </button>
                </form>
                <div class="user-country">
                    <% if(ctry !== null) { %>
                        Country: <%= ctry %> </p>
                <%} %>
            </div>
            </div>

            <%if(errmsg == null) { %>
                <div class="main-container">
                    <div class="weather-container">
                            <div class="weather-main-container">
                                <div class="today-date"><span><%= day %></span></div>
                                <div  id="weather" class="weather-infos">
                                    <div class="today-weather">
                                        <img class="weather-logo" src="<%= imageUrl %>" alt="Weather-icon" />
                                        <p class="weather-main weather-main-data"><%= weatherMain %></p>
                                    </div>
                                    <div class="today-weather">
                                        <div class="temp">
                                            <span class="iconify temperature-logo" data-icon="mdi:temperature-lines"></span>
                                        </div>
                                        <p class="weather-main temp-main-data"> <%= temp %> &#8451</p>
                                    </div>
                                    <div id="desc" class="today-desc">
                                        <p class="weather-main headings">Description</p>
                                        <p class="weather-desc">
                                            <%= desc %>
                                        </p>
                                    </div>
        
                                    <div id="all-info" class="all-info ">
                                        <p class="weather-main headings">All Information</p>
                                        <div class="all-info-cols">
                                            <div class="all-info-col-1 ">
                                                <ul class="info-list ">
                                                    <li>Min Temperature : <%= mintemp %></li>
                                                    <li>Max Temperature : <%= maxtemp %></li>
                                                    <li>Sunrise : <%= sunrise %></li>
                                                    <li>Sunset : <%= sunset %></li>
                                                </ul>
                                            </div>
        
                                            <div class="all-info-col-2">
                                                <ul class="info-list">
                                                    <li>Longitude : <%= longi %></li>
                                                    <li>Latitude : <%= lati %> </li>
                                                    <li>Pressure : <%= press %> </li>
                                                    <li>Humidity : <%= humi %></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <%} else {%>
                    <div class="error-container error-msg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                            <path fill="#ffdd67" d="M2.5 37.2c2.9 16.3 18.4 27.2 34.8 24.3c16.3-2.9 27.2-18.4 24.3-34.8C58.7 10.5 43.1-.4 26.8 2.5C10.5 5.3-.4 20.9 2.5 37.2" />
                            <g fill="#664e27">
                                <circle cx="42.4" cy="24.7" r="5" />
                                <circle cx="19.7" cy="28.7" r="5" />
                                <path d="M43.3 41.8c-5.8-1.5-12-.4-16.9 3c-1.2.9 1.1 4 2.3 3.2c3.2-2.3 8.4-3.8 13.7-2.4c1.3.3 2.4-3.3.9-3.8" />
                            </g>
                        </svg>
                        <p>Your desired <%= errmsg %>, Search Again</p>

                    </div>
                <% } %>
    <footer>
        <p class="copyright">Developed by <a href="https://sunil-sharma.com.np">Sunil Sharma</a></p>
    </footer>
</div>

```
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth ;
  }

  body {
    font-family: "Righteous", cursive;
  }

  .header {
    background-color: #3d72b4;
  }

  .container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    font-size: 35px;
    color:white;
  }

  .brand {
    margin-left: 10px;
    font-size: 30px;
  }

  .brand>a {
    text-decoration: none;
    color: white;
  }

  .ham-icon {
    margin-right: 10px;
    cursor: pointer;
  }
  
  .mob-drawer {
    position: absolute;
    height: fit-content;
    width: 100%;
    padding: 5px;
    z-index: 3;
    background-color: #3d72b4;
    display: none;
  }

  .desktop-nav {
    display: none;
  }

  .nav-links {
    margin: 10px 10px;
    padding: 5px;
    list-style: none;
    background: #f857a6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ff5858,
      #f857a6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ff5858,
      #f857a6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-size: 20px;
    border-radius: 10px; 
  }
  .nav-links > a {
    text-decoration: none;
    color: white;
  }

  .loc-container {
    z-index: 2;
    height: 300px;
    background: #dc2424; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4a569d,
      #dc2424
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #4a569d,
      #dc2424
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align: center;
    font-size: 35px;
    color: white;
    font-weight: 400;
  }

  .user-location {
    padding:30px 5px 30px 5px;
    font-size: 30px;
    color: white;
    font-weight: 400;
    font-family: "Righteous", cursive;
  }

  .search-form {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    border-radius: 5px;
    background-color: white;
  }

  .user-city {
    width: 75%;
    height: 50px;
    padding: 5px;
    font-size: 20px;
    border: none;
  }

  .user-city:focus {
    border: none;
    outline: none;
  }

  .user-country {
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .search-botton {
    overflow: hidden;
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: cornflowerblue;
    padding: 10px 0 5px 0;
  }

  .main-container {
    background: #525252; 
    background: -webkit-linear-gradient(
      to right,
      #3d72b4,
      #525252
    );
    background: linear-gradient(
      to right,
      #3d72b4,
      #525252
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding-bottom: 20px;
  }

  .today-date {
    text-align: center;
    margin-bottom: 30px;
  }

  .today-date > span {
    background: #f857a6;
    background: -webkit-linear-gradient(
      to right,
      #ff5858,
      #f857a6
    ); 
    background: linear-gradient(
      to right,
      #ff5858,
      #f857a6
    ); 
    color: white;
    font-size: 22px;
    padding: 5px 10px 10px 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .weather-container {
    margin-left: 10px;
    margin-right: 10px;
  }

  .headings{
    text-decoration: underline wavy;
    text-decoration-thickness: 3px;
    padding-bottom: 2px;
  }
  

  .weather-infos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .today-weather {
    width: 50%;
    height: max-content;
    background: #4a569d;
    border: 2px solid white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 30px;
  }

  .weather-logo {
    display: block;
    width: 130px;
    margin-left: auto;
    margin-right: auto;

  }

  .weather-main {
    margin-bottom: 20px;
    color: white;
    font-size: 30px;
    text-align: center;
  }

  .temperature-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 100px;
    color: wheat;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .today-desc {
    width: 100%;
    height: max-content;
    background: #4a569d;
    border: 2px solid white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .weather-desc {
    text-align: center;
    font-size: 20px;
    font-family: "Righteous", cursive;
    color: white;
    margin: 0 15%;
    margin-bottom: 20px;
  }
  .all-info {
    width: 100%;
    height: max-content;
    background: #4a569d;
    border: 2px solid white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 20px;
  }

  .all-info-cols {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .info-list > li {
    list-style: none;
    font-size: 15px;
    font-family: "Righteous", cursive;
    color: white;
  }

  .error-container {
    flex: 1;
    text-align: center;
    font-size: 40px;
    background-color: #f857a6;
    padding: 20px;
    color: antiquewhite;
  }

  .copyright {
    padding: 25px 0;
    text-align: center;
    font-size: 25px;
    font-family:"Righteous", cursive;
    background-color: #4a569d;
    color: white;
  }
  .copyright>a {
    color:#ecc3c3;
    text-decoration: none;
  }

::-webkit-scrollbar {
  width: 4px;
  height: 4px; 
}

::-webkit-scrollbar-track {
  background: #4a569d;
  border-radius: 10px; 
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5); 
  border-radius: 10px; 
  border: 2px solid #4a569d; 
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(207, 18, 18, 0.8);
}

html {
  scrollbar-width: thin; 
  scrollbar-color: rgba(0, 0, 0, 0.5) #4a569d;
}

  @media only screen and (min-width: 1024px) {
    .header-wrapper {
      height: 80px;
    }
    .desktop-nav {
      display: block;
      font-size: 25px;
    }
    .nav-links {
      font-size: 27px;
    }
    .mob-drawer {
      display: none !important;
    }

    .nav-list { 
      display: flex;
    }

    .mobile-nav {
      display: none !important;
    }

    .loc-container {
      height: 440px;
    }

    .user-location {
      font-size: 50px;
      padding-top: 60px;
    }

    .search-form {
      margin-top: 20px;
      width: 50%;
  }

  .user-city {
    width: 80%;
  }

  .user-country {
    margin-top: 20px;
    font-size: 30px;
  }
    .today-date > span {
      font-size: 40px;
    }

    .weather-main-data {
      font-size: 40px;
      text-align: center;
    }
    
    .temp-main-data {
      font-size: 40px;
      text-align: center;
      
    }

    .weather-container {
      display: flex;
      justify-content: center;
    }
    
    .headings {
      font-size: 50px;
      text-decoration: underline wavy;
      text-decoration-thickness: 3px;
      padding-bottom: 2px;
    }
    .weather-desc {
      font-size: 35px;
    }
    .info-list > li {
      font-size: 25px;
    }
    
  }
  @media only screen and (min-width: 1920px) {
    .header-wrapper {
      height: 110px;
    }
    .desktop-nav {
      display: block;
      font-size: 100px;
    }

    .brand {
      margin-left: 40px;
      font-size: 60px;
      color:white;
    }

    .nav-links {
      font-size: 40px;
    }

    .user-location {
      font-size: 70px;
      padding-top: 60px;
    }
    .search-form {
      margin-top: 20px;
      width: 50%;
  }

  .user-city {
    width: 80%;
  }

  .user-country {
    margin-top: 20px;
    font-size: 50px;
  }

  .weather-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .today-date > span {
      font-size: 50px;
    }

  .weather-main-data {
      font-size: 60px;
      text-align: center;
    }
    
  .temp-main-data {
      font-size: 60px;
      text-align: center;
      
    }
  
    .headings {
      font-size: 60px;
    }

    .weather-desc {
      font-size: 50px;
    }
    .info-list > li {
      font-size: 35px;
    }

    .error-container {
      font-size: 60px;
    }

    .copyright {
      font-size: 45px;  
    }
    
  }
```
```js
const express = require("express");
require('dotenv').config();
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.port;
const { IPinfoWrapper } = require("node-ipinfo");
const { get } = require("http");
const apiKey = process.env.weather_api;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    const request = await fetch(`https://ipinfo.io/json?token=${process.env.ip_token}`)
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

```

## Setup

1. Clone the repository: `git clone https://github.com/sunilsharmapoudel/weather-now.git`
2. Install dependencies: `npm install`
3. Set up environment variables for API keys.
4. Start the server: `node app.js`
5. Visit [http://localhost:${port}](http://localhost:${port}) in your browser.

## Author

- Website - [Sunil Sharma](https://sunil-sharma.com.np)
- Facebook - [@mesunilsharmapoudel](https://www.facebook.com/mesunilsharmapoudel)
- Twitter - [@techsunilsharma](https://www.twitter.com/techsunilsharma)
