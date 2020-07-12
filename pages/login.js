import {  MDBRow, MDBCol } from "mdbreact";
import LoginForm from '../components/loginForm';
import AuthLayout from "../components/AuthLayout";


const LoginPage = () => (
  <AuthLayout>
        <MDBRow>
            <MDBCol md="4"></MDBCol>
            <MDBCol md="8" className="mx-auto">
                <LoginForm />
            </MDBCol>
            <MDBCol md="4"></MDBCol>
        </MDBRow>
  </AuthLayout>
  
);

export default LoginPage;