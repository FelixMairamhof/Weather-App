import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ positions }) {
    return (
        <div>
            <nav className="flex justify-center">
                <div className="absolute top-2">
                    <ul className="flex ">
                        <li className="mr-3">
                            <Link to="/" className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Home</Link>
                        </li> 
                        {/* Render links for each added location if positions array is defined */}
                        {positions && positions.map((position, index) => (
                            <li key={index} className="mr-3">
                                <Link to={`/weather/${index}`} className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Location {index}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
