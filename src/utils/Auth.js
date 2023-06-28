class Auth {
  constructor(options) {
    this._baseUrl = options.BASE_URL;
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
  
  register = (email, password, name) => {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ email, password, name }),
    });
  };
  
  // _makeRequest = (url, endpoint, method, credentials, body) => {
  //   const headers = { "Content-Type": "application/json" };
  //   const config = { method, headers };
  //   if (credentials) {
  //     config.credentials = "include";
  //   }
  //   if (body !== undefined) {
  //     config.body = JSON.stringify(body);
  //   }
  //   return fetch(`${url}${endpoint}`, config).then((res) => {
  //     const result = res.json();
  //     return res.ok
  //       ? result
  //       : result.then((err) => Promise.reject(`${err.message}`));
  //   });
  // }

  // authorize = (email, password) => {
  //   return this._makeRequest(this._baseUrl, "/signin", "POST", true, {
  //     email,
  //     password,
  //   });
  // }

  authorize = (email, password) => {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      return res;
    });
  };
  
  checkToken = () => {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    });
  };

}
  
const auth = new Auth({
  BASE_URL: "https://api.diploma.anstpov.nomoredomains.rocks",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});
  
export default auth;