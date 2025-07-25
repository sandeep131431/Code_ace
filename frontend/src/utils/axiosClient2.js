import axios from "axios"

const axiosClient2 =  axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient2;

