import '../App.css';
import React from "react";
import Popup from "./Popup";
import Main from "./Main";
import initialCards from "../initials/initial";


function App() {

  //Открыть попапы
  const [popupActive, setPopupActive] = React.useState(false);


  function handleCardClick() {
    setPopupActive(true);
  }

  function closePopup() {
    setPopupActive(false)
  }

  
  return (
    <div className="app">

      <header className="header">
      </header>


<Main popupActive={handleCardClick}/>

<Popup active={popupActive} closePopup={closePopup} />

<footer>Created by liza__silent</footer>

    

    </div>


  );
}

export default App;
