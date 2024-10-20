import axios from 'axios';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getGuides() {
    return axios.get(`${this._baseUrl}/guides`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getGuide(guideId) {
    return axios.get(`${this._baseUrl}/guides/${guideId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  likeGuide(guide) {
    return axios.put(`${this._baseUrl}/guides`, guide, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getGuidesByCategory(categoryId) {
    return axios.get(`${this._baseUrl}/guides/categories/${categoryId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getCategories() {
    return axios.get(`${this._baseUrl}/categories`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  register(userData) {
    return axios.post(`${this._baseUrl}/api/auth/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res))
      .catch((res) => Promise.reject(res.response.data));
  }

  login(userData) {
    return axios.post(`${this._baseUrl}/api/auth/login`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res))
      .catch((res) => Promise.reject(res.response.data));
  }
}

const api = new Api({
  baseUrl: 'http://51.250.101.1:8080',
});

export default api;
