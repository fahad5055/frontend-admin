import React from "react";

function PageTitle(props) {
  return (
    <div>
      <h3 className="h3 mb-2 p-1 fw-bold border-bottom border-success d-flex justify-content-center">
        {props.title}
      </h3>
    </div>
  );
}

export default PageTitle;
