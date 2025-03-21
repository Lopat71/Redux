import React from "react";
import Modal from "../modal/modal.component";
import ProductCreationForm from "../product-creation-form/product-creation-form.component";
import { ProductModel } from "../../data/product.model";

interface ProductCreationContainerProps {
  visible: boolean;
  onClose: () => void;
}

const ProductCreationContainer: React.FC<ProductCreationContainerProps> = ({
  visible,
  onClose,
}) => {
  const handleSubmit = async (product: Partial<ProductModel>) => {
    try {
      console.log("Product submitted:", product);
      onClose();
    } catch (error) {
      console.error("Failed to create product", error);
    }
  };

  return (
    <Modal title="Create Product" visible={visible} onClose={onClose}>
      <ProductCreationForm onSubmit={handleSubmit} />
    </Modal>
  );
};

export default ProductCreationContainer;
