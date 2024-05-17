import React from "react";

export default function Weather(props) {
    return (
        <div className="mt-20">
            <div className="flex justify-center text-center p-5">
                <div className="shadow-2xl w-5/6 bg-gradient-to-b from-blue-400 to-blue-600 p-5 rounded-3xl">
                    <h1 className="text-3xl font-bold text-white">{props.city} {props.country}</h1>

                    <div className="flex justify-center">
                        <img className="h-32 w-32" src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="icon"/>
                    </div>

                    <h2 className="font-bold text-5xl text-white">{props.temp}°C</h2>

                    <h2 className="text-xl font-bold text-white p-5">{props.description}</h2>
                </div>
            </div>
            <div className="flex justify-center text-center my-5">
                <div className="shadow-2xl mx-8 w-1/3  bg-gradient-to-l from-blue-400 to-blue-600  rounded-3xl">
                    <h2 className="text-sm font-bold text-white p-5 border-b">FeelsLike: <br/> {props.feel} °C</h2>
                    <h2 className="text-sm font-bold text-white p-5 border-b">minTemp: <br/> {props.tempMin} °C</h2>
                    <h2 className="text-sm font-bold text-white p-5">maxTemp: <br/> {props.tempMax} °C</h2>
                </div>
                <div className="shadow-2xl mx-8 w-1/3  bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl">
                    <h2 className="text-sm font-bold text-white p-5 border-b">Pressure: <br/> {props.pressure} bar</h2>
                    <h2 className="text-sm font-bold text-white p-5 border-b">Humidity: <br/> {props.humidity} %</h2>
                    <h2 className="text-sm font-bold text-white p-5">Wind: <br/> {props.wind} km/h</h2>
                </div>
            </div>
            <div className="flex justify-center text-center p-5">
                <div className="shadow-2xl w-5/6 bg-gradient-to-t from-blue-400 to-blue-600 p-5 rounded-3xl">
                    <h1 className="text-2xl font-bold text-white mb-4">Weather at other Location</h1>
                    <form action="/weather" method="POST">
                        <input className="rounded-3xl shadow-2xl p-1 px-2 my-4" type="text" name="input" placeholder="Location" required/>
                        <button type="submit" className="bg-gradient-to-tr from-blue-600 to-blue-800 hover:scale-110 mx-4 rounded-3xl p-1 text-white px-2">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
