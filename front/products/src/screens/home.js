import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Login from "../components/login";

export default function Home(){
    return(
        <Fragment>
            <div className="container">
                <h1>Welcome to Startdev React Course</h1>
                <Link to="/allusers">
                    <button className="button">LISTA ALL USERS</button>
                </Link>
                <Login/>
            </div>
        </Fragment>
    );
};