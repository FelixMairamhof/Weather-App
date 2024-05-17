import React, { useState, useEffect } from "react";

function Weather(props) {
    const ApiKey = "877d8f5c9a2b5e3b8d609a3ff3b6f42f";
    const [dataWeather, setDataWeather] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const resultWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${ApiKey}&units=metric`);
                if (resultWeather.ok) {
                    const weatherData = await resultWeather.json();
                    setDataWeather(weatherData);
                } else {
                    throw new Error("Error fetching weather data");
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }

        if (props.lat !== undefined && props.lon !== undefined) {
            fetchData();
        }
    }, [props.lat, props.lon]);

    return (
        <div className="mt-20">
            {dataWeather && (
                <div className="flex justify-center text-center p-5">
                    <div className="shadow-2xl w-5/6 bg-gradient-to-b from-blue-400 to-blue-600 p-5 rounded-3xl">
                        <h1 className="text-3xl font-bold text-white">{dataWeather.name} {dataWeather.sys.country}</h1>

                        <div className="flex justify-center">
                            <img className="h-32 w-32" src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`} alt="icon"/>
                        </div>

                        <h2 className="font-bold text-5xl text-white">{dataWeather.main.temp}°C</h2>

                        <h2 className="text-xl font-bold text-white p-5">{dataWeather.weather[0].description}</h2>
                    </div>
                </div>
            )}

            {dataWeather && (
                <div className="flex justify-center text-center my-5">
                    <div className="shadow-2xl mx-8 w-1/3 bg-gradient-to-l from-blue-400 to-blue-600 rounded-3xl">
                        <h2 className="text-sm font-bold text-white p-5 border-b">FeelsLike: <br/>{dataWeather.main.feels_like} °C</h2>
                        <h2 className="text-sm font-bold text-white p-5 border-b">minTemp: <br/>{dataWeather.main.temp_min} °C</h2>
                        <h2 className="text-sm font-bold text-white p-5">maxTemp: <br/>{dataWeather.main.temp_max} °C</h2>
                    </div>
                    <div className="shadow-2xl mx-8 w-1/3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl">
                        <h2 className="text-sm font-bold text-white p-5 border-b">Pressure: <br/>{dataWeather.main.pressure} bar</h2>
                        <h2 className="text-sm font-bold text-white p-5 border-b">Humidity: <br/>{dataWeather.main.humidity} %</h2>
                        <h2 className="text-sm font-bold text-white p-5">Wind: <br/>{dataWeather.wind.speed} km/h</h2>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;
