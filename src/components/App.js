import '../App.css';
import React from "react";
import Popup from "./Popup";
import Main from "./Main";



function App() {

  //Открыть попапы
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleCardClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }



  return (
    <div className="app">

      <header className="header">
      </header>


<Main onCardClick={handleCardClick} />


<footer>Created by liza__silent</footer>
          
{/* <Popup onClose={closePopup}/> */}

    </div>
  );
}

export default App;
