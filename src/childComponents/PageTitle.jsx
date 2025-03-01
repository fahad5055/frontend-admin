import React from "react";

function PageTitle(props) {
  return (
    <div>
      <h3 className="h3 mb-4 p-1 fw-bold border-bottom border-success">
        {props.title}
      </h3>
    </div>
  );
}

export default PageTitle;
