// const fetch = require('node-fetch');
const axios = require('axios');
const {URL, URLSearchParams} = require('url');

class HttpRequestUtils {
    constructor() {}

    async sendPostRequest(url, headers, body) {
        // try {
        //     const response = await fetch(url, headers, JSON.stringify(body));
        //     return response.json();
            
        // } catch (error) {
        //     console.error(error);        
        // }
    }

    async sendGetRequest(baseUrl, headers = {}, params = {}) {
        try {
            const url = new URL(baseUrl);
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
            console.log(url)
            const response = await axios.get(url, headers);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = {HttpRequestUtils};