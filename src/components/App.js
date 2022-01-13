import '../App.css';
import React from "react";
import Popup from "./Popup";
import Main from "./Main";



function App() {

  //Открыть попапы
  const [popupActive, setPopupActive] = React.useState(false);

  // function handleCardClick() {
  //   setIsPopupOpen(true);
  // }

  // function closePopup() {
  //   setPopupActive(true);
  // }



  return (
    <div className="app">

      <header className="header">
      </header>


<Main popupActive={setPopupActive}/>


<footer>Created by liza__silent</footer>
          
<Popup active={popupActive} popupActive={setPopupActive}/>

    </div>
  );
}

export default App;
