import { MDBCard, MDBCardBody, MDBCardText,MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import Link  from "next/link";


export default class Account extends React.Component {
    render() {
        return(
            <div className="d-flex flex-row justify-content-between ml-3 mr-3 mt-5">
               <div>
                   <MDBCard className="text-center" style={{ width: 250 }}>
                       <MDBCardBody>
                           <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle" />
                           <MDBCardText className="mt-3">Victor Reginald</MDBCardText>
                           <div style={{ fontSize: "2rem" }}>
                                <ul className='list-unstyled list-inline'>
                                    <li className='list-inline-item px-2 pt-2 white-text'>
                                        <Link href="/">
                                            <i class="fab fa-facebook-f fa-fw blue-text"></i>
                                        </Link>
                                    </li>
                                    <li className='list-inline-item px-2 pt-2 white-text'>
                                        <Link href="/">
                                            <i class="fab fa-twitter fa-fw blue-text"></i>
                                        </Link>
                                    </li>
                                    <li className='list-inline-item px-2 pt-3 white-text'>
                                        <Link href="/">
                                            <i class="fab fa-instagram fa-fw pink-text"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                       </MDBCardBody>
                   </MDBCard>
                   <MDBCard className="mt-5">
                        <MDBCardBody>
                            <div className="d-flex flex-row justify-content-evenly mb-2 border-bottom">
                                <i className="fas fa-wrench"></i> setting <i className="fas fa-angle-right"></i>
                            </div>
                            <div className="mb-2 border-bottom">
                                <i className="fas fa-wrench"></i> Billing <i className="fas fa-angle-right"></i>
                            </div>
                            <div className="">
                                <i className="fas fa-wrench"></i> Logout <i className="fas fa-angle-right"></i>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
               </div>
               <div>
                   <h1>Second Part</h1>
               </div>
               <div>
                   <h1>Third Part</h1>
               </div>
            </div>
        );
    }
}