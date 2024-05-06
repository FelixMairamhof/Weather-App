import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ApiKey = process.env.API_KEY; 

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if(req.query == null){
            res.redirect("/");
        }
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
        res.render("weather.ejs", {
            temp: result.data.main.temp,
            weather: result.data.weather[0].main,
        });
    } catch (error) {
        res.send(error.message);
    }
});

app.post("/weather-user-location", (req, res) => {
    const lat = req.body.lat;
    const lon = req.body.lon;
    
    console.log("User Location: " + lat + "/" + lon);
    res.redirect(`/weather?lat=${lat}&lon=${lon}`);
});
app.post("/weather-typed-location", async(req, res) => {
    const location = req.body.input;
    console.log("Input Field: " + location);
    
    try{
        const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${ApiKey}`);
        console.log(result);
        const lat = result.data[0].lat;
        const lon = result.data[0].lon;

        res.redirect(`/weather?lat=${lat}&lon=${lon}`);
    }catch{
        res.redirect("/");
    }

    
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("Server running on " + port);
});
