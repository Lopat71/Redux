import React from "react";
import Modal from "../modal/modal.component";
import ProductCreationForm from "../product-creation-form/product-creation-form.component";
import { ProductModel } from "../../data/product.model";
import { productListData } from "../../data/product.data";

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
      productListData.push({
        id: 1,
        title: product.title as string,
        price: 109.95,
        description: product.description as string,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      });

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
