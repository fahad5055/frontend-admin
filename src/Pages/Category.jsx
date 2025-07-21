import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../ChildComponents/PageTitle";
import Table from "../ChildComponents/Table";
import CategoryForm from "../Components/Forms/Category";
import { FaEdit } from "react-icons/fa";

import { useGetCategory } from "../store/api/CategoryApi";

function Category() {
  const [categoryList, setCategoryList] = useState([]);

  const getCategory = useGetCategory();

  const {
    data: categoryData,
    isLoading: isRoleLoading,
    error: roleError,
  } = useQuery({
    queryKey: "category",
    queryFn: getCategory,
    refetchInterval: 1000, // ⏱ Auto-refetch every 1 seconds
    refetchOnWindowFocus: true,
  });

  console.log(categoryData);

  const columns = [
    {
      header: "SL",
      accessor: "index",
    },
    {
      header: "Name",
      accessor: "title",
    },
    {
      header: "Slug",
      accessor: "slug",
    },
    {
      header: "Actions",
      accessor: "actionButton",
    },
  ];

  const data = categoryData
    ?.map((category, index) => ({
      index: index + 1,
      title: category?.name,
      slug: category?.slug,
      actionButton: (
        <>
          <button className="btn text-dark mx-2">
            <FaEdit />
          </button>
        </>
      ),
    }))
    .reverse();

  return (
    <div className="my-4">
      <div className="container-fluid">
        <PageTitle title="Product main category" />
        <div className="row">
          <div className="col-sm-3">
            {/* <CategoryForm onAddCategory={handleAddCategory} /> */}
            <CategoryForm />
          </div>
          <div className="col-sm-9">
            <Table collums={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
