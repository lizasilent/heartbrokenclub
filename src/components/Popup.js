import { React, useEffect, useRef } from "react";
import "./Popup.css";



function Popup({ card, closePopup }) {

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (event.button !== 0) return; 
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`popup ${card ? "popup_is-open" : ""}`}>
      <div className="popup__form" ref={popupRef}>
        <button onClick={closePopup}
          className="popup__close-btn"
          type="button"
          
        />
        <div className="popup__form2">
          <div className="popup__text-content_header">
            <p className="popup__header">{card.author}</p>
            <p className="popup__header popup__header_red">{card.book}</p>
          </div>

          <div className="popup__text-content_main">
            <div className="popup__description">
              <p>
                {card.text}
                <span className="popup__logo"></span>
              </p>
            </div>
            <div className="popup__img_container">
              <div
                className="popup__img"
                
              ><img src={card.image} alt={card.book}></img></div>
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
