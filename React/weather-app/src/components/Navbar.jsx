import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    return(

        <div>
            <nav className="flex justify-center">
                <div className="absolute top-2">
                    <ul className="flex ">
                        <li className="mr-3">
                            <Link to="/" className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Home</Link>
                        </li> 
                        <li className="mr-3">
                            <Link to="/weather" className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Weather</Link>
                        </li>     
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>

    );
}