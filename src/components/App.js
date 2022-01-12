import '../App.css';
import React from "react";
import Popup from "./Popup";

const initialCards = [
  {
    id: 1,
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
      color: "#F1948A"
  },
  {
    id: 2,
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
      color: "#CB4335"
  },
];





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


      <main className="main">

      <div className="wrapper"> 
  
      {initialCards.map((card, i) => (
            <div key={card.id} className="wrapper-cell" style={{
              backgroundColor: card.color,
            }}></div>
          ))}
          
   </div>
       
          </main>


<footer>Created by liza__silent</footer>
          
<Popup onClose={closePopup}/>

    </div>
  );
}

export default App;
