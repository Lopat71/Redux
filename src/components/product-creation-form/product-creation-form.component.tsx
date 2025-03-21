
import React, { useState } from "react";
import Input from "../input/input.component";
import Button from "../button/button.component";
import { ProductModel } from "../../data/product.model";

interface ProductCreationFormProps {
  onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setError("Title is required");
      return;
    }
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product Title"
        className="input"
      />
      {error && <p>{error}</p>}
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
        className="input"
      />
      <Button type="submit">Create</Button>
    </form>
  );
};

export default ProductCreationForm;
