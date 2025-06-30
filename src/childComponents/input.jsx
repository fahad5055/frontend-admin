import React from "react";

function Inputfild(props) {
  return (
    <div>
      <label className={`my-1 fw-bold ${props.class}`}>{props.label}</label>
      <input
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        className={`form-control form-control-with-icon${props.class}`}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Inputfild;
