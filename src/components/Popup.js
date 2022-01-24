import React from 'react';
import '../App.css';


function Popup({active, closePopup, card}) {

    // function ImagePopup({card, onClose}) {
  
    //     return(
    //         <div className={`popup popup_type_grid-img ${card ? 'popup_is-open' : ''}`}>
    //                 <div className="popup__form">
    //                   <button className="popup__close-btn" type="button" onClick={onClose} />
    //                   <img className="popup__image" src={card.link} alt={card.name} />
    //                   <h2 className="popup__title">{card.name}</h2> 
    //                 </div>
    //               </div>
    //     )
    //     }


    return (

            <div className={`popup ${card ? 'popup_is-open' : ''}`} onClick={closePopup}>
            <div className="popup__form" >
                <button className="popup__close-btn" type="button" onClick={closePopup}/>
                <div className="popup__img"></div>
                <div className="popup__text-content">
                <p className="popup__header">{card.author}</p>
                  <p className="popup__header">{card.book}</p>
                  <a className="popup__link" href={card.link}><p>Купить книгу</p></a>
                  <p className="popup__description">{card.text}</p>
            </div>
            </div>
        </div>
        
       
    );
        
    
}

export default Popup; 