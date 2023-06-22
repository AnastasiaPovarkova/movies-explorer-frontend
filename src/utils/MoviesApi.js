class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  
  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }
  
  saveMovie = (movie) => {
    return this._request(`${this._baseUrl}/movies`, {
      method: "POST",
        headers: this._headers,
      });
    };
    
  deleteMovie = (movieId) => {
    return this._request(`${this._baseUrl}/cards/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
      });
    };

}
  
const moviesApi = new MoviesApi({
  baseUrl: "https://api.diploma.anstpov.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});
  
export default moviesApi;