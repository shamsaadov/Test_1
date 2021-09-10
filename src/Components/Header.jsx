import React from "react";
import headerLogo from "../assets/logo-thank.png";
import geo from "../assets/logo-geoposition.png";
import search from "../assets/search.png";
import styles from "../index.css";

function Header(props) {
  return (
    <div className="main-header-div">
      <div className="header-flex-box">
        <div className="header-logo-div">
          <img src={headerLogo} alt="" />
        </div>
        <div className="header-nav-div">
          <p>
            <ul>
              <li>Купоны и сертификаты</li>
              <li>Впечатления</li>
              <li>Авиабилеты</li>
              <li>Ж/д билеты</li>
              <li>Отели</li>
            </ul>
          </p>
          <p>
            <ul>
              <li>Каршеринг</li>
              <li>Театры</li>
              <li>Страхование</li>
              <li>Как подключитья</li>
              <li>Партнеры</li>
            </ul>
          </p>
        </div>
        <div className="header-geoposition-div">
          <p>
            <img className="header-geo-logo" src={geo} alt="" />
            Санкт-Петербург
          </p>
          <p>
            <img className="header-search-logo" src={search} alt="" />
            Поиск
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
