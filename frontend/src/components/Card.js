import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const handleClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDelete(card);

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((card) => card._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_active"
  }`;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="card">
        {isOwn && (
          <button className="card__delete" onClick={handleDeleteClick}></button>
        )}

        <img
          className="card__picture"
          alt={card.name}
          src={card.link}
          onClick={handleClick}
        />
        <div className="card__place-down">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            ></button>
            <span className="card__like_count card__span">
              {card.likes.length}
            </span>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default Card;
