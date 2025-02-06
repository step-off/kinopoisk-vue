const axios = require('axios');

class HttpClient {
    constructor(params) {
        this.axiosInstance = axios.create(params);
    }

    async makeRequest(config) {
        let res;
        try {
            res = await this.axiosInstance.request(config);
        } catch(error) {
            return { code: error.code, status: error.status, message: error.message }
        }
        return res.data;
    }

    get(url, searchParams = {}) {
        return this.makeRequest({
            url,
            method: 'get',
            params: searchParams,
        });
    }
}

module.exports = HttpClient;