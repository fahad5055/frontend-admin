import React from "react";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`btn  mt-3 ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Button;
