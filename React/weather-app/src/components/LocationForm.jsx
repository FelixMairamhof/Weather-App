import React, {useState, useEffect} from "react";

function LocationForm (){

    let lat;
    let lon;

    const {error, setError} = useState("");


    function getLocation() {
        try {
            navigator.geolocation.getCurrentPosition(position => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
            });
        } catch (error) {
            setError(error);
        }
    }
    
    useEffect(() => {
        getLocation();
    },[])

    return (
        <form action="/weather" method="POST" id="locationForm" class="text-center ">
        <h1 class=" mb-20 text-white font-bold  text-2xl">Type in a Location or Localize your own </h1>
        <input name="input" type="text" placeholder="Location" class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
        <div class="flex justify-center my-5">
            <button type="submit" class="bg-gradient-to-tr from-blue-600 to-blue-800  hover:scale-110   mx-4 rounded-3xl p-1 text-white px-2">Search</button>
            <button onClick={getLocation} class="bg-gradient-to-tl from-blue-600 to-blue-800 hover:scale-110   mx-4 rounded-3xl p-1 text-white px-2">Localization</button>

        </div>
        <div id="errorMessage" class="text-white text-xl">{error}</div>
    </form>
    );
}
export default LocationForm;