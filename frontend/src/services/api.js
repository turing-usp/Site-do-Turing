import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sitegrupoturing.herokuapp.com'
});

export default api;
