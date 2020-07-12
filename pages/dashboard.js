import Layout from '../components/Layout';
import ChartSection from '../components/ChartSection';
import SendForm from '../components/wallet/SendForm';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Layout title="Dashboard">
                <div>
                    <h4 className="text-white ml-5">Dashboard</h4>
                    <div className="d-flex flex-row align-content-start">
                        <ChartSection  />
                        <SendForm  />
                    </div>
                </div>
            </Layout>
        );
    }
}