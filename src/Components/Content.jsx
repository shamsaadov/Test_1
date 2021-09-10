import React from "react";
import Switches from "./Toggle";

function Content(props) {
  return (
    <div className="content-main-div">
      <div className="title">
        <p>Партнеры и предложения</p>
      </div>
      <div className="content-component-div-with-btns">
        <div className="button-content-div">
          <button className="content-btn">Все партнеры</button>
          <button className="content-btn">Популярные</button>
          <button className="content-btn">Супермаркеты</button>
          <button className="content-btn">Кафе и рестораны</button>
          <button className="content-btn">Такси</button>
          <button className="content-btn">Красота</button>
        </div>
        <div className="button-content-div">
          <button className="content-btn">Электроника и бытовая техника</button>
          <button className="content-btn">Зоотовары</button>
          <button className="content-btn">Кино и театр</button>
          <button className="content-btn">...</button>
        </div>
      </div>
      <div className="content-div-with-toggle">
        <span style={{ marginRight: 20 }}>Начисляют спасибо</span>
        <Switches />
        <span className="text-green">Принимают спасибо</span>
      </div>
    </div>
  );
}

export default Content;
