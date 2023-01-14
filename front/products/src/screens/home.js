import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="container">
            <h1>Welcome to Startdev React Course</h1>
            <Link to="/allUsers">
                <button className="button">LISTA ALL USERS</button>
            </Link>
        </div>
    );
};