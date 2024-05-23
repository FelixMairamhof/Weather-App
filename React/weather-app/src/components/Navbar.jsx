import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ positions }) {
    //const ApiKey = "877d8f5c9a2b5e3b8d609a3ff3b6f42f";

    return (
        <div>
            <nav className="flex justify-center">
                <div className="absolute top-2">
                    <ul className="flex ">
                        <li className="mr-3">
                            <Link to="/" className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Home</Link>
                        </li> 
                        {/* Render links for each added location if positions array is defined */}
                        {positions && positions.map((position, index) => {
                            return(
                            <li key={index} className="mr-3">
                                <Link to={`/weather/${position.city}`} className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">{position.city}</Link>
                            </li>
                        )})}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
