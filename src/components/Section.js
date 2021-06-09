import React from "react";
import "../styles/Section.scss";
import { Zoom, Fade } from "react-awesome-reveal";
export const Section = ({ bgr, title, des, leftBtn, rightBtn }) => {
  return (
    <div className="wrap">
      <img src={bgr} className="img" alt="" />

      <div className="contentGroup">
        <Zoom top>
          <div className="textGroup">
            <h1>{title}</h1>
            <p>{des}</p>
          </div>
        </Zoom>
        <Fade left>
          <div className="buttonGroup">
            <div className="buttonLeft">{leftBtn}</div>
            {rightBtn && <div className="buttonRight">{rightBtn}</div>}
          </div>
        </Fade>
      </div>
    </div>
  );
};
