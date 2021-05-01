// import faker from "faker";
import products from "./Fixtures/Products.json";

export const BuildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ ...products[i] });
  }

  return result;
};

export const BuildProduct = () => BuildProductList(1)[0];
