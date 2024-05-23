import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ positions }) {
    return (
        <div>
            <nav>
                <div className="flex justify-center">
                    <ul className="flex flex-wrap justify-center">
                        <li className="m-2">
                            <Link to="/" className="inline-block border border-blue-500 rounded py-2 px-6 m-2 bg-blue-500 hover:bg-blue-700 text-white">
                                Home
                            </Link>
                        </li>
                        {positions && positions.map((position, index) => (
                            <li key={index} className="m-2">
                                <Link to={`/weather/${position.city}`} className="inline-block border border-blue-500 rounded py-2 px-6 m-2 bg-blue-500 hover:bg-blue-700 text-white">
                                    {position.city}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
