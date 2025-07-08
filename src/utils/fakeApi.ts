import { productList } from './productData';

export const fetchProducts = (): Promise<typeof productList> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 1500); // Simulates 1.5s network delay
  });
};
