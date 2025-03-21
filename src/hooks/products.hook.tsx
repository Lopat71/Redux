import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { fetchProductsApi } from "../services/product-api.service";
import { selectProducts } from "../store/product/product.selectors";

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = !products.length;
  const error = "";

  useEffect(() => {
    if (!products.length) {
      fetchProductsApi(dispatch);
    }
  }, [dispatch, products.length]);

  return { products, loading, error };
};
