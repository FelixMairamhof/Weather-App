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
                                        <button onClick={() => props.onDelete(index)} className="px-2 ml-2 rounded-2xl bg-blue-600 hover:bg-blue-800 text-white">X</button>

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
