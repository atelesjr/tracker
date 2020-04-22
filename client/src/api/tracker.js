import axios from 'axios';

export default axios.create({
    baseURL: 'http://31567a55.ngrok.io' //need to run ngrok to get this address
});

