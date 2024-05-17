import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ApiKey = "877d8f5c9a2b5e3b8d609a3ff3b6f42f"; 

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if (lat === undefined || lon === undefined) {
            // If latitude or longitude is not provided, send an Back to index
            return res.redirect("/");
        }

        // Retrieve weather information based on latitude and longitude
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
        console.log(result.data);
        let temp = result.data.main.temp;
        temp = Math.round(result.data.main.temp);
        
        res.render("weather.ejs", {
            //Top Weather
            temp: temp,
            weather: result.data.weather[0].main,
            description: result.data.weather[0].description,
            city: result.data.name,
            country: result.data.sys.country,
            icon: result.data.weather[0].icon,
            //Left Weather
            feel: result.data.main.feels_like,
            tempMin: result.data.main.temp_min,
            tempMax: result.data.main.temp_max,
            //Right Weather
            pressure: result.data.main.pressure,
            humidity: result.data.main.humidity,
            wind: result.data.wind.speed,
        });
    } catch (error) {
        // Handle errors
        res.status(500).send(error.message);
        console.log(error);
    }
});


app.post("/weather", async (req, res) => {
    const location = req.body.input;
    console.log("Input Field: " + location);
    

    try {
        const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${ApiKey}`);
        console.log(result);
        const lat = result.data[0].lat;
        const lon = result.data[0].lon;

        res.redirect(`/weather?lat=${lat}&lon=${lon}`);
    } catch (error) {
        // Handle errors
        console.log(error);
        res.redirect("/");
    }
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("Server running on " + port);
});
