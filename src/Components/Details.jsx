import React from "react";
import five from "../assets/five.png";
import king from "../assets/king.png";
import rep from "../assets/rep.png";
import ivi from "../assets/ivi.png";
import meg from "../assets/meg.png";
import health from "../assets/health.png";
import lit from "../assets/lit.png";

function Details(props) {
  return (
    <div className="details-main-div">
      <div className="details-top-div">
        <div className="details-image-div">
          <img className="details-img-item" src={king} alt="" />
          <img className="details-img-item" src={five} alt="" />
          <img className="details-img-item" src={rep} alt="" />
          <img className="details-img-item" src={ivi} alt="" />
          <img className="details-img-item" src={meg} alt="" />
        </div>
        <div className="details-text-div" style={{ textAlign: "center" }}>
          Скидки за бонусы
        </div>
      </div>
      <div className="details-middle-div">
        <div
          className="details-image-div"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            className="details-position-img-div"
            style={{ position: "relative", display: "flex" }}
          >
            <img className="details-img-item" src={health} alt="" />
            <p className="details-sale-block">3%</p>
          </div>
          <div className="details-position-img-div">
            <img className="details-img-item" src={five} alt="" />
            <p >3%</p>
          </div>
          <div className="details-position-img-div">
            <img className="details-img-item" src={lit} alt="" />
            <p className='details-sale-middle-block'>3%</p>
          </div>
        </div>
        <div className="details-text-div">Большой процент начисления</div>
      </div>
      <div className="details-bottom-div"></div>
    </div>
  );
}

export default Details;
