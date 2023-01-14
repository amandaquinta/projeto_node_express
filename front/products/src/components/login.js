import React, { Component } from "react";
import { Container, Col, Button, FormGroup, Label, Input, Form, FormFeedback, FormText } from "reactstrap";
import './login.css'
import { withRouter } from "react-router-dom";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            validate: {
                emailState: "",
                passwordState: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }
    validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }
  async submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);

    const { validate } = this.state;
    if(this.state.email === "") {
        validate.emailState = "has-danger";
        this.setState({ validate });
    } else
    if (this.state.password === "") {
        validate.passwordState = "has-danger";
        this.setState({ validate });
    } else {
        await fetch("http://localhost:4000/auth/login", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                sessionStorage.setItem('token', data.token);
    
                console.log(data);
            })
            .catch(console.log);
        if(sessionStorage.getItem('token') !== "undefined") {
            this.props.history.push("/allusers");
        }
    }
  }
  handleChange = async event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
        [name]: value
    })
  }
  render() {
    const { email, password } = this.state;
    return (
        <Container className="AppLogin">
            <h2>Sign In</h2>
            <Form className="form" onSubmit={e => this.submitForm(e)}>
                <Col>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="myemail@email.com" value={email} valid={this.state.validate.emailState === "has-success"} invalid={this.state.validate.emailState === "has-danger"} onChange={ e => { this.validateEmail(e); this.handleChange(e);}} />
                    <FormFeedback>
                        That's a tasting looking email you've got there!
                    </FormFeedback>
                    <FormFeedback>
                        Uh oh! Looks like there is an issue with your email. Please input a correct email.
                    </FormFeedback>
                    <FormText>
                        Your username is most likely your email.
                    </FormText>
                </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="**********" value={password} invalid={this.state.validate.passwordState === "has-danger"} onChange={ e=> this.handleChange(e)} />
                        <FormFeedback>Pleaseenter your password.</FormFeedback>
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
  }
}

export default withRouter(Login);