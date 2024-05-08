import React from "react";

export default function Navbar(){
    return(
        <div className="flex justify-center">
            <div className="absolute top-2">
                <ul className="flex ">
                    <li className="mr-3">
                        <a className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/">Home</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/weather">Weather</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/weather">Weather</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/weather">Weather</a>
                    </li>
            
                </ul>
            </div>

        </div>

    );
}