import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  .product-list {
    display: flex;            
    flex-wrap: wrap;            
    gap: 20px;                 
    justify-content: space-between; 
    padding: 20px;
  }

  .product-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;              
    padding: 16px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    font-size: 1.2em;
    margin: 10px 0;
  }

  p {
    font-size: 1em;
    color: #888;
  }

  .description-button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .description-button:hover {
    background-color: #2980b9;
  }
`;
