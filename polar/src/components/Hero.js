import "./Hero.css";

import React from "react";

function Hero(props) {
  return (
    <div className="hero-cointainer">
      <div className={props.cName}>
        <img className={props.imgclass} alt="img" src={props.img} />
      </div>
      <div className={props.textdiv}>
        <h1>{props.H}</h1>
        <p>{props.Ptext}</p>
      </div>
      <div className="btn">
        <a href={props.href} className={props.Aclassname}>
          {props.Atag}
        </a>
      </div>
    </div>
  );
}

export default Hero;
