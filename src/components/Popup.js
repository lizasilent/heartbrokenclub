import React from "react";
import "../App.css";

function Popup({ card, closePopup }) {
  return (
    <div
      className={`popup ${card ? "popup_is-open" : ""}`}
      
    >
      <div className="popup__form">
        <button
          className="popup__close-btn"
          type="button"
          onClick={closePopup}
        />
        <div className="popup__img" ></div>
        <div className="popup__text-content">
          <p className="popup__header">{card.author}</p>
          <p className="popup__header">{card.book}</p>
          <a className="popup__link" href={card.link} target="blank">
            <p>Купить книгу</p>
          </a>
          <p className="popup__description">{card.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
