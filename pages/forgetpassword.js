import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import { MDBInput } from "mdbreact";
import AuthLayout from "../components/AuthLayout";


class ForgetPassword extends React.Component {

    render() {
        return (
            <AuthLayout>
                <MDBContainer className="mx-auto">
                    <MDBRow md="6">
                        <MDBCol md="4"></MDBCol>
                        <MDBCol md="8" className="d-flex align-items-center mt-4">
                            <MDBCard>
                                <MDBCardBody className="ml-4">
                                    <form>
                                        <MDBInput label="Type your email" outline icon="envelope" />
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4"></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </AuthLayout>
        );
    }
}

export default ForgetPassword;