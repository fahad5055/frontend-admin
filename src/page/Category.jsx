import React, { useState } from "react";
import PageTitle from "../ChildComponents/PageTitle";
import Table from "../ChildComponents/Table";
import CategoryForm from "../components/Forms/Category";

function Category() {
  const [categoryList, setCategoryList] = useState([]);

  const collums = [
    { header: "SL", accesor: "index" },
    { header: "Category Name", accesor: "CategoryName" },
    { header: "Category Slug", accesor: "CategorySlug" },
    { header: "Action", accesor: "action" },
  ];

  // Function passed to CategoryForm
  const handleAddCategory = (newCategory) => {
    const updated = [
      ...categoryList,
      {
        index: categoryList.length + 1,
        CategoryName: newCategory.name,
        CategorySlug: newCategory.slug,
        action: <button className="btn btn-danger btn-sm">Edit</button>,
      },
    ];
    setCategoryList(updated);
  };

  return (
    <div className="my-4">
      <div className="container-fluid">
        <PageTitle title="Product main category" />
        <div className="row">
          <div className="col-sm-3">
            <CategoryForm onAddCategory={handleAddCategory} />
          </div>
          <div className="col-sm-9">
            <Table collums={collums} data={categoryList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
