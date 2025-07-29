import React from "react";
import "../../../src/App.css";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

// childComponets
import Button from "../../ChildComponents/Button";
import Inputfild from "../../ChildComponents/Input";
import TableFormTitle from "../../ChildComponents/TableFormTitle";

// API
import { createProduct, UpdateProduct } from "../../store/api/ProductApi";
import { useGetCategory } from "../../store/api/CategoryApi";

function ProductsForm({ Product = null, onSuccess }) {
  const [category, setCategory] = useState("");
  const [productNameEnglish, setProductNameEnglish] = useState("");
  const [productNameBangla, setProductNameBangla] = useState("");
  const [productSlug, setProductSlug] = useState("");
  const [brand, setBrand] = useState("");
  const [featured, setFeatured] = useState("");
  const [Status, setStatus] = useState("");
  const [Details, setDetails] = useState("");
  const [regularPrice, setregularPrice] = useState("");
  const [discountPrice, setdiscountPrice] = useState("");
  const [warranty, setwarranty] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [code, setCode] = useState("");
  const [returnPolicy, setreturnPolicy] = useState("");
  const [Images, setImages] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getCategory = useGetCategory();

  const isEdit = !!Product;

  useEffect(() => {
    if (isEdit && Product) {
      setCategory(Product.category || "");
      setProductNameEnglish(Product.productNameEnglish || "");
      setProductNameBangla(Product.productNameBangla || "");
      setProductSlug(Product.productSlug || "");
      setBrand(Product.brand || "");
      setFeatured(Product.featured || "");
      setStatus(Product.Status || "");
      setDetails(Product.Details || "");
      setregularPrice(Product.regularPrice || "");
      setdiscountPrice(Product.discountPrice || "");
      setwarranty(Product.warranty || "");
      setexpiryDate(Product.expiryDate || "");
      setQuantity(Product.quantity || "");
      setCode(Product.code || "");
      setreturnPolicy(Product.returnPolicy || "");
      setImages(Product.images || []);
    }
  }, [isEdit, Product]); // ✅ Fix ESLint warning by adding dependencies

  const mutation = useMutation({
    mutationFn: (data) =>
      isEdit
        ? UpdateProduct({ id: Product._id, ...data })
        : createProduct(data),
    onSuccess: (data) => {
      setLoading(false);
      toast.success(data.message || "Success");
      if (onSuccess) {
        onSuccess(); // Call parent to refetch updated data
      }
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      setLoading(false);
      setError(errorMessage);
      console.error(errorMessage);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(error);
    mutation.mutate({
      category,
      productNameEnglish,
      productNameBangla,
      productSlug,
      brand,
      featured,
      Status,
      regularPrice,
      discountPrice,
      expiryDate,
      quantity,
      returnPolicy,
      warranty,
      Details,
      code,
      Images,
    });
  };

  const { data: categoryList = [] } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="my-2 shadow p-2 rounded bg-light">
        <TableFormTitle title={isEdit ? "Update Product" : "Create Product"} />
        <div className="text-start">
          <div className="row">
            <div className="col-3">
              <label className="form-label fw-bold">Select a Category</label>

              <select
                class="form-select"
                aria-label="Default select example"
                value={category?._id || ""}
                onChange={(e) => {
                  const selected = categoryList.find(
                    (cat) => cat._id === e.target.value
                  );
                  setCategory(selected); // save full object
                }}
              >
                <option value="">Select Category</option>
                {categoryList.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <Inputfild
                label="Product Name for English"
                placeholder="Products Name"
                value={productNameEnglish}
                onChange={(e) => setProductNameEnglish(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Product Name for Bangla"
                placeholder="পণ্যের নাম"
                value={productNameBangla}
                onChange={(e) => setProductNameBangla(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Product Slug"
                placeholder="Product Slug"
                value={productSlug}
                onChange={(e) => setProductSlug(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <Inputfild
                label="Product Brand"
                placeholder="Product Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Product Featured"
                placeholder="Product Featured"
                value={featured}
                onChange={(e) => setFeatured(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Product Status"
                placeholder="Product Status"
                value={Status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Product Details"
                placeholder="Product Details"
                value={Details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <Inputfild
                label="Regular Price"
                placeholder="Regular Price"
                type="number"
                value={regularPrice}
                onChange={(e) => setregularPrice(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Discount Price"
                type="number"
                placeholder="Discount Price"
                value={discountPrice}
                onChange={(e) => setdiscountPrice(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Warranty Info"
                placeholder="Warranty Info"
                value={warranty}
                onChange={(e) => setwarranty(e.target.value)}
              />
            </div>

            <div className="col-3">
              <Inputfild
                label="Product Expiry Date"
                type="date"
                placeholder="Expiry Date"
                value={expiryDate}
                onChange={(e) => setexpiryDate(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-3">
              <Inputfild
                label="Quantity"
                placeholder="Number of quantity available"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Product code"
                placeholder="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Return Policy"
                placeholder="Return Policy"
                value={returnPolicy}
                onChange={(e) => setreturnPolicy(e.target.value)}
              />
            </div>
            <div className="col-3">
              <Inputfild
                label="Product Images"
                type="file"
                multiple
                value={Images}
                onChange={(e) => setImages(e.target.value)}
              />
            </div>
          </div>
        </div>
        {error && <p className="error text-center fw-bold">{error}</p>}
        {loading && (
          <div className="loading-container text-center">
            <div className="spinner"></div>
            <p className="loading-msg fw-bold">{loading}</p>
          </div>
        )}
        <div className="text-center p-2">
          <Button
            title={
              loading
                ? isEdit
                  ? "Updating..."
                  : "Creating..."
                : isEdit
                ? "Update"
                : "Create"
            }
            className={isEdit ? "btn-warning" : "btn-success"}
            type="submit"
            disabled={loading}
          />
        </div>
      </div>
    </form>
  );
}

export default ProductsForm;
