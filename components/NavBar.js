import Link from "next/link";
import Head from "next/head";
import { MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBDropdown, MDBDropdownToggle, 
  MDBDropdownMenu, MDBDropdownItem, MDBBtn } from "mdbreact";


const styles = {
    imagContainer: {
      boxShadow: "0 0px 0 0 rgba(0, 0, 0, 0)"
    },
    iconColor: {
        color: "#fff"
    }
  }

export default class NavBar extends React.Component {

    state = {
        isOpen: false
      }
    
      handleToggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      };

    render() {
        return(
            <>
            <Head><style>{globalStyle}</style></Head>
            <MDBNavbar className="nav__bar" >
                <MDBNavbarBrand>
                    <img src="/static/app_icon.png" height="40" />
                </MDBNavbarBrand>
                <MDBNavbar right style={styles.imagContainer}>
                <MDBNavItem tag="div"  style={styles.imagContainer}>
                    <MDBDropdown>
                        <MDBDropdownToggle className="dopdown-toggle z-depth-0" nav>
                        <div className="d-flex justify-content-start">
                            <i className="fas fa-envelope" style={styles.iconColor}></i>
                            <h6 style={styles.iconColor}>Message 7</h6>
                            <i className="fas fa-caret-down" style={styles.iconColor}></i>
                        </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                        <Link href="/">
                            <MDBDropdownItem><span><i className="fas fa-plus"></i></span> New Message</MDBDropdownItem>
                        </Link>
                        <Link href="/">
                            <MDBDropdownItem><span><i className="far fa-envelope" aria-hidden="true"></i></span> Inbox</MDBDropdownItem>
                        </Link>
                        <Link href="/">
                            <MDBDropdownItem><span><i className="far fa-envelope-open"></i></span> Outbox</MDBDropdownItem>
                        </Link>
                        <Link href="/">
                            <MDBDropdownItem><span><i className="far fa-trash-alt"></i></span> Trash</MDBDropdownItem>
                        </Link>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavItem>
                    <MDBNavItem tag="div"  style={styles.imagContainer}>
                    <MDBDropdown>
                        <MDBDropdownToggle className="dopdown-toggle z-depth-0" nav>
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle"
                            style={{ height: "35px", padding: 0 }} alt="" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                        <Link href="/account">
                            <MDBDropdownItem><span><i className="far fa-user" aria-hidden="true"></i></span> My account</MDBDropdownItem>
                        </Link>
                        <Link href="/">
                            <MDBDropdownItem><span><i className="fas fa-wrench" aria-hidden="true"></i></span> Setting</MDBDropdownItem>
                        </Link>
                        <Link href="/login">
                            <MDBDropdownItem><span><i className="fas fa-sign-out-alt"></i></span> Log out</MDBDropdownItem>
                        </Link>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbar>
            </MDBNavbar>  
            </>
        );
    }
}

const globalStyle = `
    @media screen and (max-width: 311px) {
        .nav__bar {
            display: none;
        }
    }
`