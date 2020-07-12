import Link from 'next/link';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";


const styles = {
  container: {
    width: "20rem",
    height: "100vh",
    backgroundColor: "#323637",
    top: 0,
    float: "left"
  }
}

const CustomLink = ({ title, link, iconName }) => {
  return(
    <Link href={link}>
      <a>
        <MDBListGroupItem 
          style={{ 
            backgroundColor: "transparent", 
            color: "#ffffff", 
            borderLeft: "none"}}>
            <span style={{ marginRight: 10 }}>
              <i className={iconName}></i>  
            </span>   {title}
        </MDBListGroupItem>
      </a>
    </Link>
  )
}

class SideMenu extends React.Component {
  state = {
    sideNavLeft: false,
  }

sidenavToggle = sidenavId => () => {
  const sidenavNr = `sideNav${sidenavId}`
  this.setState({
    [sidenavNr]: !this.state[sidenavNr]
  });
};

    render() {
        return (
          <div className="d-none d-sm-block z-depth-2" style={styles.container}>
            <MDBListGroup>
              <CustomLink title="Dashboard" link="/dashboard" iconName="fa fa-home" />
              <CustomLink title="Affiliate" link="/affiliate" iconName="fas fa-file-invoice-dollar" />
              <CustomLink title="Non Profit" link="/nonProfite" iconName="fas fa-users" />
              <CustomLink title="Generate QR Code" link="/qrcode" iconName="fas fa-qrcode" />
            </MDBListGroup>
          </div>
        );
    }
}

export default SideMenu;



