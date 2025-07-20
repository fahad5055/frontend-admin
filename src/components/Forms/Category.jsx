import { useState } from "react";
import "../../../src/App.css";

// child components
import Button from "../../ChildComponents/Button";
import Inputfild from "../../ChildComponents/Input";

function CategoryForm({ onAddCategory }) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null); // optional
  const [coverImage, setCoverImage] = useState(null); // optional

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !slug) {
      alert("Please enter category name and slug");
      return;
    }

    // send data to parent
    onAddCategory({
      name,
      slug,
      image, // optional
      coverImage, // optional
    });

    // reset fields
    setName("");
    setSlug("");
    setImage(null);
    setCoverImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
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

        <div className="d-flex justify-content-center mt-3">
          <Button title="Create" className="btn-success" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default CategoryForm;
