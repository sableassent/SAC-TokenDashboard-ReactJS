
import Head from 'next/head';
import NavBar from "./NavBar";
import SideMenu from "./sideMenu";
import SendForm from '../components/wallet/SendForm'



const Layout = ({ title, children }) =>{

  return (
        <React.Fragment>
          <Head><title>{title}</title></Head>
          <NavBar />
          <div>
            <SideMenu />
            <div>
              {children}
            </div>
          </div>
        </React.Fragment>
    );
}

export default Layout;