import React, { useState } from "react";
import { GlobalStyle } from "./styles/global.styles";
import ProductCard from "./components/product/card/product-card.component";
import { productListData } from "./data/product.data";
import ProductCreationContainer from "./components/product-creation-container/product-creation-container.component";
import CreateButton from "./components/create-button/create-button.component";

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateButtonClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <GlobalStyle />
      <h1>Product List</h1>
      <div className="product-list">
        {productListData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <ProductCreationContainer
        visible={modalVisible}
        onClose={handleModalClose}
      />

      <CreateButton onClick={handleCreateButtonClick} />
    </div>
  );
};

export default App;
