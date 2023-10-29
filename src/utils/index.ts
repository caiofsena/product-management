import { Product } from "../types";

export function getNextValueProductId(products: Array<Product>) {
  if (products.length > 0) {
    let maxId = Math.max(...products.map(item => item.id));
    return ++maxId;
  }
  return 0;
} 