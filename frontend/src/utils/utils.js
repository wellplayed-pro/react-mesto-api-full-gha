/** Валидация */

const validationSettings = {
  formSelector: ".form-popup",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_act_submit",
  inactiveButtonClass: "popup__button_act_submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    "Content-Type": "application/json",
    authorization: "45bc93fa-1246-4164-bef4-758a1c17ad4b",
  },
};
export { apiConfig, validationSettings };
