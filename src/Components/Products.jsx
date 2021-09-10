import React from "react";
import mvideo from "../assets/mVideo.png";
import burger from "../assets/burger.png";
import bork from "../assets/bork.png";
import park from "../assets/technoPark.png";
function Products(props) {
  return (
    <>
      <div className="header-flex-box">
        <div className="products-item-div">
          <h1 style={{ fontSize: 24 }}> 1.5 %</h1>
          <p className="thank-for-buy">Спасибо от суммы покупки</p>
          <div className="products-item-bottom-div">
            <img src={mvideo} alt="" />
            <p style={{ fontSize: 16, opacity: "0.5" }}>М.Видео</p>
          </div>
        </div>
        <div className="products-item-div">
          <h1 style={{ fontSize: 24 }}> 3 %</h1>
          <p className="thank-for-buy">Спасибо от суммы покупки</p>
          <div className="products-item-bottom-div">
            <img src={burger} alt="" />
            <p style={{ fontSize: 16, opacity: "0.5" }}>Бургер Кинг</p>
          </div>
        </div>
        <div className="products-item-div">
          <h1 style={{ fontSize: 24 }}> 4.5 %</h1>
          <p className="thank-for-buy">Спасибо от суммы покупки</p>
          <div className="products-item-bottom-div">
            <img src={park} alt="" />
            <p style={{ fontSize: 16, opacity: "0.5" }}>Холодильник.ру</p>
          </div>
        </div>
        <div className="products-item-div">
          <h1 style={{ fontSize: 24 }}>1.5%</h1>
          <p className="thank-for-buy ">Спасибо от суммы покупки</p>
          <div className="products-item-bottom-div">
            <img src={bork} alt="" />
            <p style={{ fontSize: 16, opacity: "0.5" }}>BORK</p>
          </div>
        </div>
      </div>
      <div className="product-btn-div">
        <button className="product-btn">Еще 4 партнера</button>
      </div>
    </>
  );
}

export default Products;
