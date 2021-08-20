import { toast } from 'react-toastify';
import axios from 'axios';

import logger from './logService';

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error(error.message);
    }

    return Promise.reject(error);
});

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};

export default http;
