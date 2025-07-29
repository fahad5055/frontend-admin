import React from "react";
import "../../src/App.css";

function PageTitle(props) {
  return (
    <div>
      <h3 className="PageTitle d-flex justify-content-center">{props.title}</h3>
    </div>
  );
}

export default PageTitle;
