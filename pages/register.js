import {  MDBRow, MDBCol } from "mdbreact";
import RegisterForm from '../components/registerForm';
import AuthLayout from '../components/AuthLayout';

const Register = () => (
  <AuthLayout>
  <MDBRow>
      <MDBCol md="4"></MDBCol>
      <MDBCol md="8" className="mx-auto">
          <RegisterForm />
      </MDBCol>
      <MDBCol md="4"></MDBCol>
  </MDBRow>
</AuthLayout>
);

export default Register; 