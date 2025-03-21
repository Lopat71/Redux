import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../data/product.model";

interface ProductState {
  products: ProductModel[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsAction } = productSlice.actions;

export default productSlice.reducer;
