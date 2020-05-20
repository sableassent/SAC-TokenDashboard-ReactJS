import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './app_icon.png'

interface IState {
    username: string,
    email: string,
    password: string,
}

type EventInput = React.ChangeEvent<HTMLInputElement>;

class Register extends React.Component<{}, IState> {
   public constructor(props: {}) {
       super(props);
       this.state = {
           username: '',
           email: '',
           password: ''
       };
   }
    
   getWPnonce() {
        axios.get('https://sableassent.net/api/get_nonce/?controller=user&method=register', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error.response);
            })
   }
   handleSubmit(e: any) {
        e.preventDefault();
        this.getWPnonce();
        const user = {
            username: this.state.username,
            email: this.state.email,
            user_password: this.state.password
        }
        console.log(user);
        //window.location.href = '/dashboard';
       
   }

    render() {
        const { username, email, password} = this.state;

        return(
            <React.Fragment>
            <div id="loginbox">            
                <form id="loginform" className="form-vertical" onSubmit={e => this.handleSubmit(e)}>
                    <div className="control-group normal_text"> <h3><img src={logo} height="70" width="70" alt="Logo"/></h3></div>
                    <div className="control-group normal_text"> <h2>Register</h2></div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_lg">
                                    <i className="icon-user"></i>
                                </span>
                                <input name="username" value={username} onChange={e => this.setState({ username: e.target.value})} type="text" placeholder="Username" />
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_lg">
                                    <i className="icon-envelope-alt"></i>
                                </span>
                                <input name="email" value={email} onChange={e => this.setState({ email: e.target.value})} type="text" placeholder="Email" />
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_ly">
                                    <i className="icon-lock"></i>
                                </span>
                                <input name="password" value={password} onChange={e => this.setState({ password: e.target.value})} type="password" placeholder="Password" />
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <button  type="submit" className="btn btn-success btn-lg" style={{ width: '50px !important'}}> Register</button>
                            </div>
                        </div>
                    </div>
                    <div className="main_input_box" style={{ width: '380px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div><Link to="/" style={{ color: 'white', fontWeight: 'bold'}}>Back to Login</Link></div>
                    </div>
                </form>
            </div>
        </React.Fragment>
        )
    }
}


export default Register;