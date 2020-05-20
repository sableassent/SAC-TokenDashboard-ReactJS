import React from 'react';
import { Link } from 'react-router-dom';
import './matrix-login.css';
import logo from './app_icon.png'
 
interface IState {
    usernameEmail: string,
    password: string
}

class Login extends React.Component<{}, IState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            usernameEmail: '',
            password: ''
        }
    }

    handleSubmit(e: any) {
        e.preventDefault();
        const user = {
            username: this.state.usernameEmail,
            password: this.state.password
        }
        console.log(user);
        //this.props.history.push('/dashboard');
        window.location.href="/dashboard"
    }

    render() {
        const { usernameEmail, password} = this.state;
        return(
         <React.Fragment>
            <div className="loginContainer">
                <div id="loginbox">            
                    <form id="loginform" className="form-vertical" onSubmit={e => this.handleSubmit(e)}>
                        <div className="control-group normal_text"> <h3><img src={logo} height="70" width="70" alt="Logo"/></h3></div>
                        <div className="control-group normal_text"> <h2>Login</h2></div>
                        <div className="control-group">
                            <div className="controls">
                                <div className="main_input_box">
                                    <span className="add-on bg_lg">
                                        <i className="icon-user"> </i>
                                    </span>
                                    <input type="text" name="usernameEmail" value={usernameEmail} onChange={e => this.setState({ usernameEmail: e.target.value })} placeholder="Username" />
                                </div>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="controls">
                                <div className="main_input_box">
                                    <span className="add-on bg_ly">
                                        <i className="icon-lock"></i>
                                    </span>
                                    <input type="password" name="password" value={password} onChange={e => this.setState({ password: e.target.value })} placeholder="Password" />
                                </div>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="controls">
                                <div className="main_input_box">
                                    <button type="submit" className="btn btn-success btn-lg"> Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="main_input_box" style={{ width: '380px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div><Link to="/lostpassword" style={{ color: 'white', fontWeight: 'bold'}}>forget password</Link></div>
                            <div><Link to="/register" style={{ color: 'white', fontWeight: 'bold'}}>Register</Link></div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </React.Fragment>
      );
    }
}


export default Login;