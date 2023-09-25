import { create } from 'apisauce';

//file name: SauceExample.js
//extra code removed for brevity purposes

//The baseURL will be our starting point.
const api = create({
    baseURL: 'http://127.0.0.1:9000/api/listings',
});

const fetchData = () => {
    //make request to baseURL + '/hot'
    api.get()
        .then((response) => response.data)
        .then((data) => console.log(data));
};

fetchData();
