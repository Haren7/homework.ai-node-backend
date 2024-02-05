const { HttpRequestUtils } = require("../utils/httpRequestUtils");

class WolframAlpha {
    fullResultsAPIKey;
    endpoint;
    httpRequestUtils;
    constructor () {
        this.fullResultsAPIKey = process.env.FULL_RESULTS_APP_ID;
        this.endpoint = process.env.WOLFRAM_API_ENDPOINT;
        this.httpRequestUtils = new HttpRequestUtils();
    }

    async solve (equation) {
        const params = {
            "appid": this.fullResultsAPIKey,
            "input": equation
        }
        return await this.httpRequestUtils.sendGetRequest(this.endpoint, {}, params);
    }
}

module.exports = {WolframAlpha}