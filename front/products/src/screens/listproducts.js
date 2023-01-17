import React, { Fragment, Component } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const divStyle = {
    width: '25rem',
    margin: '20px',
}

class ListProducts extends Component {
    constructor(props) {
        super(props);
        // console.log('entrou 01');
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/product')
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
                console.log(this.state.products);
            })
            .catch(console.log);
    }
    render(){
        return (
            <Fragment>
                <Container fluid>
                    <Row>
                        <Col>
                            {this.state.products.map(products => (
                                <Card style={divStyle} color="white">
                                    <CardBody>
                                        <CardTitle className="h3 mb-2 pt-2 font-weight-bold">
                                            {products.title}
                                        </CardTitle>
                                        <CardSubtitle className="mb-3 font-weight-light text-uppercase">
                                            {products.description}
                                        </CardSubtitle>
                                        <CardText className="mb-4">
                                            {" "}
                                            R$ {products.price}
                                        </CardText>
                                        <Row>
                                            <Col>
                                                <Button color="success">Edit</Button>
                                            </Col>
                                            <Col>
                                                <Button color="danger">Delete</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ListProducts;