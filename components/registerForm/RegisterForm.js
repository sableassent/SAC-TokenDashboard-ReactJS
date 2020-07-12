import React from "react";
import Link from 'next/link';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBCardBody, MDBModalFooter } from 'mdbreact';

class RegisterForm extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        confpassword: ""
    }

    getRegisterData = (value, type) => this.setState({ [type]: value })

    onFormSubmit = event => {
        event.preventDefault();
        const { email, password, confpassword } = this.state;
        console.log("email " + email + " password " + password + "confpassword " + confpassword);
    }

    render() {
        return (
            <div>
                <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" style={{ marginBottom: 60 }}>
                    <MDBCard style={{ paddingLeft: 30, paddingRight: 30, }}>
                        <MDBCardBody>
                        <form onSubmit={this.onFormSubmit}>
                            <p className="h5 text-center mb-4">Register</p>
                            <div className="grey-text">
                            <MDBInput  
                                label="Type your name" 
                                icon="user" group 
                                type="text" validate error="wrong"
                                success="right" 
                                outline   
                                getValue={value => this.getRegisterData(value, "username")}
                                />
                            <MDBInput  
                                label="Type your email" 
                                icon="envelope" group 
                                type="email" validate error="wrong"
                                success="right" 
                                outline   
                                getValue={value => this.getRegisterData(value, "email")}
                                />
                            <MDBInput 
                                label="Type your password" 
                                icon="lock" group 
                                type="password" 
                                validate 
                                outline
                                getValue={value => this.getRegisterData(value, "password")}
                                />
                            <MDBInput 
                                label="Type your confirmed password" 
                                icon="lock" group 
                                type="password" 
                                validate 
                                outline
                                getValue={value => this.getRegisterData(value, "confpassword")}
                                />
                            </div>
                            <div className="text-center">
                            <MDBBtn type="submit" onClick={this.onFormSubmit} color="light-blue" size="lg">Register</MDBBtn>
                            </div>
                        </form>
                        <div>

                        </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text text-center">
                                Already have an account?
                                <Link href="/login">
                                    <a className="blue-text ml-1">

                                    Sign In
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

export default RegisterForm;