import React, { useState, useEffect } from "react";


function LocationForm() {
    const [error, setError] = useState("");
    const [input, setInput] = useState("");
    const [cords, setCords] = useState({
        lat: "",
        lon: ""
    })

    const ApiKey = "877d8f5c9a2b5e3b8d609a3ff3b6f42f";

    useEffect(() => {
        getLocation();
        
    }, []);

    function handleChange(event) {
        setInput(event.target.value);
    }

    async function getLocation() {
        try {
            if (!navigator.geolocation) {
                setError("Geolocation is not supported by your browser");
                return;
            }
    
            // Check if geolocation is enabled
            if (!navigator.permissions ) {
                setError("Geolocation is disabled in your browser settings");
                return;
            }
    
            navigator.geolocation.getCurrentPosition(async position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                setCords({
                    lat: lat,
                    lon: lon
                })
    
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
                if (response.ok) {
                    const data = await response.json();
                    
                    setError(""); // Clear error if data is successfully fetched
                } else {
                    setError("Error fetching weather data");
                }
            }, error => {
                // Handle permission denied or other geolocation errors
                setError("Geolocation request failed: " + error.message);
            });
        } catch (error) {
            setError(error.message);
        }
    }
    
    
    

    async function typedLocation() {
          
        const resultCords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${ApiKey}`);
        if (resultCords.ok) {
            const dataCords = await resultCords.json();
            let lat = dataCords.data[0].lat;
            let lon = dataCords.data[0].lon;
            setCords({
                lat: lat,
                lon: lon
            })

            const resultWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
            if (resultWeather.ok) {
                const dataWeather = await resultWeather.json();
                setError(""); // Clear error if data is successfully fetched
            } else {
                setError("Error fetching weather data");
            }
        } else {
            setError("Error fetching location data");
        }
     


    }

    return (
        <div className="text-center">
            <h1 className="mb-20 text-white font-bold text-2xl">Type in a Location or Localize your own </h1>
            <input onChange={handleChange} value={input} name="input" type="text" placeholder="Location" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            <div className="flex justify-center my-5">
                <button onClick={typedLocation} className="bg-gradient-to-tr from-blue-600 to-blue-800 hover:scale-110 mx-4 rounded-3xl p-1 text-white px-2">Search</button>
                <button onClick={getLocation} className="bg-gradient-to-tl from-blue-600 to-blue-800 hover:scale-110 mx-4 rounded-3xl p-1 text-white px-2">Localization</button>
            </div>
            {error && <div className="text-white text-xl">Error: {error}</div>}

            <h1>Lat: {cords.lat} Lon: {cords.lon} </h1>

        </div>
    );
}

export default LocationForm;
