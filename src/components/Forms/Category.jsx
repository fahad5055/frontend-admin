import { useState } from "react";
import "../../../src/App.css";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
// child components
import Button from "../../ChildComponents/Button";
import Inputfild from "../../ChildComponents/Input";
import { CreateCategory } from "../../store/api/CategoryApi";

function Categoryform() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const [image, setImage] = useState(null); // optional
  const [coverImage, setCoverImage] = useState(null); // optional

  const mutation = useMutation({
    mutationFn: (data) => CreateCategory(data),
    onSuccess: (data) => {
      setLoading(false);
      toast.success(data.message);
      refreshCategory();
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      setLoading(false);
      toast.error(errorMessage);
      console.log(errorMessage);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(error);
    mutation.mutate({ name, slug });
  };
  const refreshCategory = () => {
    setName("");
    setSlug("");
    setImage(null);
    setCoverImage(null);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="my-5 shadow p-3 rounded bg-secondary text-white">
        <p className="fw-bold d-flex justify-content-center">Create Category</p>

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
        <p className="text-center text-danger fw-bold">{error}</p>

        <div className="d-flex justify-content-center mt-3">
          <Button title="Create" className="btn-success" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default Categoryform;
