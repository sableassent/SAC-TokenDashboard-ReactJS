import React from 'react';
import { Link } from 'react-router-dom';
import '../login/matrix-login.css';
import logo from '../login/app_icon.png';


class LostPassword extends React.Component {
    render() {
        return(
            <React.Fragment>
            <div id="loginbox">            
                <form id="loginform" className="form-vertical" action="index.html">
                    <div className="control-group normal_text"> <h3><img src={logo} height="70" width="70" alt="Logo"/></h3></div>
                    <div className="control-group normal_text"> <p className="normal_text">Enter your e-mail address below and we will send you instructions how to recover a password.</p></div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_lg"><i className="icon-envelope-alt"> </i></span><input type="text" placeholder="Email" />
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <Link to="/dasboard" className="btn btn-success btn-lg"> Recover</Link>
                            </div>
                        </div>
                    </div>
                    <div className="main_input_box" style={{ width: '380px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div><Link to="/" style={{ color: 'white', fontWeight: 'bold'}}>Back to Login</Link></div>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default LostPassword;