import React from "react";

// childComponets
import Button from "../../childComponents/button";
import Inputfild from "../../childComponents/input";

function ProductsForm() {
  return (
    <div>
      <div className=" my-5 shadow p-2 rounded bg-light">
        <p className="fw-bold">Create Products</p>
        <div className="row">
          <div className="col-4 mb-3">
            <Inputfild
              label="Select a category"
              placeholder="Select a category"
            />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-4">
            <Inputfild label="Select a Brands" placeholder="Select a Brands" />
          </div>
          <div className="col-4">
            <Inputfild
              label="Product Featured"
              placeholder="Product Featured"
            />
          </div>
          <div className="col-4">
            <Inputfild label="Product Status" placeholder="Product Status" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <Inputfild
              label="Product Name for English"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="col-4">
            <Inputfild label="Product Slug" placeholder="Enter Product Slug" />
          </div>
          <div className="col-4">
            <Inputfild label="Product Image" type="file" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <Inputfild
              label="Product Name for Bengali"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <Inputfild label="Product Gallery" type="file" />
          </div>
        </div>
        <Button title="Create" className="btn-success" />
      </div>
    </div>
  );
}

export default ProductsForm;
