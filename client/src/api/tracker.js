import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://378a3f0c.ngrok.io' //need to run ngrok to get this address
});

instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    },
);

export default instance;
