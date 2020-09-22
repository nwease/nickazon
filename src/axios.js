import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-nickazon-618aa.cloudfunctions.net/api' //THE API URL (CLOUD FUNCTION)
    //  http://localhost:5001/nickazon-618aa/us-central1/api
});

export default instance;