import React from 'react';
import Head from '../../components/head/head';
import Sidebar from '../../components/sidebar/sidebar';




class Dashboard extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Head />
                <Sidebar />
            </React.Fragment>
        );
    }
}


export default Dashboard;