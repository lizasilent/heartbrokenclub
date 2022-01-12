import '../App.css';
import React from "react";
import initialCards from "../initials/initial";

function Main() 
{
    return (

      <main className="main">

      <ul className="wrapper"> 
  
      {initialCards.map((card, i) => (
            <li key={card.id} className="wrapper-cell" style={{
              backgroundColor: card.color,
            }}></li>
          ))}
          
   </ul>
       
          </main>
        


    )
}


export default Main;