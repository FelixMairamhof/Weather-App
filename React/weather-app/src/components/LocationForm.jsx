import React, { useState } from "react";

function LocationForm(props) {
    const [error, setError] = useState("");
    const [input, setInput] = useState("");


    const ApiKey = "877d8f5c9a2b5e3b8d609a3ff3b6f42f";

    function handleChange(event) {
        setInput(event.target.value);
    }

    async function getLocation() {
        try {
            if (!navigator.geolocation) {
                setError("Geolocation is not supported by your browser");
                return;
            }

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    // Fetch reverse geocoding data
                    const result = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${ApiKey}`);
                    if (!result.ok) {
                        throw new Error("Error fetching location data");
                    }
                    const data = await result.json();

                    if (!data || data.length === 0) {
                        throw new Error("Location not found");
                    }

                    const city = data[0].name;

                    setError("");

                    // Call onSubmit with the coordinates, country, and city
                    props.onSubmit({ lat, lon, city });
                },
                (error) => {
                    // Handle permission denied or other geolocation errors
                    setError(error.message);
                }
            );
        } catch (error) {
            setError(error.message);
        }
    }

    async function typedLocation() {
        try {
            const resultCords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${ApiKey}`);
            if (!resultCords.ok) {
                throw new Error("Error fetching location data");
            }
            const dataCords = await resultCords.json();

            if (!dataCords || dataCords.length === 0) {
                throw new Error("Location not found");
            }

            const lat = dataCords[0].lat;
            const lon = dataCords[0].lon;
            const city = dataCords[0].name;

            setError("");

            // Call onSubmit with the coordinates, country, and city
            props.onSubmit({ lat, lon, city });
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="text-center mt-10">
            <h1 className="mb-20 text-white font-bold text-2xl">Type in a Location or Localize your own </h1>
            <input onChange={handleChange} value={input} name="input" type="text" placeholder="Location" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            <div className="flex justify-center my-5">
                <button onClick={typedLocation} className="bg-gradient-to-tr from-blue-600 to-blue-800 hover:scale-110 mx-4 rounded-3xl p-1 text-white px-2">Search</button>
                <button onClick={getLocation} className="bg-gradient-to-tl from-blue-600 to-blue-800 hover:scale-110 mx-4 rounded-3xl p-1 text-white px-2">Localization</button>
            </div>
            {error && <div className="text-white text-xl">Error: {error}</div>}
        </div>
    );
}

export default LocationForm;
