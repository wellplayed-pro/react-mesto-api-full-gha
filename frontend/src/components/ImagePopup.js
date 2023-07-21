import React from "react";

function ImagePopup({ onClose, card }) {
  return (
    <div className={`popup popup_type_image ${card && "popup_opened"}`}>
      <figure className="popup__background">
        <button
          onClick={onClose}
          className="popup__button popup__button_act_exit"
          type="button"
        ></button>
        <img
          src={card && card.link}
          alt={card && card.name}
          className="popup__photo"
        />
        <figcaption className="popup__figcaption">
          {card && card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
