
import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 16px;
  padding: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 8px;
    max-height: 200px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.2rem;
    color: #333;
    margin-top: 12px;
  }

  p {
    font-size: 1rem;
    color: #777;
  }
`;

export const PriceTag = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #28a745;
`;

export const DescriptionContainer = styled.div`
  margin-top: 16px;
  text-align: left;
`;

export const ShowDetailsButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;
