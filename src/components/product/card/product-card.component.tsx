
import React from "react";
import {
  ProductCardContainer,
  PriceTag,
  DescriptionContainer,
} from "./product-card.styles";
import Description from "../../description/description.component";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  image,
}) => {
  return (
    <ProductCardContainer>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <PriceTag>${price}</PriceTag>
      <DescriptionContainer>
        <Description text={description} />
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
