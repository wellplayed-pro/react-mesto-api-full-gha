import React from "react";
import successImage from "../images/reg_ok.svg";
import errorImage from "../images/reg_error.svg";

function InfoTooltip({ tooltipIcon, title, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_tooltip ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container-infotooltip">
        <div className="popup__icon-tooltip">
          {tooltipIcon === "success" && (
            <img src={successImage} alt="Успешная регистрация" />
          )}
          {tooltipIcon === "error" && (
            <img src={errorImage} alt="Ошибка регистрации" />
          )}
        </div>
        <h2 className="popup__title-infotooltip">{title}</h2>
        <button
          type="button"
          className="popup__button_act_exit"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
