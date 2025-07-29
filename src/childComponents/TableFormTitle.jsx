import React from "react";
import "../../src/App.css";

function TableFormTitle(props) {
  return (
    <div
      className={`TableForm-Title d-flex justify-content-center ${
        props.className || ""
      }`}
    >
      {props.title}
    </div>
  );
}

export default TableFormTitle;
