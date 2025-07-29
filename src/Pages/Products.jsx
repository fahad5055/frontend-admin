import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

// childComponents
import PageTitle from "../ChildComponents/PageTitle";
import Button from "../ChildComponents/Button";
import Table from "../ChildComponents/Table";

// icons
import { MdEdit, MdDelete, MdPreview } from "react-icons/md";

// Componets
import ProductsForm from "../Components/Forms/Products";
import ProductPreview from "../Components/Forms/ProductsView"; // Products view

// API
import { useGetProduct } from "../store/api/ProductApi";
import { deleteProduct } from "../store/api/ProductApi";

function Products() {
  const [list, setList] = useState(true);
  const [previewProduct, setPreviewProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  const getProduct = useGetProduct();

  const { data: productData } = useQuery({
    queryKey: ["product"],
    queryFn: getProduct,
  });

  const collums = [
    { header: "SL", accessor: "index" },
    { header: "Product Name", accessor: "title" },
    { header: "Category Name", accessor: "categoryName" },
    { header: "Actions", accessor: "actionButton" },
  ];
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        toast.success("Product deleted successfully");
        // optionally refresh the product list
      } catch (error) {
        toast.error("Failed to delete product");
      }
    }
  };

  const data = productData
    ?.map((product, index) => ({
      index: index + 1,
      title: product?.productNameEnglish,
      categoryName: product?.category?.name,
      actionButton: (
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-sm btn-primary d-flex align-items-center gap-1 shadow"
            onClick={() => {
              setEditProduct(product); // Set the product to edit
              setList(false); // Switch to form view
              setPreviewProduct(null); // Clear preview if open
            }}
          >
            <MdEdit /> Edit
          </button>

          <button
            className="btn btn-sm btn-danger d-flex align-items-center gap-1 shadow"
            onClick={() => handleDelete(product._id)}
          >
            <MdDelete />
            Delete
          </button>

          <button
            className="btn btn-sm btn-warning d-flex align-items-center gap-1 shadow"
            onClick={() => setPreviewProduct(product)} // ✅ open preview
          >
            <MdPreview />
            Preview
          </button>
        </div>
      ),
    }))
    .reverse();
  return (
    <div className="my-2 mx-3 ">
      <div className="container-fluid">
        <PageTitle title="Products" />
        <div className="text-end">
          <div className="ms-5">
            <Button
              className="me-4 "
              title="List"
              onClick={(e) => {
                setList(true);
                setPreviewProduct(null);
              }}
            />
            <Button
              className="me-4 btn-success"
              title="Create"
              onClick={() => {
                setList(false);
                setPreviewProduct(null);
              }}
            />
          </div>

          <div className="my-2">
            {previewProduct ? (
              // ✅ Only show preview
              <ProductPreview
                product={previewProduct}
                onClose={() => setPreviewProduct(null)}
              />
            ) : list ? (
              // ✅ Show product table
              <Table collums={collums} data={data} itemsPerPage={5} />
            ) : (
              // ✅ Show product creation form
              <ProductsForm
                Product={editProduct}
                onSuccess={() => {
                  setEditProduct(null);
                  setList(true); // return to list after update
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
