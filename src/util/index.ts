import axiosBase from 'axios';

export const axios = axiosBase.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true,
});
