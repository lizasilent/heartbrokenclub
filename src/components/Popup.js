import React from "react";
import "../App.css";

function Popup({ card, closePopup }) {
  return (
    <div className={`popup ${card ? "popup_is-open" : ""}`}>
      <div className="popup__form">
      <button
            className="popup__close-btn"
            type="button"
            onClick={closePopup}
          />
        <div className="popup__form2">


          <div className="popup__text-content_header">
            <p className="popup__header">{card.author}</p>
            <p className="popup__header popup__header_red">{card.book}</p>
          </div>


          <div className="popup__text-content_main">
            <div className="popup__description">
            <p>{card.text}</p><div className="popup__logo"></div>
            </div>
            <div  className="popup__img_container">
            <div
            className="popup__img"
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
          <a className="popup__link" href={card.link} target="blank">
              <p>Купить книгу</p>
            </a>
            
</div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Popup;
