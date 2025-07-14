import React from "react";
import PageTitle from "../ChildComponents/PageTitle";
import Table from "../ChildComponents/Table";
import CategoryForm from "../Components/Forms/Category";

function Category() {
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
    <div className="my-4">
      <div className="container-fluid">
        <PageTitle title="Product main category" />
        <div className="row">
          <div className="col-sm-3">
            <CategoryForm />
          </div>
          <div className="col-sm-9">
            <Table collums={collums} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
