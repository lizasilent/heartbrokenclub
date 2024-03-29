import "./Main.css";
import React from "react";

function Main({ popupActive, cards, handleText, active }) {

const red = {
  color: "red"
}

const grey = {
  color: "grey"
}


  return (
    <main className="main">
      <div className="main__text">
        
        <h1 onClick={handleText} style={active ? red : grey}>Что это такое?</h1>
        {
          active && (
            <>
            
            <p className="main__text">
          Работая в торговом зале “Подписных” , мы часто сталкивались с запросом
          “посоветуйте книгу, чтоб было про любовь и с хорошим концом”. Мы
          решили собрать ридинг-группу и исследовать эту туманную область
          романов в поисках идеального. Идеального мы не нашли, зато обнаружили
          много очень любопытных книг, и нам захотелось поделиться результатами
          нашего поиска. Так получился сайт “Клуба разбитых сердец”, где под
          каждый роман мы выбрали подходящий по ощущениям и ассоциациям оттенок
          красного (например, роману о Расине подходит цвет темно-красных
          бархатных кресел в театре, а свежий модернисткий текст о любви в
          Нью-Йорке ассоциируется с ярким, почти арбузным розовым).
        </p>
        <p className="main__text">
          Основной состав ридинг-группы: 
          <span className="popup__logo"></span>Катя Кожушная{" "}
          <span className="popup__logo"></span> Аня Каннуникова{" "}
          <span className="popup__logo"></span> Катя Блатова{" "}
          <span className="popup__logo"></span> Глеб Дуганов{" "}
          <span className="popup__logo"></span> Наташа Родионова{" "}
          <span className="popup__logo"></span> Саша Соколов
        </p>
        <hr/>
        </>
          )
        }
        
      </div>

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
