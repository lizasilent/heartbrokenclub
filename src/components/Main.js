import "./Main.css";
import React from "react";

function Main({ popupActive, cards, handleText, active }) {
  const red = {
    color: "red",
  };

  const grey = {
    color: "grey",
  };

  return (
    <main className="main">
      <div className="wrapper">
        <ul className="grid">
          {cards.map((card) => (
            <li
              onClick={() => popupActive(card)}
              key={card.id}
              className="grid-cell"
              style={{
                backgroundColor: card.color,
              }}
            ></li>
          ))}
        </ul>
      </div>
      <div className="main__text">
        <h1 onClick={handleText} style={active ? red : grey}>
          <a href="#maintext"> Что это такое? </a>
        </h1>
        {active && (
          <>
            <p className="main__text" id="maintext">
              Работая в торговом зале «Подписных», мы часто сталкивались с запросом «посоветуйте
              книгу, чтоб было про любовь и с хорошим концом». Мы решили собрать ридинг-группу и
              исследовать эту туманную область романов в поисках идеального. Идеального мы не нашли,
              зато обнаружили много очень любопытных книг, и нам захотелось поделиться своими
              открытиями с вами. Так появился сайт «Клуба разбитых сердец», где мы подобрали для
              каждого романа оттенок красного, который наилучшим образом передаёт наши эмоции и
              ассоциации. 
              <br/><br/>Например, любовные письма, написанные с особым трепетом, мы ассоциируем с
              нежным розовым цветом. А сборнику рассказов, который раскрывает перед читателем
              множество различных граней любви, как нельзя лучше подходит фуксия.
              </p>
            <hr />
            <p className="main__text">
              Основной состав ридинг-группы:
              <br />
              <br />
              {[
                "Катя Кожушная",
                "Аня Каннуникова",
                "Катя Блатова",
                "Глеб Дуганов",
                "Наташа Родионова",
                "Саша Соколов",
              ].map((elem) => (
                <>
                  <span className="popup__logo" key={Math.random} />
                  {elem}
                </>
              ))}
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
