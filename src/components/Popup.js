import React from 'react';
import '../App.css';


function Popup({onClose}) {
    return (
        // <div className={`popup popup_type_grid-img ${card ? 'popup_is-open' : ''}`}></div>
       <div className="popup popup_is-open">
            <div className="popup__form">
                <button className="popup__close-btn" type="button" onClick={onClose}/>
                <div className="popup__img"></div>
                <div className="popup__text-content">
                <p className="popup__header">Ремез А.</p>
                  <p className="popup__header">Прогулка по прямой : шесть историй о любви</p>
                  <a className="popup__link" href="https://www.podpisnie.ru/books/progulka-po-pryamoy-shest-istoriy-o-lyubvi/" target="blank"><p className="popup__description">Купить книгу</p></a>
                  <p className="popup__description">Первая любовь — радость или тяжёлое испытание? За этим сильным чувством стоит столько переживаний и страхов... На что придётся пойти ради неё? А если будут против родители или засмеют друзья? А что, если мы больше не увидимся, кроме как этим летом на море? А вдруг это всё злая шутка одноклассников?..
Именно этим чувствам и посвящён сборник рассказов Анны Ремез. Шесть историй о любви. Первой, подростковой, очень непростой и очень разной.
Анна Ремез — прозаик, переводчик, финалист премий «Книгуру», премии имени Владислава Крапивина, лауреат премии «Новая детская книга». Ольга Явич — художник книги, руководитель мастерской для детей «Злой волк».</p>
            </div>
            </div>
        </div>
    );
        
    
}

export default Popup; 