import Layout from '../components/Layout';
import QRCode from 'qrcode.react';
import QrReader from 'react-qr-reader';

import { MDBBtn } from 'mdbreact';

const styles = {
    qrCodeMain: {
        width: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    qrCodeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px"
    },
    qrTitle: {
        fontWeight: 700,
        marginLeft: "10px",
        marginRight: "10px"
    },
    address: {
        marginTop: "15px",
        color: "#fff"
    },
    line: {
        height: "1px",
        width: "20px",
        backgroundColor: "#222529",
        marginTop: "8px"
    }
}

export default class QrCode extends React.Component {
    state = {
        isScan: true,
        result: "No Result"
    }

    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
      }
      handleError = err => {
        console.error(err)
      }
    render() {
        const { isScan } = this.state;
        return (
            <Layout title="QR Code">
                <div className="z-depth-1" style={styles.qrCodeMain}>
                    {isScan  ?
                        <>
                        <div style={styles.qrCodeContainer}>
                            <h5 style={styles.qrTitle}>Your QR Code</h5>
                            <QRCode value="http://facebook.github.io/react/" size="160" />
                            <p style={styles.address}>ajfowfvx834tuvxetqt!3qf*7lak</p>
                            <div style={{ height: "1px", width: "370px", backgroundColor: "#222529"}}></div>
                        </div>
                        <div style={{ display: "flex", marginTop: "20px"}}>
                            <div style={styles.line}></div>
                            <div>
                                <span><h6 style={styles.qrTitle}>SAC1 10.00</h6></span>
                            </div>
                            <div style={styles.line}></div>
                        </div>
                        <div>
                            <p>0.0211 ETH</p>
                        </div>
                        </>
                        :
                          <> 
                            <div style={styles.qrCodeContainer}>
                                <h5 style={styles.qrTitle}>Scan QR Code</h5>
                                <p>Align qr code within frame to scan</p>
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ width: "160px"}}
                                />
                                <div style={{ marginTop: "20px" , marginBottom: "20px" }}>
                                    <p>Scanning Address</p>
                                </div>
                            </div>
                          </>  
                    }
                    <div style={{ marginBottom: "40px" }}>
                        <MDBBtn onClick={() => this.setState({ isScan: !isScan })} size="lg"> { isScan ? "Scan QR Code" : "Cancel" }</MDBBtn>
                    </div>
                </div>
            </Layout>
        );
    }
}