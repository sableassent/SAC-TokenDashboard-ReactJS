import React from 'react';
import './sidebarRight.css'


class SidebarRight extends React.Component {

    render() {
        return (
            <div id="sidebar-right">
                <div id="sidebar-header">
                    <h5>Make a tranfer</h5>
                </div>
                <div id="address-box">
                    <div>
                        <p>My Address</p>
                    </div>
                    <div>
                        <h5>kjafu4029edsjfslfswoe!ewiffs</h5>
                    </div>
                </div>
                <div id="balance-box">
                    <div>
                        <p>Total Balance</p>
                    </div>
                    <div>
                        <h5>sac 1008446</h5>
                    </div>
                </div>
                <div id="form-container">
                    <form>
                        <div>
                            <input type="text" placeholder="Search crypto address" />
                        </div>
                        <div>
                            <input id="input-test" type="text" placeholder="amount" />
                        </div>
                        <div>
                            <button id="send-crypto" type="submit"> Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default SidebarRight;