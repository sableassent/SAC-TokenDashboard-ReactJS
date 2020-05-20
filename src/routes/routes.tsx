import * as React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from '../pages/auth/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import LostPassword from '../pages/auth/lostPassword/lostPassword';
import Register from '../pages/auth/register/register';
import Market from '../pages/market/market';




const Routes: React.SFC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <Route  path="/register" component={Register} />
                    <Route path="/lostpassword" component={LostPassword} />
                    <Route  path="/dashboard" component={Dashboard} />
                    <Market />
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;