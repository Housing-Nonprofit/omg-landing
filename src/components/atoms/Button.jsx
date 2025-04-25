import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onclick} className={props.buttonClass}>
      {props.title}
    </button>
  );
};

export default Button;
