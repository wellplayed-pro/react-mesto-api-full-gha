import React from "react";

function PopupWithForm({
  name,
  title,
  onClose,
  isOpen,
  children,
  onSubmit,
  buttonText,
}) {
  return (
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button popup__button_act_exit"
          type="button"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={`form-${name}`}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="popup__button popup__button_act_submit"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
