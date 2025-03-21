import axios from "axios";
import { PRODUCTS_URL } from "../constants/api.constants";
import { ProductModel } from "../data/product.model";
import { AppDispatch } from "../store/store";
import { setProductsAction } from "../store/product/product.slice";

export const createProductApi =
  (product: Partial<ProductModel>) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(PRODUCTS_URL, product);

      const newProduct = response.data;

      dispatch(setProductsAction([newProduct, ...response.data]));

      return newProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };
