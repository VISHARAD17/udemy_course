const express = require("express");
const https = require('node:https');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// GET request to weather API with node
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    // console.log("Post request received");
    // console.log(req.body.cityName);

    const query = req.body.cityName;
    const appID = "40dcd5861bd11fc7912b1b96a233fe5e";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appID+"&units="+unit;
    
    https.get(url, (response) => {
        console.log(response.statusCode);
        // getting the actual data through JSON format
        response.on("data", (data) =>{
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon =  weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<P>" + weatherDescription + "</P>");
            res.write("<h2>the temperature in" + query +" in "+temp+ "degree celcious</h2>");
            res.write("<img src =" + imageURL + "></img>");
            res.send();
        });
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})