import { useEffect, useState } from "react";
import "../../../src/App.css";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

// child components
import Button from "../../ChildComponents/Button";
import Inputfild from "../../ChildComponents/Input";

// API
import { CreateCategory, UpdateCategory } from "../../store/api/CategoryApi";

function Categoryform({ category = null, onSuccess }) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isEdit = !!category;

  useEffect(() => {
    if (isEdit) {
      setName(category.name || "");
      setSlug(category.slug || "");
    } else {
      resetCategory();
    }
  }, [category]);

  const mutation = useMutation({
    mutationFn: (data) => {
      if (isEdit) {
        return UpdateCategory({ id: category._id, ...data });
      } else {
        return CreateCategory(data);
      }
    },
    onSuccess: (data) => {
      setLoading(false);
      toast.success(data.message || "Success");
      resetCategory();
      if (onSuccess) {
        onSuccess(); // Call parent to refetch updated data
      }
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      setLoading(false);
      setError(errorMessage);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(error);
    mutation.mutate({ name, slug });
  };

  const resetCategory = () => {
    setName("");
    setSlug("");
    setImage(null);
    setCoverImage(null);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="my-3 shadow p-3 rounded bg-secondary text-white">
        <p className="fw-bold d-flex justify-content-center">
          {isEdit ? "Update Category" : "Create Category"}
        </p>

        <Inputfild
          label="Name"
          placeholder="Vegetable"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Inputfild
          label="Slug"
          placeholder="vegetable"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <Inputfild
          label="Category Image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <Inputfild
          label="Category Cover Image"
          type="file"
          onChange={(e) => setCoverImage(e.target.files[0])}
        />

        {error && <p className="error text-center fw-bold">{error}</p>}
        {loading && (
          <div className="loading-overlay text-center">
            <div className="pulse-dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>{loading}</p>
          </div>
        )}

        <div className="d-flex justify-content-center mt-3">
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

export default Categoryform;
