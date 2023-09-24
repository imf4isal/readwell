import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://58.145.187.251:9000/api',
});

export default apiClient;
