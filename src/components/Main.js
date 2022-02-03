import "../App.css";
import React from "react";

function Main({ popupActive, cards }) {


  return (
    <main className="main">
      <ul className="wrapper">
        {cards.map((card) => (
          <li
            onClick={() => popupActive(card)}
            key={card.id}
            className="wrapper-cell"
            style={{
              backgroundColor: card.color,
            }}
          ></li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
