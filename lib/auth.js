import axios from 'axios';

// header = w.Header()
// header.Add("Access-Control-Allow-Origin", "*")
// header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
// header.Add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")


//const proxyurl = "https://cors-anywhere.herokuapp.com/";

const config = {
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }
}


export const signInUser = async user => {
    const { data } = await axios.post(`/login`, user, config);
    return data;
}