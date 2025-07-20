import React, { useState } from "react";
// childComponents
import PageTitle from "../ChildComponents/PageTitle";
import Button from "../ChildComponents/Button";
import Table from "../ChildComponents/Table";

// Componets
import ProductsForm from "../Components/Forms/Products";

function Products() {
  const [list, setList] = useState(true);

  const collums = [
    {
      header: "SL#",
      accesor: "index",
    },
    {
      header: "Category Name",
      accesor: "CategoryName",
    },
    {
      header: "Category Slug",
      accesor: "CategorySlug",
    },
    {
      header: "Action",
      accesor: "Action",
    },
  ];

  const showData = [
    {
      CategoryName: "alu",
      CategorySlug: "alu",
    },
    {
      CategoryName: "potol",
      CategorySlug: "potol",
    },
    {
      CategoryName: "egg",
      CategorySlug: "egg",
    },
    {
      CategoryName: "banana",
      CategorySlug: "banana",
    },
  ];

  const data = showData.map((name, i) => ({
    index: i + 1,
    CategoryName: name.CategoryName,
    CategorySlug: name.CategorySlug,
    action: <button className="btn btn-danger">Edit</button>,
  }));
  return (
    <div className="my-5 container-fluid">
      <div className="row">
        <div className="col-6">
          <PageTitle title="Products" />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div>
            <Button
              className="me-4 btn-success"
              title="List"
              onClick={(e) => setList(true)}
            />
            <Button
              className="me-4 btn-success"
              title="Create"
              onClick={(e) => setList(false)}
            />
          </div>
        </div>
      </div>
      <div className="my-5">
        {list ? (
          <Table collums={collums} data={data} />
        ) : (
          <div>
            <ProductsForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
