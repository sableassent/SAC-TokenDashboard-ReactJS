import { MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const styles = {
    container: { 
        float: "right", 
        width: "300px", 
        height: "370px",
        marginTop: "30px",
        paddingLeft: "20px", 
        paddingRight: "20px",  
    },
    inputBorderColor: {
        borderColor: "black",
        marginTop: "-20px"
    }
}

export default class SendForm extends React.Component {

    render() {
        return(
            <div style={styles.container}>
                <MDBCard>
                    <MDBCardBody>
                    <div className="d-flex justify-content-center mt-2">
                    <h5 className="font-weight-bold">Exchange</h5>
                    </div>
                    <div>
                        <form>
                            <label>From</label>
                            <MDBInput outline value="jakjkajfsfsv&%4330,kja.:" style={styles.inputBorderColor} />
                            <label>To</label>
                            <MDBInput label="Enter Receiver Address" outline placeholder="Enter Receiver address" style={styles.inputBorderColor} />
                            <label>Amount</label>
                            <MDBInput label="Enter Receiver Address" outline placeholder="Amount" style={styles.inputBorderColor} />
                            <div className="d-flex justify-content-between">
                                <span>Transaction Fee</span> <p>SAC1 4.0</p>
                            </div>
                            <div>
                                <MDBBtn style={{ width: "215px" }}>Send</MDBBtn>
                            </div>
                        </form>
                    </div>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}