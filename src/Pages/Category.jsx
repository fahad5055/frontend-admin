import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../ChildComponents/PageTitle";
import Table from "../ChildComponents/Table";
import CategoryForm from "../Components/Forms/Category";
import { MdEdit } from "react-icons/md";
import { useGetCategory } from "../store/api/CategoryApi";

function Category() {
  const [editCategory, setEditCategory] = useState(null);

  const getCategory = useGetCategory();

  const { data: categoryData } = useQuery({
    queryKey: "category",
    queryFn: getCategory,
    refetchInterval: 1000,
    refetchOnWindowFocus: true,
  });

  const columns = [
    { header: "SL", accessor: "index" },
    { header: "Name", accessor: "title" },
    { header: "Slug", accessor: "slug" },
    { header: "Actions", accessor: "actionButton" },
  ];

  const data = categoryData
    ?.map((category, index) => ({
      index: index + 1,
      title: category?.name,
      slug: category?.slug,
      actionButton: (
        <button
          className="btn btn-sm btn-primary gap-1 shadow"
          onClick={() => setEditCategory(category)}
        >
          <MdEdit /> Edit
        </button>
      ),
    }))
    .reverse();

  return (
    <div className="my-2 mx-5">
      <div className="container-fluid">
        <PageTitle title="Category create for product" />
        <div className="row">
          <div className="col-sm-3">
            <CategoryForm
              category={editCategory}
              onSuccess={() => setEditCategory(null)} // ✅ reset form after update
            />
          </div>
          <div className="col-sm-9 mt-3">
            <Table collums={columns} data={data} itemsPerPage={6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
