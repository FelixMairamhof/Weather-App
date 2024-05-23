import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const positions = props.positions; // Define positions variable

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
                                <div className="flex items-center">
                                    <Link to={`/weather/${position.city}`} className="inline-block border border-blue-500 rounded py-2 px-6 m-2 bg-blue-500 hover:bg-blue-700 text-white">
                                        {position.city}
                                        <button onClick={() => props.onDelete(index)} className="ml-2 border border-red-500 rounded px-2 py-1 bg-red-500 hover:bg-red-700 text-white">Delete</button>

                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
