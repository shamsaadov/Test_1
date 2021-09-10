import React from "react";
import park from "../assets/technoPark.png";
import first from "../assets/aboutFirst.png";
import two from "../assets/aboutTwo.png";
import three from "../assets/aboutThree.png";
import evro from "../assets/evro.png";
import video from "../assets/mVideo.png";

function About() {
  return (
    <>
    <div className="about-component-main-div">
      <div className="title-for-about">
        <p style={{ textAlign: "center", fontSize: 32, fontWeight: 500 }}>
          3 предложения в категории «Электроника и бытовая техника»
        </p>
        <div className="about-content-div" style={{ display: "flex" }}>
          <div className='about-div-for-margin'>
            <div className="about-content-item">
              <img className="about-item-img" src={first} alt="" />
            </div>
            <div className="subtitle-item-about" style={{ display: "flex" }}>
              <div className="subtitle-img-block">
                <img src={park} alt="" />
              </div>
              <div className="subtitle-text-block">
                <p style={{ opacity: 0.5 }}>Технопарк</p>
                <p style={{ fontSize: 18 }}>
                  20% спасибо за технику Electrolux
                </p>
              </div>
            </div>
          </div>
          <div className='about-div-for-margin'>
            <div className="about-content-item">
              <img className="about-item-img" src={two} alt="" />
            </div>
            <div className="subtitle-item-about" style={{ display: "flex" }}>
              <div className="subtitle-img-block">
                <img src={evro} alt="" />
              </div>
              <div className="subtitle-text-block">
                <p style={{ opacity: 0.5 }}>Технопарк</p>
                <p style={{ fontSize: 18 }}>
                  20% спасибо за технику Electrolux
                </p>
              </div>
            </div>
          </div>
          <div className='about-div-for-margin'>
            <div className="about-content-item">
              <img className="about-item-img" src={three} alt="" />
            </div>
            <div className="subtitle-item-about" style={{ display: "flex" }}>
              <div className="subtitle-img-block">
                <img src={video} alt="" />
              </div>
              <div className="subtitle-text-block">
                <p style={{ opacity: 0.5 }}>Технопарк</p>
                <p style={{ fontSize: 18 }}>
                  20% спасибо за технику Electrolux
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="product-btn-div">
        <button className="product-btn">Еще 4 партнера</button>
      </div>
    </>
  );
}

export default About;
