import React from "react";
import Link from 'next/link';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBCardBody, MDBModalFooter } from 'mdbreact';
import './login-form.css';
import Router from 'next/router';

import { signInUser } from '../../lib/auth';

class LoginForm extends React.Component {
    state = {
        email: "",
        password: "",
        isLoading: false
    }

    componentDidMount () {

    }
    getLoginData = (value, type) => this.setState({ [type]: value })

    onFormSubmit = event => {
        const { email, password } = this.state;
        event.preventDefault();
         const user = { email, password };
        // this.setState({ isLoading: true });
        // signInUser(user) 
        //     .then((data) => {
        //         console.log(data);
        //         Router.push("/dashboard");
        //     }).catch(this.showError)
        console.log(user);
        Router.push("/dashboard");
    }

    showError = err => {
        const error = (err.response && err.response.data) || err.message;
        this.setState({ error,  isLoading: false });
      };
    render() {
        const { isLoading } = this.state;
        return (
            <div>
                <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" style={{ marginBottom: 60 }}>
                    <MDBCard style={{ paddingLeft: 30, paddingRight: 30 }}>
                        <MDBCardBody>
                        <form onSubmit={this.onFormSubmit}>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                            <MDBInput  
                                label="Type your email" icon="envelope" group 
                                type="email" validate error="wrong"
                                success="right" 
                                outline   
                                getValue={value => this.getLoginData(value, "email")}
                                />
                            <MDBInput 
                                label="Type your password" 
                                icon="lock" group 
                                type="password" 
                                validate 
                                outline
                                getValue={value => this.getLoginData(value, "password")}
                                />
                            </div>
                            <div>
                            <p className="font-small blue-text d-flex justify-content-end pb-3">
                                Forgot
                                <Link href="/forgetpassword">
                                    <a className="blue-text ml-1">Password?</a>

                                </Link>
                            </p>
                            </div>
                            <div className="text-center">
                            <MDBBtn type="submit" onClick={this.onFormSubmit} color="light-blue" size="lg">
                                { isLoading ? "Loging in ..." :  "Login" }
                            </MDBBtn>
                            </div>
                        </form>
                        <div>

                        </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-center">
                                Not a member?
                                <Link href="/register">
                                    <a className="blue-text ml-1">

                                    Register
                                    </a>
                                </Link>
                            </p>
                        </MDBModalFooter>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
        );
    }
};

export default LoginForm;