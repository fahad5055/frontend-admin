import React from "react";

// childComponets
import Button from "../../childComponents/button";
import Inputfild from "../../childComponents/input";

function CategoryForm() {
  return (
    <div>
      <div className=" my-5 shadow p-3 rounded bg-secondary">
        <p className="fw-bold">Create Category</p>
        <Inputfild label="Name" placeholder="Vegitable" />
        <Inputfild label="Slug " placeholder="Vegitable" />
        <Inputfild label="Category Image " type="file" />
        <Inputfild label="Category Cover Image" type="file" />
        <Button title="Create" className="btn-success" />
      </div>
    </div>
  );
}

export default CategoryForm;
