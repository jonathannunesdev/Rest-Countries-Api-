import axios from 'axios';

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
});

export const Api = {
    getAllCountries: async () => {
        const req =  await http.get(`/all`);
        return req.data 
    }
};

