import React from 'react';

import Head from '../../components/head/head';
import Sidebar from '../../components/sidebar/sidebar';
import SidebarRight from '../../components/sidebar-right/sidebarRight';
import './market.css';
import axios from 'axios';
import 'chart.js'
const { LineChart, PieChart } = require('react-chartkick');
const API_KEY = 'f9e8013bb714ccb58744e696dba2055d';






// const data = [
//   {"name":"ETH", "data": {"2017-01-01": 3, "2017-01-02": 9, "2017-01-03": 4,}},
//   {"name":"BTC", "data": {"2017-01-01": 5, "2017-01-02": 3, "2017-01-03": 7,}},
//   {"name":"XRP", "data": {"2017-01-01": 8, "2017-01-02": 5, "2017-01-04": 1,}}
// ];
type coinType ={
    id: string,
    name: string,
    price: string,
    price_date: string
}
let data: coinType [];

class Market extends React.Component {

    componentDidMount() {
        axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD`)
           .then(res => {
                console.log(res.data);
           })
           .catch(error => {
               console.log(error.response);
           })
    }

    render() {
        return (
            <React.Fragment>
                <Head />
                <Sidebar />
                <SidebarRight />
                <div id="content">
                    <LineChart data={data} />
                </div>
            </React.Fragment>
        );
    }
}


export default Market;