import React from "react";
import "./ButtonComp.css";

const ButtonComp = (props) => {
  return (
    <div className={`btn ${props.classNameBtn}`}>
      <a href='/'>{props.textBtn}</a>
    </div>
  );
};

export default ButtonComp;
