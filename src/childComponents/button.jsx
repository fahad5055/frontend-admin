import React from "react";
import "../../src/App.css";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`btn-custom ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Button;
