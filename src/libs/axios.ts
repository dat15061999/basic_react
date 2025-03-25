import axios from 'axios';
// import localStorage, {StorageKeys} from "./localStorage.ts";

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
    config => {
        if (!config.headers.Authorization) {
            //const token = localStorage().getToken(StorageKeys.APPLICATION_ID);

            // if (token) {
            //     config.headers.Authorization = `Bearer ${token}`;
            // }
        }

        return config;
    },
    error => Promise.reject(error)
);


export default axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    timeout: 1000,
    headers: {
        "Content-Type": 'application/json',
    },
});

