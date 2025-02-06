const HttpClient = require('../httpClient');

class KinopoiskApiClient {
    _apiProtocol = 'https://';
    _apiHost = 'api.kinopoisk.dev/';
    _apiVersion = 'v1.4';
    _authHeader = 'X-API-KEY';
    _apiToken = process.env.KINOPOISK_API_TOKEN;

    _apiBaseUrl = [this._apiProtocol, this._apiHost, this._apiVersion].join('');
    _httpClient = new HttpClient({
        baseURL: this._apiBaseUrl,
        headers: {
           [this._authHeader]: this._apiToken,
        }
    });

   getMovies(queryParams = {}) {
        return this._httpClient.get('/movie', { params: queryParams });
    }
}

module.exports = new KinopoiskApiClient();