import React, { Fragment } from "react";
import Login from "../components/login";
import { Button, Col, Row } from "reactstrap";

export default function Home(){
    return(
        <Fragment>
            <div className="container">
                <h1>Welcome to Startdev React Course</h1>
                <Row className="justify-content-md-center">
                    <Col sm="3">
                        <Button className="font-weight-bold" href="/allusers">
                            LIST ALL USERS
                        </Button>
                    </Col>
                    <Col sm="3">
                        <Button className="font-weight-bold" href="/allproducts" >
                            LIST ALL PRODUCTS
                        </Button>
                    </Col>
                </Row>
                <Login/>
            </div>
        </Fragment>
    );
};