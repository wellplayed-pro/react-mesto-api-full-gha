import { API_URL } from "./config"
class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  //Проверка на валидность ответа
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _handleError(err) {
    console.error(err);
  }
  //Запрос карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      credentials: this._credentials,
    }).then((res) => this._checkResponse(res));
  }

  //Добавление новой карточки на сервер
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then((res) => this._checkResponse(res));
  }

  //Получение данных пользователя с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: this._credentials,
    })
      .then((res) => this._checkResponse(res))
      .catch(this._handleError);
  }

  // Передачи данных пользователя с сервера
  setUserInfoApi(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._checkResponse(res));
  }
  //Передача на сервер нового аватара
  setUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }

  //Удаление карточки с сервера
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: this._credentials,
    }).then((res) => this._checkResponse(res));
  }

  changeLikeStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
        credentials: this._credentials,
      }).then((res) => this._checkResponse(res));
    } else {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
        credentials: this._credentials,
      }).then((res) => this._checkResponse(res));
    }
  }
}

export const api = new Api({ baseUrl: API_URL });
