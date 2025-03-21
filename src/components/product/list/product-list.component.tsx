import { FC } from "react";
import { ProductModel } from "../../../data/product.model";
import ProductCard from "../card/product-card.component";
import {
  ProductListContainer,
  Title,
  ErrorMessage,
  LoadingMessage,
} from "./product-list.styles";

type ProductListProps = {
  products: ProductModel[];
  error?: string;
  loading?: boolean;
};

const ProductList: FC<ProductListProps> = ({ products, error, loading }) => {
  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <ProductListContainer>
      <Title>Product List</Title>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </ProductListContainer>
  );
};

export default ProductList;
