import React from "react";

function ButtonComp(props) {
  return (
    <div
      className={`bg-white text-ocistock rounded-2xl py-1 px-4 font-bold hover:bg-ocistock hover:text-white hover:border-white border-2 cursor-pointer ${props.classNameBtn}`}
    >
      <a href='/'>{props.textBtn}</a>
    </div>
  );
}

export default ButtonComp;
