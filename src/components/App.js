import '../App.css';
import React from "react";
import Popup from "./Popup";


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

      <header className="app-header">
      </header>
      <main className="main">
      <div className="wrapper">
          <div className="wrapper-cell" onClick={handleCardClick}></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          <div className="wrapper-cell"></div>
          </div>
          </main>


<footer>Created by liza__silent</footer>
          
<Popup onClose={closePopup}/>

    </div>
  );
}

export default App;
