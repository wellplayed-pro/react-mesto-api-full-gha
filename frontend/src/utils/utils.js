/** Валидация */

import { API_URL } from "./config"

const validationSettings = {
  formSelector: ".form-popup",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_act_submit",
  inactiveButtonClass: "popup__button_act_submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const apiConfig = {
  url: API_URL,
  headers: {
    'Content-Type': "application/json",
  },
  credentials: 'include'
};
export { apiConfig, validationSettings };
