import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ApiKey = "877d8f5c9a2b5e3b8d609a3ff3b6f42f"; 

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if (lat === undefined || lon === undefined) {
            // If latitude or longitude is not provided, send an error response
            return res.redirect("/");
        }

        // Retrieve weather information based on latitude and longitude
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
        console.log(result.data);
        
        res.render("weather.ejs", {
            temp: result.data.main.temp,
            weather: result.data.weather[0].main,
            city: result.data.name,
            country: result.data.sys.country,
        });
    } catch (error) {
        // Handle errors
        res.status(500).send(error.message);
        console.log(error);
    }
});

app.post("/weather-user-location", (req, res) => {
    const lat = req.body.lat;
    const lon = req.body.lon;
    
    console.log("User Location: " + lat + "/" + lon);
    res.redirect(`/weather?lat=${lat}&lon=${lon}`);
});

app.post("/weather-typed-location", async (req, res) => {
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
        res.status(500).send("Error retrieving weather information for the specified location.");
    }
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("Server running on " + port);
});
