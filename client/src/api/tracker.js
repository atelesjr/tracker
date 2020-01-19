import axios from 'axios';

export default axios.create({
    baseURL: 'http://72053887.ngrok.io' //need to run ngrok to get this address
});

