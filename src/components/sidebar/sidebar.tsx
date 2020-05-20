import * as React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div id="sidebar"><a href="#" className="visible-phone"><i className="icon icon-home"></i> Dashboard</a>
                    <ul>
                        <li className="active"><Link to="/dashboard"><i className="icon icon-home"></i> <span>Dashboard</span></Link> </li>
                        <li> <Link to="/market"><i className="icon icon-signal"></i> <span>Market</span></Link> </li>
                        <li> <Link to="/contact"><i className="icon icon-inbox"></i> <span>Contact</span></Link> </li>
                        <li><a href="tables.html"><i className="icon icon-th"></i> <span>Tables</span></a></li>
                        <li className="submenu"> <a href="#"><i className="icon icon-info-sign"></i> <span>Failed Transactions</span> <span className="label label-important">4</span></a>
                        <ul>
                            <li><a href="error403.html">Error 403</a></li>
                            <li><a href="error404.html">Error 404</a></li>
                            <li><a href="error405.html">Error 405</a></li>
                            <li><a href="error500.html">Error 500</a></li>
                        </ul>
                        </li>
                        <li className="content"> <span>Monthly Failed Transfer</span>
                        <div className="progress progress-mini progress-danger active progress-striped">
                            <div style={{width: '77%'}} className="bar"></div>
                        </div>
                        <span className="percent">77%</span>
                        <div className="stat">21419.94 / 14000 MB</div>
                        </li>
                        <li className="content"> <span>Monthly Successed Transfer</span>
                        <div className="progress progress-mini active progress-striped">
                            <div style={{width: '77%'}} className="bar"></div>
                        </div>
                        <span className="percent">87%</span>
                        <div className="stat">604.44 / 4000 MB</div>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}


export default Sidebar;