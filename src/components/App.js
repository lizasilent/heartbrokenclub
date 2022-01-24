import '../App.css';
import React from "react";
import Popup from "./Popup";
import Main from "./Main";
import initialCards from "../initials/initial";


function App() {

  //Открыть попапы
  const [popupActive, setPopupActive] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);


  function handleCardClick(card) {
    setPopupActive(true);
    setSelectedCard(card);
  }

  function closePopup() {
    setPopupActive(false);
    setSelectedCard(false);
  }




  return (
    <div className="app">

      <header className="header">
      </header>


<Main popupActive={handleCardClick} cards={initialCards}/>

<Popup active={popupActive} closePopup={closePopup} card={selectedCard}/>

<footer>Created by liza__silent</footer>

    

    </div>


  );
}

export default App;
